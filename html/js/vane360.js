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

	/*  ===== 页头模块 ====== */
	//个人登录中心 login-bar
	$('.login-info-operate').hover(
		function(){
			$(this).find('.login-info-btns').addClass('login-info-btns-active');
			$(this).find('.popup').stop(true,true).slideDown('fast');
		},
		function(){
			$(this).find('.popup').stop(true,true).slideUp('fast');
			$(this).find('.login-info-btns').removeClass('login-info-btns-active');
		}
	);
	$('.login-info-user').hover(
		function(){
			$(this).addClass('login-info-user-active');
			$(this).find('.popup').stop(true,true).slideDown('fast');
		},
		function(){
			$(this).find('.popup').stop(true,true).slideUp('fast');
			$(this).removeClass('login-info-user-active');
		}
	);
	//搜索输入框 search-bar
	function isNull(str){
		if ( str == "" ) return true;
		var regu = "^[ ]+$";
		var re = new RegExp(regu);
		return re.test(str);
	};
	$('.search-bar input[type="text"]').focus(function(){
		$(this).prev('label').find('.label-text').hide();
	});
	$('.search-bar input[type="text"]').blur(function(){
		var value = $(this).val();
		var bIsNull = isNull(value);
		if(bIsNull){
			$(this).prev('label').find('.label-text').show();
		}
		else{
			$(this).prev('label').find('.label-text').hide();
		}
	});
	$('.search-bar input[type="text"]').keyup(function(){
		var value = $(this).val();
		var bIsNull = isNull(value);
		if(bIsNull){
			$('.popup-search-result').hide();
		}
		else{
			$('.popup-search-result .keyword').text(value);
			$('.popup-search-result').show();
		}
	});
	$('.popup-search-result li a').each(function(idx,val){
		var self = this;
		$(this).click(function(_i, _v){
			var q = $(this).find('.keyword').text();
			var lnk = $(this).attr('href');
			var exist = lnk.indexOf('?');
			var val = encodeURIComponent(q);
			if(exist < 0){
				$(self).attr('href',lnk+'/q/' + val);
			}
			else {
				$(self).attr('href',lnk+'/q/' + val);
			}
		});
	});
	
	

	/*  ===== 02-摄影大赛 ====== */
	// 大赛奖品
	$('.dsjp .dsjp-detail li').hover(
		function(){
			$(this).find('.pic-magnifier').show();
		},
		function(){
			$(this).find('.pic-magnifier').hide();
		}
	);
	
	/*  ===== 12-我的作品 ====== */
	//hover遮罩层效果
	$('.wdzp-wrap .li-s184x184').hover(
		function(){
			$(this).find('.div-mask').fadeIn();
		},
		function(){
			$(this).find('.div-mask').fadeOut();
		}
	);

    /*  ===== EXIF 弹窗 ====== */
    $('.ckzp-pic-mask .btn-exif').hover(
        function(){
            $(this).parent().parent().parent().find('.popup-exif').show();
        },
        function(){
            $(this).parent().parent().parent().find('.popup-exif').hide();
        }
    );
	
	/*  ===== 17-我的消息-我的私信 ====== */
	$('.wdsx-form .m-btn-green').click(function(){
		$('.wdsx-form').fadeOut();
	});
	$('#wdsx .m-btn-link').click(function(){
		$('.wdsx-form').fadeIn();
	});

	/*  ===== 21-设置 ====== */
	/* 摄影资料 */
    var sz_cameraNum;
	var sz_cameraValue ='';
	$('#slCamera').change(function(){
		sz_cameraValue = $(this).children('option:selected').val();
		sz_cameraNum = $(this).get(0).selectedIndex;
	});

	// 添加相机
	$('#sz_btn_addCamera').click(function(){
		var shtml = '<span class="m-btn m-btn-border m-btn-tag">'+sz_cameraValue+'<i class="m-icon-close" data-type="1" data-target="c_'+ sz_cameraNum  + '">x</i></span>';
        var hc = '<input type="hidden" name="camera[]" class="hcc_'+ sz_cameraNum +'" value=" '+ sz_cameraValue +' "/>';
		var num = $(this).parent().find('.m-btn-tag').size();
		var $option = $(this).prev('select').find('option:eq('+sz_cameraNum+')')
		if(sz_cameraValue==''){
			alert('请选择内容~');
			return false;
		}
		else if(sz_cameraValue!=''){
			$(this).parent().prepend(shtml);
            $(this).parent().append(hc);
			$option.detach();
		}
		if(num>=1){
			$(this).hide();
			$(this).prev().hide();
		}
		return false;
	});
	// 删除相机
	$('.m-btn-tag .m-icon-close').live('click', function(){
		$(this).parent().parent().find('select,.m-btn').show();
		$(this).parent().detach();

        // todo: 删除已选相机
		var type = $(this).data('type'),
            target = $(this).data('target');
        var _i = target.split('_')[1];

        if(type === 1){
            $('.hcc_' + _i).remove();
        }else if(type === 2){
            $('.hcl_' + _i).remove();
        }
	});


    var sz_LensNum;
    var sz_LensValue ='';
    $('#slLens').change(function(){
        sz_LensValue = $(this).children('option:selected').val();
        sz_LensNum = $(this).get(0).selectedIndex;
    });

    // 添加镜头
    $('#sz_btn_addCameraLens').click(function(){
        var shtml = '<span class="m-btn m-btn-border m-btn-tag">'+sz_LensValue+'<i class="m-icon-close" data-type="2" data-target="l_'+ sz_LensNum  + '">x</i></span>';
        var hc = '<input type="hidden" name="cameraLens[]" class="hcl_'+ sz_LensNum +'" value=" '+ sz_LensValue +' "/>';
        var num = $(this).parent().find('.m-btn-tag').size();
        var $option = $(this).prev('select').find('option:eq('+sz_cameraNum+')')
        if(sz_LensNum==''){
            alert('请选择内容~');
            return false;
        }
        else if(sz_LensValue!=''){
            $(this).parent().prepend(shtml);
            $(this).parent().append(hc);
            $option.detach();
        }
        if(num>=1){
            $(this).hide();
            $(this).prev().hide();
        }
        return false;
    });

    // 添加标签
    var ADDTAGMAXCOUNT = 8;
    $(".m-tag-checkbox").each(function(){
        $(this).click(function(){
            //首先判断已经勾选的标签数量
            var ischecked = getCheckedTagCount();
            if(ischecked > ADDTAGMAXCOUNT){
                alert('最大可选标签数量为' + ADDTAGMAXCOUNT);
                var flag = true;
                if(this.checked){
                    flag = false;
                }
                $(this).attr("checked",flag);
            }else{
                var flag = true;
                if(!this.checked){
                    flag = false;
                }
                $(this).attr("checked",flag);
            }
        });
    });

    // 获取已勾选的标签数量
    function getCheckedTagCount(){
        var ischecked = 0;
        $(".m-tag-checkbox:checked").each(function(){
            ischecked ++;
        });

        return ischecked;
    }

	/*  ===== 22-发布照片 ====== */
	// 分享微博按钮
	$('.myPW-fbzp .share-bar a').click(function(){
		var sactive = $(this).hasClass('active');
		$('.myPW-fbzp .share-bar a').removeClass('active');
		if(!sactive){
			$(this).addClass('active');
		}
		return false;
	});
	
	
	
});


	