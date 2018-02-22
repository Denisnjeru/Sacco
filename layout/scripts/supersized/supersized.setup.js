jQuery(function ($) {
    $.supersized({
        // Functionality
        slide_interval: 3000, // Length between transitions
        transition: 3, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 700, // Speed of transition
		fit_always: 0,
        // Components							

        slides: [ // Slideshow Images
        {image: 'images/slider/1.gif'}, 
		{image: 'images/slider/2.gif'}, 
		{image: 'images/slider/3.gif'}
		]
    });
});