const app = require('../package.json');

// Window Settings
  $('title').html(app.name)

//Components
$('.menu').hide();
$('.navbar-toggler').click(function() {
  var target = $(this).data('target');
  $(target).toggle('slide', {
            direction: 'left'
        }, 400);
});
