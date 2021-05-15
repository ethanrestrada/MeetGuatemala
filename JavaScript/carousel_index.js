window.addEventListener('load', function(){
	new Glider(document.querySelectorAll('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		rewind: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
        }
	});	
});