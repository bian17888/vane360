$(function(){
	
	/*  ===== 轮转模块 ====== */
	$.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) { 
		$(pager).find('a').removeClass('active').filter('a:eq('+currSlideIndex+')').addClass('active'); 
	}; 
	//首页大轮转
	$('.m-slide .m-slide-cont ul').cycle({
		fx: 'scrollHorz',
		easeIn:'easeOutCirc',
		timeout:5000,
		speed:600,
		prev:'.m-slide-btns .m-sbtn-prev',
		next:'.m-slide-btns .m-sbtn-next',
		pagerEvent: 'mouseover',
		pager:  '.m-slide .m-slide-pages p'
	});
	
	/*  ===== footer 居页面底部 ====== */
	var pageHeight = $(window).height();
	var minHeight = pageHeight - 318;
	$('.vane360-wrap').css({'min-height':minHeight});
	$(window).resize(function() {
    	$('.vane360-wrap').css({'min-height':minHeight});
	});
	
	
	var myScroll;
	function loaded () {
		myScroll = new IScroll('#scroll-wrap', { 
			scrollbars: true,
			scrollX: false, 
			freeScroll: true, 
			fadeScrollbars:false 
		});
	}
	loaded();
});


	