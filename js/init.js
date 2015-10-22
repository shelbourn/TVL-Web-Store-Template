var JQZOOM_OPTIONS = {
	zoomType: 'innerzoom',
	preloadImages: false,
	title: false
};

$(document).ready(function() {

	// Clear Search Field
	$('.autobox').autobox();

    // open the accordion for the Product Review section if the hash exists in the url
    var locationHash = window.location.hash;
    if (locationHash == '#reviews' || locationHash == '#write_review') {
        var $prodAccordianSection = $('#prodAccordion #ProductReviews');
        $('#prodAccordion .prodAccordionContent').hide();
        $prodAccordianSection.siblings().removeClass('current');
        $prodAccordianSection.addClass('current');
        $prodAccordianSection.find('.prodAccordionContent').show();
        document.location.href = '#ProductReviews'
    }

    $('#prodAccordion .Block h2').click(function() {
		$(this).css('outline','none');
		
		if($(this).parent().hasClass('current')) {
			$(this).siblings('div').slideUp('slow',function() {
				$(this).parent().removeClass('current');
			});
		} else {
			$('#prodAccordion .Block .prodAccordionContent').slideUp('slow',function() {
				$(this).parent().removeClass('current');
			});
			$(this).siblings('div').slideToggle('slow',function() {
				$(this).parent().toggleClass('current');
			});
		}

		return false;
	});
	
	
	// Horizontal Category List Dropdowns (non-flyout only)
	if(document.all) {
		$('#SideCategoryList li').hover(function() {
			$(this).addClass('over');
			return false;
		},
		function() {
			$(this).removeClass('over');
		});
	}
	
	//Fix IE7 z-index issues
	if ($.browser.msie && parseInt($.browser.version) == 7) {
		var zIndexNumber = 1000;
		$('#Menu ul li').each(function() { /* Pages menu */
			$(this).css('z-index', zIndexNumber);
			zIndexNumber -= 10;
		});
		$('#HeaderLower ul li').each(function() { /* Horizontal category menu */
			$(this).css('z-index', zIndexNumber);
			zIndexNumber -= 10;
		});
	}
	//
	//Fix IE6 z-index issues
	if ($.browser.msie && parseInt($.browser.version) == 6) {
		var zIndexNumber = 1000;
		$('#Menu ul li').each(function() { /* Pages menu */
			$(this).css('z-index', zIndexNumber);
			zIndexNumber -= 10;
		});
		$('#HeaderLower ul li').each(function() { /* Horizontal category menu */
			$(this).css('z-index', zIndexNumber);
			zIndexNumber -= 10;
		});
	}

	$('#change-currency').click(function(e) {
		e.stopPropagation();
		$('#currency-chooser .currencies').toggle();
		$(window).one('click', function() { $('#currency-chooser .currencies').hide(); });
	});
});

