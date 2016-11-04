const pkg = require('../package.json');
const app = require('electron')

// Window Settings
  $('title').html(pkg.name)

//Components
$('.menu').hide();
$('.navbar-toggler').click(function() {
  var target = $(this).data('target');
  $(target).toggle('slide', {
            direction: 'left'
        }, 400);
});


$(".frame-maximize").click(function() {
  var window = app.remote.getCurrentWindow();
      if(!window.isFullScreen()) {
        window.setFullScreen(true);
      }else {
        window.setFullScreen(false);
      }

})


$(".frame-minimize").click(function() {
  var window = app.remote.getCurrentWindow();
  window.minimize();
})


$(".frame-close").click(function() {
  var window = app.remote.getCurrentWindow();
  window.close();
})
