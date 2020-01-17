(() => {

console.log('hello from js!')

//find elements in doc

let toggleButton = document.querySelector(".switch-text"),
	myHeading = document.querySelector('h1'),

	
	//svgImg = document.querySelector("#badge");
	//svgImg2 = document.querySelector("#badge2");
	

	allSVGs = document.querySelectorAll(".svg");

	function changeText() {
		myHeading.textContent = "I am a script";
	}

	function logSVG() {
		console.log(this.id);
	}

	toggleButton.addEventListener("click", changeText);

	//svgImg.addEventListener("mouseover", logSVG);
	//svgImg2.addEventListener("mouseover", logSVG);
	
	allSVGs.forEach(item => item.addEventListener("click", logSVG));

})();