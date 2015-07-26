define(function(require,exports,module){
	require('jquery');
	require.async('check',function(){
		$('.auto_switch_wrap input').minCheck({      	
			checkedClass:"autoSwitch_hover", 
			Element:"autoSwitch",	
			showTxt:false 
		});
		$('.col2 input[type="checkbox"]').minCheck({ 	
			checkedClass:"check_box_hover", 
			Element:"check_box",	
			showTxt:false 
		});
		$('.col3 input[type="checkbox"]').minCheck({    
			checkedClass:"radioBox_hover", 
			Element:"radioBox",	
			showTxt:true 
		});
	});
	
	//开关切换
	$('.autoSwitch').live('click',function(){
		if($(this).find('input').is(':checked'))
		{
			$(this).find('input').val('1');
			$('.select_condition').removeClass('hide');
		}else
		{
			$(this).find('input').val('0');
			$('.select_condition').addClass('hide');
		}
	});

	$('.col2').live('click',function(){
		if($(this).find('input').is(':checked'))
		{
			$(this).find('input').val('1');
			$(this).next().removeClass('hide');
		}else
		{
			$(this).find('input').val('0');
			$(this).next().addClass('hide');
		}
	});

});