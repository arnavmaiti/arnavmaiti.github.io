$(document).ready(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDark) {
    $('html').css('color-scheme', 'dark');
    $('.toggle-button button.toggle-mode i.fa-solid').removeClass('fa-sun').addClass('fa-moon');
  } else {
    $('html').css('color-scheme', 'light');
    $('.toggle-button button.toggle-mode i.fa-solid').removeClass('fa-moon').addClass('fa-sun');
  }

  $('.toggle-mode').click(() => {
    const currentColorScheme = $('html').css('color-scheme');
    if (currentColorScheme === 'dark') {
      $('html').css('color-scheme', 'light');
      $('.toggle-button button.toggle-mode i.fa-solid').removeClass('fa-moon').addClass('fa-sun');
    } else {
      $('html').css('color-scheme', 'dark');
      $('.toggle-button button.toggle-mode i.fa-solid').removeClass('fa-sun').addClass('fa-moon');
    }
  });
});