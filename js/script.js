$(document).ready(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const themeLocalStorage = localStorage.themeMode;
  if (!themeLocalStorage) {
    localStorage.themeMode = prefersDark ? "dark" : "light";
  }
  const darkMode = themeLocalStorage ? themeLocalStorage === "dark" : prefersDark;
  if (darkMode) {
    $('html').css('color-scheme', 'dark');
    $('.toggle-button a.toggle-mode i.fa-solid').removeClass('fa-sun').addClass('fa-moon');
  } else {
    $('html').css('color-scheme', 'light');
    $('.toggle-button a.toggle-mode i.fa-solid').removeClass('fa-moon').addClass('fa-sun');
  }

  $('.toggle-mode').click((e) => {
    e.preventDefault();
    const currentColorScheme = $('html').css('color-scheme');
    if (currentColorScheme === 'dark') {
      $('html').css('color-scheme', 'light');
      $('.toggle-button a.toggle-mode i.fa-solid').removeClass('fa-moon').addClass('fa-sun');
      localStorage.themeMode = "light";
    } else {
      $('html').css('color-scheme', 'dark');
      $('.toggle-button a.toggle-mode i.fa-solid').removeClass('fa-sun').addClass('fa-moon');
      localStorage.themeMode = "dark";
    }
  });
  $('.feature.feature-portfolio').click(() => {
    window.location = "/";
  });
});