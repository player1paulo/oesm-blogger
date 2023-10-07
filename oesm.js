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

// Calcula o tempo estimado de leitura
function calculateReadingTime() {
	var words = document.querySelector(".postreadingtime .content").textContent.split(" ");
	var readingTime = Math.ceil(words.length / 238);
	return readingTime;
  }
  
  // Exibe o tempo estimado de leitura
  function showReadingTime() {
	var readingTime = calculateReadingTime();
	document.querySelector("#reading-time").textContent = readingTime + " minutos";
  }
  
  // Chama a função de cálculo do tempo estimado de leitura
  window.onload = showReadingTime;