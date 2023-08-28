function sendEmail() {
	Email.send({
	  /* Host: "smtp.gmail.com",
	  Username: "palquilarstartup@gmail.com",
	  Password: "yihbunnotfaqreyc",
	  To: 'felcmna.23@gmail.com',
	  From: "palquilarstartup@gmail.com",
	  Subject: "Sending Email using javascript",
	  Body: "Well that was easy!!",
      EMAIL_PORT:587 */
	})
	  .then(function (message) {
		alert("Se envio correctamente el mensaje")
	  });
  };
  
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);