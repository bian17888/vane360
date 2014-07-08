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
	
	//其他页轮转
	$('#slide-cont').cycle({
		fx: 'scrollHorz',
		easeIn:'easeOutCirc',
		timeout:0,
		speed:600,
		pagerEvent: 'mouseover',
		pager:  '#slide-pages p'
	});
	$('#slide-cont li:odd').css({'border-right':'0'});
	
	/*  ===== footer 居页面底部 ====== */
	var pageHeight = $(window).height();
	var minHeight = pageHeight - 318;
	$('.vane360-wrap').css({'min-height':minHeight});
	$(window).resize(function() {
    	$('.vane360-wrap').css({'min-height':minHeight});
	});
	
	/*  ===== iscroll 滚动模块 ====== */
	/*
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
	*/
	
	/* ===== fancybox ====== */
	$('.zpzs-wrap .p-pic a').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'overlayShow':true
	});
	
});


	