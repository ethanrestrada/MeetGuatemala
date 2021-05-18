window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		rewind: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
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
			breakpoint: 800,
			settings: {
				rewind: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
});