const main = () => {
	const handleHeroHoverShine = () => {
		const left = document.getElementById("hero-left");
		const right = document.getElementById("hero-right");
		const leftCta = document.getElementById("leftCta");
		const rightCta = document.getElementById("rightCta");

		const handleft = (e) => {
			left.classList.add("shine");
			setTimeout(() => {
				leftCta.classList.add("inView");
			}, 1000);
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
