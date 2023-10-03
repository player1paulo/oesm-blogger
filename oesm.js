document.addEventListener("DOMContentLoaded", function() {
	document.addEventListener("scroll", function() {
		getProgress();
	});

	function getProgress() {					
		var topPos = document.documentElement.scrollTop;
		// Alternatively, you can use document.body.scrollTop || document.documentElement.scrollTop;
		
		// Remaining left to scroll
		var remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
		// clientHeight is the inner height of the element, including padding
		
		var percentage = (topPos / remaining) * 100;

		document.querySelector(".progress--bar").style.width = percentage + "%";
	}
});