(()=>{
	
const openNavMenu=document.querySelector(".open-nav-menu"),
 closeNavMenu=document.querySelector(".close-nav-menu"),
 navMenu=document.querySelector(".nav-menu"),
 menuOverlay=document.querySelector(".menu-overly"),
 mediaSize=991;
	
	openNavMenu.addEventListener("click", toggleNav);
	closeNavMenu.addEventListener("click", toggleNav);

	menuOverlay.addEventListener("click", toggleNav);

	function toggleNav(){
		navMenu.classList.toggle("open");
		menuOverlay.classList.toggle("active");
		document.body.classList.toggle("hidden-scrolling");
	}
	navMenu.addEventListener("click",(event)=>{
		if (event.target.hasAttribute("data-toggle") && window.innerWidth<=mediaSize) {
			//prevent default ancor click behavior
			event.preventDefault();
			const menuIteamHasChildren=event.target.parentElement;
			//if menuIteamHasChildren is already ecpanded collapse it
			if (menuIteamHasChildren.classList.contains("active")){
				collapseSubMenu();
			}
			else{
				//collapse exting expanded menuIteamHasChildren
			if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
			}
			//expand new menuIteamHasChildren
			menuIteamHasChildren.classList.add("active");
			const subMenu=menuIteamHasChildren.querySelector(".submenu");
			subMenu.style.maxHeight=subMenu.scrollHeight + "px";
		}
		}
	});
	function collapseSubMenu(){
		navMenu.querySelector(".menu-iteam-has-childrean.active .submenu")
		.removeAttribute("style");
		navMenu.querySelector(".menu-iteam-has-childrean.active")
		.classList.remove("active");
	}

	function resizeFix(){
		if (navMenu.classList.contains("open")) {
			toggleNav();
		}	
		if(navMenu.querySelector(".menu-iteam-has-childrean.active")){
				collapseSubMenu();
		}
	}
	window.addEventListener("resize",function(){
		if (this.innerWidth > mediaSize) {
			resizeFix();
		}

	});
})();




(function($){
	'use script';

	// WOW JS
	new WOW().init();

	
	$(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
	});
	//counter
	var $count = $('.coder');
    if($count.length > 0){
		$(document).ready(function(){
			$('.coder').counterUp({
			delay: 10,
			time: 1000
		});
		});
	}

	// Scroll Area
	var $scroll = $('.scroll-area');
    if($scroll.length > 0){
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});

}
	


	$('.technology-video a').magnificPopup({
	  	type: 'iframe',
	});

	var $team = $('.team-slider');
    if($team.length > 0){
	$(document).ready(function(){
	  	$(".team-slider").owlCarousel({
	  		loop:true,
	  		center:false,
	  		items:4,
	  		autoplay: false,
		  	 responsive:{
	        0:{
	            items:1,
	        },
	        570:{
	            items:2,
	        },
	        767:{
	            items:3,
	        },
	        1000:{
	            items:4,
	        }
	    }
	  	});
	});
}
	var $client_slider = $('.client-slider');
    if($client_slider.length > 0){
	$(document).ready(function(){
	  	$(".client-slider").owlCarousel({
	  		loop:true,
	  		center:false,
	  		items:2,
	  		autoplay: true,
	  		margin:14,
	  		nav:true,
	  		navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
	  		 responsive:{
	        0:{
	            items:1,
	        },
	        
	        767:{
	            items:2,
	        },
	        1000:{
	            items:2,
	        }
	    }
	  	});
	});
}

	/*---slider activation---*/
    var $slider = $('.banner-slider');
    if($slider.length > 0){
        $slider.owlCarousel({
            animateOut: 'fadeOut',
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 8000,
            items: 1,
            dots:true,
            navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
            nav:true,
        });
    }

	
	
	
	var $tab = $('#tabs');
    if($tab.length > 0){
	$( function() {
	    $( "#tabs" ).tabs();
	  });
	}

}(jQuery));

