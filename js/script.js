(function($) {
	
    //"use strict";	 	
	
	var mainwindow = $(window);
	
    // rev-slider
    if (jQuery("#slider1").length) {
        jQuery("#slider1").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"on",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999,
                     tmp: ''
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
						type: "scroll",
					},
            gridwidth:1170,
            gridheight:620
        });
    };


	
    // rev-slider
    if (jQuery("#slider2").length) {
        jQuery("#slider2").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"on",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999,
                     tmp: ''
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
						type: "scroll",
					},
            gridwidth:1170,
            gridheight:800
        });
    };	
	
	
	
	//Hide Loading Box (Preloader)
	function stylePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}		
    }	
			
		//Request A Call Back Services Popup Form After 5 Second
	$(document).ready(function(){
   setTimeout(function(){
       $('#exampleModal').modal('show');
   }, 10000);
	});
	

	//Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 250) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}



	//show hide search box

		$('.bz_search_bar').on("click", function(e) {
			$('.bz_search_box').slideToggle();
			e.stopPropagation(); 
		});

		$(document).on("click", function(e) {	
			if(!(e.target.closest('.bz_search_box'))){	
				$(".bz_search_box").slideUp();   		
			}
	   });


	
	
	 function galleryMasonaryLayout() {
		if ($('.filter-list').length) {
			$(".filter-list").imagesLoaded( function() {
			$('.filter-list').isotope({
				itemSelector: '.gallery-item',
				layoutMode: 'masonry'
			});
			}); 
			
			$('.post-filter').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $('.filter-list').isotope({ filter: filterValue });
			   $(this).addClass("active");
				$(this).siblings().removeClass("active");
			});		
		}

	 }
	
	
	
	//Accordion Box

    var faqAccordion = $('#faq-accordion');
    faqAccordion
        .on('show.bs.collapse', function(e) {
            faqAccordion.find('.panel-heading').removeClass('active');
            $(e.target).parents('.panel').find('.panel-heading').addClass('active');
            faqAccordion.find('.panel-collapse.collapse').slideUp('slow', function() {
                $(this).removeClass('in').css('display', '');
            });
        });



	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

		
	
 //Testimonial Slider
	if ($('.testm-section .testcarousel, .testm-section-2 .testcarousel').length) {
		$('.testm-section .testcarousel, .testm-section-2 .testcarousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:2	
				}
			}
		});    		
	} 
	
	
	
	
	
	
 //sidebar Testimonial Slider
	if ($('.sidebar-testimonial-widge').length) {
		$('.sidebar-testimonial-widge').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	//gallery Slider
	if ($('.galary-slider').length) {
		$('.galary-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}


	//Partener Slider
	if ($('.partener-slider').length) {
		$('.partener-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}


	//related product Slider
	if ($('.related-products-carousel2 ').length) {
		$('.related-products-carousel2 ').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	

	
	//single Project Slider
	if ($('.project-slider').length) {
		$('.project-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}		
	
	
	
   


	
	

	


	
	

			
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	



	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	
   
    //Input Quantity Up & Down
    function quantity_changer() {
		$('#quantity-holder').on('click', '.quantity-plus', function () {
			var $holder = $(this).parents('.quantity-holder');
			var $target = $holder.find('input.quantity-input');
			var $quantity = parseInt($target.val(),10);
			if ($.isNumeric($quantity) && $quantity > 0) {
				$quantity = $quantity + 1;
				$target.val($quantity);
			} else {
				$target.val($quantity);
			}
		}).on('click', '.quantity-minus', function () {
			var $holder = $(this).parents('.quantity-holder');
			var $target = $holder.find('input.quantity-input');
			var $quantity = parseInt($target.val(),10);
			if ($.isNumeric($quantity) && $quantity >= 2) {
				$quantity = $quantity - 1;
				$target.val($quantity);
			} else {
				$target.val(1);
			}
		});

	}


	
	//counter number changer
	function counter_number() {
		var timer = $('.timer');
		if(timer.length) {
			timer.appear(function () {
				timer.countTo();
			})
		}
	}
	
	
	
	
	
	
	
	
	
	
// google map
    if ($('#contact-google-map').length) {
		var settingsItemsMap = {
			  zoom: 12,
			  center: new google.maps.LatLng(30.521338, -94.976751),
			  zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			  },
			  scrollwheel: false,
			   styles: [{"featureType":"all","stylers":[{"saturation":0},{"hue":"#e7ecf0"}]},{"featureType":"road","stylers":[{"saturation":-70}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"simplified"},{"saturation":-60}]}],
       
			  mapTypeId:  google.maps.MapTypeId.ROADMAP
		  };
		  var map = new google.maps.Map(document.getElementById('contact-google-map'), settingsItemsMap );
		  var image = 'images/icons/map-icon.png';
		  var myMarker = new google.maps.Marker({
			  position: new google.maps.LatLng(40.741895, -73.989308),
			  draggable: true,
			  icon: image
		  });

		  map.setCenter(myMarker.position);
		  myMarker.setMap(map);
		  // Google map   

    }
			


			
	/* ==========================================================================
	   Contact Form Validation and Ajax
	   ========================================================================== */

	$('#contact-form').validate({
		rules: {
			username: {
				required: true
			},
			email: {
				required: true,
				minlength: 5,
				email: true
			},
			phone: {
				required: true
			},
			message: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			username: "Please specify your name",
			email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
			},
			phone: "Please specify your phone number",
			message: {
				required: "Please specify your message",
				minlength: jQuery.validator.format("At least {0} characters required!")
			}
		},
		submitHandler: function(e) {
			var $t = $(e);
			$.ajax({
				type: 'POST',
				url: $t.attr('action'),
				data: $t.serialize(),
				beforeSend: function() {
					$("#loading").show();
				},
				complete: function() {
					$("#loading").hide();
				},
				success: function(res) {
					$('.contact-form-message').show().html(res).delay(10000).fadeOut("slow");
					$('input[name=\'name\']').val('');
					$('input[name=\'email\']').val('');
					$('input[name=\'phone\']').val('');
					$('textarea[name=\'message\']').val('');
				}
			});
		}
	});			
			
			
			
						


	  
/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
  $(document).on('ready', function() {
    counter_number();
	  galleryMasonaryLayout();
    quantity_changer();
  });

  
  
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
  
  mainwindow.on('scroll', function() {
	  headerStyle();
	
    
  });
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  mainwindow.on('load', function() {
    stylePreloader();
  });
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  mainwindow.on('resize', function() {
  });	  
	  
	  
	  	

})(window.jQuery);