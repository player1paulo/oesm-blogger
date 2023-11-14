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
/* Função Dropdown arquivo mensal */
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
/* Função mostrar mais mostrar menos texto */
function myFunctionMostrarMais() {
	var dots = document.getElementById("pontos");
	var moreText = document.getElementById("mais");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "mostrar";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "esconder";
	  moreText.style.display = "inline";
	}
  }