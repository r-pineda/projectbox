/* ScrollReveal (js-extension) */
window.sr = ScrollReveal({
	reset: true,
	distance: '200px',
	origin: 'bottom',
	scale: 0.1,
	easing: 'cubic-bezier(0, 0.2, 0, 1)'
});

sr.reveal('#fix');
sr.reveal('#project-fade');
sr.reveal('#team-fade');
sr.reveal('#functions-fade');


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 700, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});