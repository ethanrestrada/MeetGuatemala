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
		}
	});
	
});
});

