function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

$(document).ready(function() {
    let nightActive = false;
    let isRealTimePaused = false; // true means manual control/paused real-time, false means real-time active
    
    const sky = $('.hero');
    const nav = $('nav');
    const navLinks = $('.nav-links');
    const timeSlider = $('#time-slider');
    const timeDisplay = $('#time-display');
    const resetTimeBtn = $('#reset-time-btn');

    // --- Mobile Navigation ---
    // Create and append hamburger menu icon
    const hamburger = $('<div class="hamburger-menu"><div class="line1"></div><div class="line2"></div><div class="line3"></div></div>');
    nav.append(hamburger);

    // Add click listener for hamburger to toggle the menu
    hamburger.on('click', () => {
        navLinks.toggleClass('nav-active');
        hamburger.toggleClass('toggle');
    });

    // Close menu when a navigation link is clicked for better UX
    navLinks.find('a').on('click', () => {
        if (navLinks.hasClass('nav-active')) {
            navLinks.removeClass('nav-active');
            hamburger.removeClass('toggle');
        }
    });

    // 1. Milky Way Star Generation
    function initMilkyWay() {
        // Reduce star count on mobile for performance
        const isMobile = $(window).width() < 768;
        const bgStarCount = isMobile ? 30 : 60;
        const mwStarCount = isMobile ? 80 : 200;

        for(let i = 0; i < bgStarCount; i++) {
            let size = Math.random() * 3;
            let star = $('<div class="star"></div>').css({
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                width: size + 'px',
                height: size + 'px',
                animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`
            });
            sky.append(star);
        }

        for(let i = 0; i < mwStarCount; i++) {
            // Use Math.pow to bias stars toward the top (y=0)
            let top = Math.pow(Math.random(), 2) * 100; 
            
            // Cluster stars along a diagonal band (y = x) for Milky Way look
            let randomSpread = (Math.random() - 0.5) * 30;
            let left = (top + 10 + randomSpread) % 100;

            let size = Math.random() * 2.5;
            let star = $('<div class="star"></div>').css({
                top: top + '%',
                left: left + '%',
                width: size + 'px',
                height: size + 'px',
                animation: `twinkle ${3 + Math.random() * 4}s infinite ease-in-out`
            });
            sky.append(star);
        }
    }

    function triggerShootingStar() {
        if (!nightActive) return;

        const star = $('<div class="shooting-star"></div>');
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        star.css({ left: startX + '%', top: startY + '%', transform: 'rotate(-35deg)' });
        sky.append(star);

        star.animate({
            left: (startX - 20) + '%',
            top: (startY + 20) + '%',
            opacity: 1
        }, 800, 'linear', function() {
            $(this).fadeOut(400, function() { $(this).remove(); });
        });
    }

    function getMoonPhase(customPhase) {
        if (customPhase !== undefined) {
            return customPhase;
        }
        const LUNAR_CYCLE = 29.530588853;
        // A known new moon (e.g., Jan 21, 2023, 20:53 UTC)
        const KNOWN_NEW_MOON = new Date('2023-01-21T20:53:00Z');
        const now = new Date();

        const daysSinceNewMoon = (now.getTime() - KNOWN_NEW_MOON.getTime()) / (1000 * 60 * 60 * 24);
        const lunarDay = daysSinceNewMoon % LUNAR_CYCLE;
        
        // phase is a value from 0 to 1 (0=New, 0.5=Full, 1=New)
        return lunarDay / LUNAR_CYCLE;
    }

    function generateForest() {
        const treeGroup = $('#back-trees');
        if (!treeGroup.length) return;

        const svgNS = "http://www.w3.org/2000/svg";
        const viewBoxWidth = 800;
        const groundLevel = 280;

        const isMobile = $(window).width() < 768;
        const numTrees = isMobile ? 5 : 10;

        const placedTrees = [];
        const minGap = 5; // Minimum pixels between trees

        for (let i = 0; i < numTrees; i++) {
            const treeWidth = 30 + Math.random() * 20;
            const treeHeight = 50 + Math.random() * 80;
            const yPos = groundLevel + Math.random() * 20;
            let xPos;
            let overlaps;
            let attempts = 0;

            do {
                xPos = Math.random() * (viewBoxWidth - treeWidth);
                overlaps = false;
                for (const placed of placedTrees) {
                    // Check for overlap, including the gap
                    if (xPos < placed.x + placed.width + minGap && xPos + treeWidth + minGap > placed.x) {
                        overlaps = true;
                        break;
                    }
                }
                attempts++;
            } while (overlaps && attempts < 100); // Try 100 times to find a spot

            if (!overlaps) {
                placedTrees.push({ x: xPos, width: treeWidth });

                const midX = xPos + treeWidth / 2;
                const topY = yPos - treeHeight;
                const numTiers = 4;
                const tierHeight = treeHeight / numTiers;

                let pathData = `M ${midX} ${topY}`;

                // Left Side (Down)
                for (let t = 1; t <= numTiers; t++) {
                    const currentY = topY + t * tierHeight;
                    const currentW = (t / numTiers) * (treeWidth / 2);
                    pathData += ` L ${midX - currentW} ${currentY}`;
                    if (t < numTiers) pathData += ` L ${midX - currentW * 0.6} ${currentY - tierHeight * 0.3}`;
                }

                // Add Trunk and Base
                const trunkWidth = treeWidth / 5;
                const trunkHeight = 30;
                pathData += ` L ${midX - trunkWidth / 2} ${yPos}`; // to left of trunk
                pathData += ` v ${trunkHeight}`; // down
                pathData += ` h ${trunkWidth}`;  // across
                pathData += ` v ${-trunkHeight}`; // up
                pathData += ` L ${xPos + treeWidth} ${yPos}`; // to bottom-right of canopy

                // Right Side (Up from base)
                for (let t = numTiers - 1; t >= 1; t--) {
                    const currentY = topY + t * tierHeight;
                    const currentW = (t / numTiers) * (treeWidth / 2);
                    pathData += ` L ${midX + currentW * 0.6} ${currentY - tierHeight * 0.3}`;
                    pathData += ` L ${midX + currentW} ${currentY}`;
                }
                pathData += ` Z`;

                const path = document.createElementNS(svgNS, 'path');
                path.setAttribute('d', pathData);
                treeGroup.append(path);
            }
        }
    }

    function updateScene(options = {}) {
        const celestial = $('#celestial');
        if (!celestial.length) return;

        const now = new Date();
        const { customHour, customPhase } = options;
        // Use customHour if provided (for animation), otherwise use real time
        const hour = (customHour !== undefined) ? customHour : now.getHours();
        const min = (customHour !== undefined) ? 0 : now.getMinutes();
        const time = hour + min / 60;

        let sky, body, shadowOp, textColor;

        // jQuery Style State Management
        if (time >= 18 && time < 19) { // Sunset
            sky = 'var(--sunset-sky)'; 
            body = 'var(--sunset-sun)'; 
            shadowOp = 0.5; 
            textColor = 'var(--ink-dark)'; 
            nightActive = false;
            celestial.css('clip-path', 'none');
        } else if (time >= 7 && time < 19) { // Day
            sky = 'var(--morning-sky)'; 
            body = 'var(--sun)'; 
            shadowOp = 0.2; 
            textColor = 'var(--ink-dark)'; 
            nightActive = false;
            celestial.css('clip-path', 'none');
        } else { // Night
            sky = 'var(--night-sky)'; 
            body = 'var(--moon)'; 
            shadowOp = 0.7; 
            textColor = 'var(--paper-light)'; 
            nightActive = true;

            const phase = getMoonPhase(customPhase);
            
            // Calculate SVG Path for the Moon Phase (Transparency)
            const size = celestial.width();
            const r = size / 2;
            const cx = r;
            
            const isWaxing = phase <= 0.5;
            // Calculate the semi-minor axis for the terminator ellipse
            const rx = r * Math.abs(Math.cos(phase * 2 * Math.PI));

            let d = '';
            if (isWaxing) {
                // Waxing: light on the right. Terminator moves from R to L.
                const sweep = (phase > 0.25) ? 1 : 0;
                // Start at top, draw right semi-circle down.
                d = `M ${cx} 0 A ${r} ${r} 0 0 1 ${cx} ${size}`;
                // Draw terminator ellipse from bottom back to top.
                d += ` A ${rx} ${r} 0 0 ${sweep} ${cx} 0`;
            } else {
                // Waning: light on the left. Terminator moves from L to R.
                const sweep = (phase > 0.75) ? 1 : 0; // Crescent bulges left (ccw), gibbous bulges right (cw)
                // Start at top, draw left semi-circle down.
                d = `M ${cx} 0 A ${r} ${r} 0 0 0 ${cx} ${size}`;
                // Draw terminator ellipse from bottom back to top.
                d += ` A ${rx} ${r} 0 0 ${sweep} ${cx} 0`;
            }
            
            celestial.css('clip-path', `path('${d}Z')`);
        }

        const suffix = nightActive ? 'night' : 'day';

        // Apply
        $(':root').css({
            '--current-sky': sky,
            '--burner-glow': nightActive ? 1 : 0,
            '--logo-glow': nightActive ? '0 0 5px rgba(255, 255, 255, 0.6)' : '0 0 0 transparent',
            '--hamburger-glow': nightActive ? '0 0 10px rgba(255, 255, 255, 0.8)' : '0 0 0 transparent',
            '--primary-text': textColor,
            '--mountain-1': `var(--mountain-1-${suffix})`,
            '--mountain-2': `var(--mountain-2-${suffix})`,
            '--forest-1': `var(--forest-1-${suffix})`,
            '--forest-2': `var(--forest-2-${suffix})`,
            '--forest-3': `var(--forest-3-${suffix})`
        });

        $('.star').css('display', nightActive ? 'block' : 'none');
        if (nightActive) {
            celestial.css('background', `
                radial-gradient(circle at 20% 25%, var(--moon-spot) 8%, transparent 8.5%),
                radial-gradient(circle at 60% 20%, var(--moon-spot) 12%, transparent 12.5%),
                radial-gradient(circle at 45% 60%, var(--moon-spot) 10%, transparent 10.5%),
                radial-gradient(circle at 80% 70%, var(--moon-spot) 6%, transparent 6.5%),
                var(--moon)
            `);
        } else {
            // For sun, just set the background color and clear any gradients
            celestial.css('background', body);
        }

        // Arc Movement
        const progress = time / 24;
        let xPos = 5 + (progress * 90);
        const yPos = 15 - (Math.sin(progress * Math.PI) * 15);
        celestial.css({ left: xPos + '%', top: yPos + '%' });

        // Shadow Tracking
        const shadowX = (50 - xPos) / 2; // Simple relative offset
        $(':root').css('--shadow-x', shadowX + 'px');
    }

    function updateTimeDisplay(hour) {
        const h = Math.floor(hour);
        const m = Math.round((hour - h) * 60);
        const formattedH = String(h).padStart(2, '0');
        const formattedM = String(m).padStart(2, '0');
        timeDisplay.text(`${formattedH}:${formattedM}`);
    }

    function syncToRealTime() {
        isRealTimePaused = false; // Real-time is active
        updateScene(); // Snap back to real time
        // Also update the slider and display to match
        const now = new Date();
        const currentTime = now.getHours() + now.getMinutes() / 60;
        timeSlider.val(currentTime);
        updateTimeDisplay(currentTime);
        resetTimeBtn.text('⏸').attr('title', 'Pause real-time updates'); // Set icon and tooltip
    }

    function toggleRealTime() {
        if (isRealTimePaused) { // If currently paused/manual, switch to real-time
            syncToRealTime();
        } else { // If currently real-time, switch to paused/manual
            isRealTimePaused = true;
            resetTimeBtn.text('▶').attr('title', 'Resume real-time updates'); // Set icon and tooltip
        }
    }

    timeSlider.on('input change touchstart touchmove', function() {
        isRealTimePaused = true; // Manual control, so pause real-time updates
        resetTimeBtn.text('▶').attr('title', 'Resume real-time updates'); // Set icon and tooltip
        const hour = parseFloat($(this).val());
        updateScene({ customHour: hour });
        updateTimeDisplay(hour);
    });

    resetTimeBtn.on('click', function() {
        toggleRealTime();
    });

    function reinitializeScene() {
        // Clear out old, dynamically generated elements that depend on screen size
        $('.star, .shooting-star').remove();
        $('#back-trees').empty();

        // Re-run the generation functions; they will re-evaluate the window width
        initMilkyWay();
        generateForest();

        // Re-apply the current time styling to the newly generated scene
        if (isRealTimePaused) {
            const hour = parseFloat(timeSlider.val());
            updateScene({ customHour: hour });
        } else {
            updateScene(); // Use current real time
        }
    }

    function driftBalloon() {
        const isMobile = $(window).width() < 768;

        // Define the "Safe Zone" so it doesn't fly off-screen
        const minTop = 10;
        const maxTop = 25;
        const minLeft = isMobile ? 60 : 80; // Bring closer to center on mobile
        const maxLeft = 95;

        // Generate random physics
        const moveY = Math.random() * (maxTop - minTop) + minTop;
        const moveX = Math.random() * (maxLeft - minLeft) + minLeft;
        const rotate = Math.random() * 10 - 5; // Tilt between -5 and 5 degrees

        // Apply to the balloon
        $('.balloon-hero').css({
            'top': moveY + '%',
            'left': moveX + '%',
            'transform': `translate(-50%, 0) rotate(${rotate}deg)`
        });

        // Loop the function at a random interval (3-5 seconds)
        const nextTick = 3000 + (Math.random() * 2000);
        setTimeout(driftBalloon, nextTick);
    }

    initMilkyWay();
    generateForest();
    driftBalloon();
    syncToRealTime(); // Set initial state to real time and button to 'Pause'

    // Smoothly remove loader once scene is ready
    $('#loader').delay(500).fadeOut('slow');

    // Run interval
    setInterval(() => {
        if (!isRealTimePaused) { // Only update if real-time is active
            syncToRealTime();
        }
    }, 60000);
    // Check for shooting stars occasionally if it's naturally night
    setInterval(() => {
        if (!isRealTimePaused && Math.random() > 0.7) triggerShootingStar();
    }, 5000);

    // Add debounced resize listener to regenerate scene for responsiveness
    $(window).on('resize', debounce(reinitializeScene, 250));

    // Scroll Indicator Click Action
    $('#scroll-indicator').on('click', function() {
        const text = $(this).find('.indicator-text').text().trim();
        let target = '';
        if (text.includes('Blogs')) target = '#blogs';
        else if (text.includes('Portfolio')) target = '#portfolio';
        else if (text.includes('Home')) target = '#home';
        else if (text.includes('Featured')) target = '#featured';
        
        if (target) {
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Parallax Scrolling Effect
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const winHeight = $(window).height();
        
        // Hero Section Parallax: Only animate while the hero is relatively near the viewport
        if (scrolled <= winHeight * 1.5) {
            // Celestial body (Sun/Moon) moves slowly (0.5x speed)
            $('#celestial').css('transform', `translateY(${scrolled * 0.5}px)`);

            // Logo moves slightly slower than scroll and fades out
            $('#logo-sign').css({
                'transform': `translate(-50%, ${scrolled * 0.3}px)`,
                'opacity': Math.max(0, 1 - (scrolled / 400))
            });

            // Mountains (Background) move slower to create depth
            $('.mountain').each(function(index) {
                const speed = 0.5 - (index * 0.15); 
                $(this).css('transform', `translateY(${scrolled * speed}px)`);
            });

            // Forest (Foreground) moves faster
        $('.forest:not(.forest-front)').each(function(index) {
                const speed = 0.2 - (index * 0.1);
                $(this).css('transform', `translateY(${scrolled * speed}px)`);
            });
        }

        // Global Section Parallax (Dividers and Scraps)
        $('.section-divider').each(function() {
            const parentTop = $(this).parent().offset().top;
            const relativeScroll = scrolled - (parentTop - winHeight);
            
            if (relativeScroll > 0) {
                // Move dividers slightly slower than the scroll to create overlap depth
                $(this).css('transform', `translateY(${relativeScroll * 0.05}px)`);
            }
        });

        // Update Scroll Indicator
        const $indicator = $('#scroll-indicator');
        const $homeSection = $('section#home'); // Always present
        const $featuredSection = $('section#featured'); // Present on index.html
        const $blogsSection = $('section#blogs'); // Present on blogs.html
        const $portfolioSection = $('section#portfolio'); // Present on portfolio.html

        let firstContentSection = null;

        // Determine the *first* scrollable section after hero on the current page
        if ($featuredSection.length) { // This is for index.html
            firstContentSection = $featuredSection;
        } else if ($blogsSection.length) { // This is for blogs.html
            firstContentSection = $blogsSection;
        } else if ($portfolioSection.length) { // This is for portfolio.html
            firstContentSection = $portfolioSection;
        }

        if (firstContentSection && scrolled < firstContentSection.offset().top - 100) {
            // We are above the first content section, so show indicator to scroll down to it
            $indicator.find('.indicator-text').text(firstContentSection.attr('id').charAt(0).toUpperCase() + firstContentSection.attr('id').slice(1));
            $indicator.find('.indicator-icon').text('↓');
        } else {
            // We are at or past the first content section, so show indicator to scroll up to Home
            $indicator.find('.indicator-text').text('Home');
            $indicator.find('.indicator-icon').text('↑');
        }
    });

    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0 // Trigger as soon as any part of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).find('.section-title').addClass('reveal');
                $(entry.target).find('.blog-card').addClass('reveal');
                $(entry.target).find('.timeline-card').addClass('reveal');
            }
        });
    }, observerOptions);

    // Drawer Interaction Logic
    const drawer = $('#drawer');
    const overlay = $('#drawer-overlay');

    $(document).on('click', '.timeline-card', function() {
        const card = $(this);
        if (!drawer.length) return;
        
        const title = card.find('h3').text();
        const subInfo = card.find('.blog-date, .timeline-date').text() + ' | ' + (card.find('.role').text() || 'Blog Post');
        const content = card.find('.item-detail-content').html();
        
        let imageUrl = card.attr('data-image');

        // Fallback images specifically for "Portfolio" timeline items if data-image is missing
        if (!imageUrl && card.hasClass('timeline-card')) {
            const aboutFallbacks = [
                'images/fallback-edu.jpg',
                'images/fallback-office.jpg',
                'images/fallback-tech.jpg',
                'images/fallback-design.jpg'
            ];
            imageUrl = aboutFallbacks[card.index() % aboutFallbacks.length];
        }

        $('#drawer-title').text(title);
        $('#drawer-subtitle').text(subInfo);
        $('#drawer-body').html(content);
        $('#drawer-image').css('background-image', `url(${imageUrl})`);

        // Show and animate
        drawer.css('display', 'block');
        overlay.css('display', 'block');
        
        // Force reflow for transition
        drawer[0].offsetHeight;
        
        drawer.addClass('active');
        overlay.addClass('active');
        $('body').addClass('no-scroll');
    });

    function closeDrawer() {
        if (!drawer.length) return;
        drawer.removeClass('active');
        overlay.removeClass('active');
        $('body').removeClass('no-scroll');
        
        // Hide after transition
        setTimeout(() => {
            if (!drawer.hasClass('active')) {
                drawer.css('display', 'none');
                overlay.css('display', 'none');
            }
        }, 500);
    }

    $('#close-drawer, #drawer-overlay').on('click', closeDrawer);
    $(document).on('keydown', (e) => { if(e.key === 'Escape') closeDrawer(); });

    // --- Lightbox Logic ---
    $(document).on('click', '.blog-post-content img, .polaroid img', function() {
        const src = $(this).attr('src');
        let $overlay = $('#lightbox-overlay');
        
        if (!$overlay.length) {
            $overlay = $('<div id="lightbox-overlay" class="lightbox-overlay"><button class="lightbox-close">✕</button><img class="lightbox-image" src="" alt="Enlarged view"></div>');
            $('body').append($overlay);
        }
        
        $overlay.find('.lightbox-image').attr('src', src);
        $overlay.addClass('active');
        $('body').addClass('no-scroll');
    });

    $(document).on('click', '#lightbox-overlay', function() {
        $(this).removeClass('active');
        $('body').removeClass('no-scroll');
    });

    // --- Dynamic Reading Time Calculation ---
    function calculateReadingTime() {
        const blogContent = $('.blog-post-content');
        const readingTimeDisplay = $('.reading-time');
        if (blogContent.length && readingTimeDisplay.length) {
            const words = blogContent.text().trim().split(/\s+/).length;
            const visuals = blogContent.find('img, iframe').length;
            // Standard: 200 words per minute + 10 seconds per image/map
            const minutes = Math.ceil((words / 200) + (visuals * 10 / 60));
            const target = readingTimeDisplay.find('.time-text').length ? readingTimeDisplay.find('.time-text') : readingTimeDisplay;
            target.text(`${minutes} min read`);
        }
    }
    calculateReadingTime();

    // --- Passport Stamp Generation ---
    function generateCurvedStamps() {
        $('.stamp-wrapper').each(function() {
            const $w = $(this);
            const topText = $w.data('top');
            const bottomText = $w.data('bottom');
            const centerText = $w.data('center') || "VISITED";
            const dateText = $w.data('date');
            
            const container = $w.find('.curved-text');
            const combinedText = `${topText} ★ ${bottomText} ★`.toUpperCase();
            const chars = combinedText.split('');
            const degreeStep = 360 / chars.length;

            chars.forEach((char, i) => {
                const span = $('<span>').text(char);
                const angle = i * degreeStep;
                span.css('transform', `translate(-50%, -50%) rotate(${angle}deg) translateY(-47px)`);
                container.append(span);
            });

            $w.find('.center-text').text(centerText);
            $w.find('.date-box').text(dateText);
        });
    }
    generateCurvedStamps();

    // --- Dynamic Content Loading (About Me) ---
    function renderBlogs(data, selector) {
        const container = $(selector);
        container.empty();
        
        data.forEach(item => {
            const card = $(`
                <a href="${item.link}" class="blog-card">
                    <div class="card-image" style="background-image: url('${item.image}')"></div>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <span class="item-link">Read More →</span>
                </a>
            `);
            container.append(card);
        });
    }

    function parseDate(dateStr) {
        if (!dateStr || dateStr === 'Present') return new Date();
        const parts = dateStr.split('-');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    function renderUnifiedTimeline(workData, eduData, selector) {
        const container = $(selector);
        container.empty();
        
        const combined = [
            ...workData.map(item => ({ ...item, type: 'work' })),
            ...eduData.map(item => ({ ...item, type: 'education' }))
        ];

        combined.sort((a, b) => {
            return parseDate(b.start_date) - parseDate(a.start_date);
        });

        const startYear = 2007;
        const currentYear = new Date().getFullYear();
        const startDate = new Date(startYear, 0, 1).getTime();
        const endDate = new Date(currentYear, 11, 31).getTime();

        // 1. Boundary Top
        container.append(`<div class="boundary-year top">${currentYear}</div>`);

        // 2. Year Dots (Ticks along the line)
        const dotsContainer = $('<div class="timeline-dots-container"></div>');
        for (let y = currentYear; y >= startYear; y--) {
            dotsContainer.append(`
                <div class="year-dot">
                    <span class="year-tooltip">${y}</span>
                </div>
            `);
        }
        container.append(dotsContainer);

        // 3. Timeline Items
        combined.forEach(item => {
            const sideClass = item.type === 'education' ? 'left-side' : 'right-side';
            const startYearOnly = item.start_date.split('-')[2];
            const endDisplay = item.end_date === 'Present' ? 'Present' : item.end_date.split('-')[2];
            const dateDisplay = `${startYearOnly} - ${endDisplay}`;
            
            // Calculate vertical position based on start_date
            const itemTime = parseDate(item.start_date).getTime();
            const topPercentage = ((endDate - itemTime) / (endDate - startDate)) * 100;

            const card = $(`
                <div class="timeline-item ${sideClass}" style="top: ${topPercentage}%">
                    <div class="timeline-marker"></div>
                    <div class="timeline-card" data-image="${item.image}">
                        <span class="timeline-date">${dateDisplay}</span>
                        <h3>${item.title}</h3>
                        <div class="timeline-card-hover-content">
                            <div class="card-image" style="background-image: url('${item.image}')"></div>
                            <div class="timeline-info">
                                <p class="role">${item.role}</p>
                                <span class="click-hint">Click for details →</span>
                            </div>
                        </div>
                        <div class="item-detail-content">${item.detail}</div>
                    </div>
                </div>
            `);
            container.append(card);
        });

        // 4. Boundary Bottom
        container.append(`<div class="boundary-year bottom">${startYear}</div>`);
    }

    // Load data from data.js
    if (typeof portfolioData !== 'undefined') {
        if (portfolioData.blogs) {
            if ($('#featured-grid').length) renderBlogs(portfolioData.blogs.slice(-4), '#featured-grid');
            if ($('#blog-grid').length) renderBlogs(portfolioData.blogs, '#blog-grid');
        }
        
        if ($('#unified-timeline').length && portfolioData.work_experience && portfolioData.education) {
            renderUnifiedTimeline(portfolioData.work_experience, portfolioData.education, '#unified-timeline');
        }
    }

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Force immediate reveal for sub-page titles to ensure they load on mobile
    if ($('body').hasClass('sub-page')) {
        $('.blog-post-container .section-title').addClass('reveal');
    }

    // Set current year in footer
    $('#current-year').text(new Date().getFullYear());
});