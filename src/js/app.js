import "flowbite";

window.addEventListener("DOMContentLoaded", () => {
	let myButton = document.querySelector(".btnScrollToTop");
	//Onclick function
	myButton.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});
});
