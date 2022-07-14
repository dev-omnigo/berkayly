"use strict";

function trbl(e, relative) {
	var r = $(e).get(0).getBoundingClientRect();
	relative = $(relative);

	return {
		t: r.top + relative["scrollTop"](),
		r: r.right + relative["scrollLeft"](),
		b: r.bottom + relative["scrollTop"](),
		l: r.left + relative["scrollLeft"](),
	};
}

$(document).ready(function () {
	// navbar section
	const refToTop = $("#ref");
	$(window).scroll((e) => {
		if ($(window).scrollTop() >= 82 && !$("#header").hasClass("fixed"))
			$("#header").addClass("fixed");
		if ($(window).scrollTop() < 82 && $("#header").hasClass("fixed"))
			$("#header").removeClass("fixed");
	});

	// main
	const sideHeroes = $(".side-hero");
	$.each(sideHeroes, (i, el) => {
		$(el).mouseenter((e) => {
			if (!$(el).find(".bg").hasClass("removeGrayScale")) {
				$(el).find(".bg").addClass("removeGrayScale");
				if (!$(el).find(".side-hero-cta").hasClass("show"))
					$(el).find(".side-hero-cta").addClass("show");
			}
		});
	});
	$.each(sideHeroes, (i, el) => {
		$(el).mouseout((e) => {
			if ($(el).find(".bg").hasClass("removeGrayScale"))
				$(el).find(".bg").removeClass("removeGrayScale");
		});
	});
});
