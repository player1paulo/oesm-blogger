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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdownArquivo() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }