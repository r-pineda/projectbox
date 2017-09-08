/* ScrollReveal (js-extension) */
window.sr = ScrollReveal({
	reset: true,
	distance: '1000px',
	origin: 'left',
	scale: 0.1,
	easing: 'cubic-bezier(0, 0.2, 0, 1)'
});


/* Anchor (Scroll to) */
$("#down").click(
	function() {
		scroll("#project");
	});

$("#linktodown").click(
	function() {
		scroll("#project");
	});

$("#linktoteam").click(
	function() {
		scroll("#team");
	});

$("#linktodoc").click(
	function() {
		scroll("#documents");
	});
	
	$("#linktotop").click(
	function() {
		scroll("#top");
	});
	
function scroll($target) {
	$('html, body').animate({
		scrollTop: $($target).offset().top
	}, 1000, "swing");
}


sr.reveal('#fix');

/* carousel */
$(document).ready(function () {
  //rotation speed and timer
  var speed = 2000;
  
  var run = setInterval(rotate, speed);
  var slides = $('.slide');
  var container = $('#slides ul');
  var elm = container.find(':first-child').prop("tagName");
  var item_width = container.width();
  var previous = 'prev'; //id of previous button
  var next = 'next'; //id of next button
  slides.width(item_width); //set the slides to the correct pixel width
  container.parent().width(item_width);
  container.width(slides.length * item_width); //set the slides container to the correct total width
  container.find(elm + ':first').before(container.find(elm + ':last'));
  resetSlides();
  
  
  
  
  function resetSlides() {
    //and adjust the container so current is in the frame
    container.css({
      'left': -1 * item_width
    });
  }
  
});

sr.reveal('.column');
sr.reveal('.card');

/* navigation toggle */
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});