/* ScrollReveal (js-extension) */
window.sr = ScrollReveal({
	reset: true,
	distance: '200px',
	origin: 'bottom',
	scale: 0.1,
	easing: 'cubic-bezier(0, 0.2, 0, 1)'
});


/* Anchor (Scroll to) 
$("#down").click(
	function() {
		scroll("#project");
	});

$("#linktodown").click(
	function() {
		scroll("#project");
	});

*/
	
/*
$("#linktodoc").click(
	function() {
		scroll("#documents");
	});

$("#linktofunc").click(
	function() {
		scroll("#functions");
	});

$("#linktotop").click(
	function() {
		scroll("#top");
	});
*/

sr.reveal('#fix');
sr.reveal('#project-fade');
sr.reveal('#team-fade');
sr.reveal('#functions-fade');
