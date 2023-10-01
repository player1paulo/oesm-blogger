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

function copylinktoclipboard() {
	// Get the text field
	var copyText = document.getElementById("myInput");
  
	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices
  
	 // Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
  
	// Alert the copied text
	alert("Copied the text: " + copyText.value);
  }