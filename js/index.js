$(function(){
	
	var $formname = $('#searchForm');
	searchForm($formname);
	// 搜索框焦点变化
	function searchForm(formId){
		var input = formId.find(':input');
		input.each(function(){
			var type = $(this).attr('type');
			if( type == 'text'||'textarea'){
				$(this).focus(function(){
					if($(this).val() == this.defaultValue) $(this).val('');
				}).blur(function(){
					if($(this).val() == '') $(this).val(this.defaultValue);
				});
			}
		});
	} 
	// 城市切换
	$('.city a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		return false;
	}); 
	//menu切换
	$('.menu').on('click','li',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});	
	//更新动态
	var updatelist = $('.update ul');
	var updateli_height = parseInt(updatelist.find('li').height()); 
	var scrollTop = parseInt(updatelist.height());	
	var uptimer = null;
	$('#search').find('.triangle_up').click(function(){
		//alert(1);
		liupMove();
	});	
	$('#search').find('.triangle_down_red').click(function(){
		//alert(1);
		lidownMove();
	});
	updatelist.parents('.update').hover(function(){
		if(uptimer){
			clearInterval(uptimer);
		}	
	},function(){
		uptimer = setInterval(liupMove,1000);
	}).trigger('mouseleave');
    function liupMove(){
		updatelist.stop(true,true).animate({'top':'-='+updateli_height+'px'},'slow');
		if(updatelist.position().top == updateli_height-scrollTop){
			updatelist.stop(true,true).animate({'top':'0px'},'normal');	
		}
	}
    function lidownMove(){
    	updatelist.stop(true,true).animate({'top':'+='+updateli_height+'px'},'slow');
    	if(updatelist.position().top == 0){
    		//alert(updateli_height-scrollTop);
			updatelist.stop(true,true).animate({'top':updateli_height-scrollTop+'px'},'normal');	
		}		
    }
	//选项卡切换
	var oTab = $('ul.tab');
	var oTabLi = oTab.find('li');
	oTab.on('mouseover','li',function(){
		$(this).addClass('active').removeClass('gradient')
			.siblings().removeClass('active').addClass('gradient');
	});
	//导航背景图片变化
	var navLi = $('#nav').find('li');
	var navLi_length = navLi.length;
	var navLi_width = parseInt(navLi.width());
	for(var i = 0;i <  navLi_length; i++){
		var moveLeft = i*navLi_width;
		 navLi.eq(i).find('a')
		 	.css('background-position','-'+moveLeft+'px 0px');
	}
	navLi.mouseover(function(){
		$(this).children('a').animate({'background-position-y':'-70px'},'slow');
	});	
});