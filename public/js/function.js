const main = () => {
	const handleHeroHoverShine = () => {
		const left = document.getElementById("hero-left");
		const right = document.getElementById("hero-right");

		const handleft = (e) => {
			console.log("yeah!!!")
			left.classList.add("shine");
			left.removeEventListener("mouseover", handleft);
		};
		const handleright = (e) => {
			right.classList.add("shine");
			right.removeEventListener("mouseover", handleright);
		};
		if (left) left.addEventListener("mouseover", handleft);
		if (right) right.addEventListener("mouseover", handleright);
	};

	handleHeroHoverShine();
};

window.onload = main;
