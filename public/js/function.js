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
	// home
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
	// pellicules solaires
	const subnav = $("main[data-content='pellicules-solaires'] .sub-nav li");
	$.each(subnav, (i, el) => {
		$(el).click((e) => {
			e.preventDefault();
			if (!$(el).hasClass("active")) {
				$("main[data-content='pellicules-solaires']")
					.find("li.active")
					.removeClass("active");
				$("main[data-content='pellicules-solaires'] .right-body")
					.find(".active")
					.removeClass("active");
				$(
					`.right-body > div[data-trigger="${$(el).attr(
						"data-trigger"
					)}"]`
				).addClass("active");
				$(el).toggleClass("active");
			}
		});
	});

	const carouselBox = $(
		'main[data-content="pellicules-solaires"] .images-carousel-box'
	);
	const slides = $(carouselBox).find(".item:not(.hide)");
	const slidesIndexes = $(slides)
		.toArray()
		.map((x, i) => i);
	$(slides).each((i, s) => $(s).attr("data-slide", slidesIndexes[i]));
	$('span[data-role="handle-carousel"]').click((e) => {
		e.preventDefault();
		slidesIndexes.unshift(slidesIndexes.pop());
		$(slides).each((i, s) => $(s).attr("data-slide", slidesIndexes[i]));
	});
});
