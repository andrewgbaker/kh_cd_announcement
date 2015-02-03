// LOAD BACKGROUND AND COREY IMAGE BEFORE SHOWING SITE
function imgLoaded() {
	var bgImages = document.querySelectorAll('.bg_image');
	imagesLoaded( bgImages, function() {
		setTimeout(function() {
			$('.loading').addClass('hide_load');
			$('#section0 article').addClass('show');
		}, 800);
	});
}
imgLoaded();


// WRAP CHARACTERS FR HOVER EFFECT
function wrapCharacters(element) {
    $(element).contents().each(function() {
        if(this.nodeType === 1) {
            wrapCharacters(this);
        }
        else if(this.nodeType === 3) {
            $(this).replaceWith($.map(this.nodeValue.split(''), function(c) {
               return '<span>' + c + '</span>';
            }).join(''));
        }
    });
} 

$(document).ready(function() {

	// SEPERATE LETTERS INTO SPANS
	wrapCharacters($('h2'));


	// START FULLPAGE PLUGIN
	$('#fullpage').fullpage({
		// css3: false,
		anchors: ['landing', 'intro', 'quote1', 'quote2', 'quote3', 'closing'],
		verticalCentered: true,
		scrollingSpeed: 800,
		recordHistory: false,
		easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)'
		// afterLoad: function(anchorLink, index){
  //           var lastArrow = $('.arrow');

  //           //using index
  //           if(index == 6){
  //               lastArrow.on('click', function(){
		// 			console.log('testclick');
		// 			$.fn.fullpage.moveSectionUp();
		// 		});
  //           }
  //           //using index
  //           if(index != 6){
  //               lastArrow.on('click', function(){
		// 			console.log('testclick');
		// 			$.fn.fullpage.moveSectionDown();
		// 		});
  //           }

  //       }
	});   

	// OPEN INFO PANEL

	function openPanel() {
		$('.info').on('click', function(){

			if ($('body').hasClass('info_open')) {
				$('aside').toggleClass('slide_down');
		    	setTimeout(function() {
		    		$('.line').toggleClass('strike_through');
					setTimeout(function() {
						$('body').toggleClass('info_open');
					}, 400);
				}, 100);
				$.fn.fullpage.setAllowScrolling(true);
		   	}
			else {
			    $('body').toggleClass('info_open');
			    setTimeout(function() {
					$('.line').toggleClass('strike_through');
					setTimeout(function() {
						$('aside').toggleClass('slide_down');
					}, 800);
				}, 100);
				$.fn.fullpage.setAllowScrolling(false);
			}
		});
	}
	openPanel();

	// BACKGROUND-CLIP SUPPORT DETECTION
	Modernizr.addTest('backgroundclip',function() {

	    var div = document.createElement('div');

	    if ('backgroundClip' in div.style)
	      return true;

	    'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g,function(val) { 
	      if (val+'BackgroundClip' in div.style) return true;
	    });

	});

	// function arrowClickLast() {
	// 	var arrowLast = $('.fp-viewing-closing > .arrow');


	// 	arrowLast.on('click', function(){
	// 		console.log('testclick');
	// 		$.fn.fullpage.moveSectionUp();
	// 	});
	// }
	// setTimeout(function() {
	// 	arrowClickLast();
	// }, 200);

	
	// MOVE DOWN ON ARROW CLICK
	function arrowClick() {
		var arrow = $('.arrow');

	    arrow.on('click', function(){
			$.fn.fullpage.moveSectionDown();
		});

	}
	arrowClick();

	function lastArrow() {
		var arrow = $('.arrow_up');

	    arrow.on('click', function(){
			$.fn.fullpage.moveSectionUp();
		});

	}
	lastArrow();

});