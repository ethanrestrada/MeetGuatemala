window.addEventListener('load', function(){
	const gliders = document.querySelectorAll("[id^=glider]");

gliders.forEach((glide) => {
	const glider = document.querySelector(`#${glide.id} .carousel__lista`);
	const gliderPrev = document.querySelector(`#${glide.id} .carousel__anterior`);
	const gliderNext = document.querySelector(`#${glide.id} .carousel__siguiente`);
	const gliderDots = document.querySelector(`#${glide.id} .carousel__indicadores`);

	new Glider(glider, {
		slidesToShow: 1,
		rewind: true,
		dots: gliderDots,
		arrows: {
		prev: gliderPrev,
		next: gliderNext
		},
		responsive: [
			{
			  // screens greater than >= 445px
			breakpoint: 450,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				rewind: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},{
			  // screens greater than >= 800px
			breakpoint: 768,
			settings: {
				rewind: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
	
});
});

