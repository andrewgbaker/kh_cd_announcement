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

	// OPEN INFO PANEL

	$('.info').on('click', function(){

		if ($('body').hasClass('info_open')) {
			$('aside').toggleClass('slide_down');
	    	setTimeout(function() {
	    		$('.line').toggleClass('strike_through');
				setTimeout(function() {
					$('body').toggleClass('info_open');
				}, 800);
			}, 100);
	   	}
		else {
		    $('body').toggleClass('info_open');
		    setTimeout(function() {
				$('.line').toggleClass('strike_through');
				setTimeout(function() {
					$('aside').toggleClass('slide_down');
				}, 800);
			}, 100);
		}
	});

	// SEPERATE LETTERS INTO SPANS
	wrapCharacters($('h2'));

	// START FULLPAGE PLUGIN
	$('#fullpage').fullpage({
		// css3: false,
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		verticalCentered: true,
		scrollingSpeed: 800,
		recordHistory: false,
		easingcss3: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)'
		// onLeave: function(index, nextIndex, direction){

		// 	var bodyColor = $('body')
		// 		upQuote = $('.active h2');
  //           //after leaving section 2
  //           if(index == 1 && direction =='down'){
  //               bodyColor.toggleClass('go_black');
  //           }

  //           else if(index == 2 && direction == 'up'){
  //               bodyColor.toggleClass('go_black');
  //               upQuote.toggleClass('quote_up');
  //           }
  //           else if(index == 2 && direction == 'down'){
  //               bodyColor.toggleClass('go_black');
  //           }
  //           else if(index == 3 && direction == 'up'){
  //               bodyColor.toggleClass('go_black');
  //               upQuote.toggleClass('quote_up');
  //           }
  //           else if(index == 3 && direction == 'down'){
  //               bodyColor.toggleClass('go_black');
  //           }
  //           else if(index == 4 && direction == 'up'){
  //               bodyColor.toggleClass('go_black');
  //               upQuote.toggleClass('quote_up');
  //           }
  //       }
	});   

	// BACKGROUND-CLIP SUPPORT DETECTION

	Modernizr.addTest('backgroundclip',function() {

	    var div = document.createElement('div');

	    if ('backgroundClip' in div.style)
	      return true;

	    'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g,function(val) { 
	      if (val+'BackgroundClip' in div.style) return true;
	    });

	  });

	
	// MOVE DOWN ON ARROW CLICK
    $('.arrow').on('click', function(){
		$.fn.fullpage.moveSectionDown();
	});
});