define(function(require,exports,module){
	require('jquery');
	
	$(".zfsmTab tbody tr:odd").addClass("tdbg");

	require.async('common1',function(){
		$(".helpBd").tabChange({
			isClick:true,
            isHover:false,
			childLi:"ul li",//tab选项卡
			childContent:".con",//tab内容
			hoverClassName:"selected",//选中当前选项卡的样式
			callBack:false	
		});
	});

	$(".qaBd dt").live("click",function(){
		if($(this).parent("dl").hasClass("current"))
		{
			$(this).find("a").removeClass("qaHiden").addClass("qaShow");
			$(this).parent("dl").removeClass("current");
			$(this).siblings("dd").slideUp();
		}
		else
		{
			$(this).find("a").removeClass("qaShow").addClass("qaHiden");
			$(this).parent("dl").addClass("current");
			$(this).siblings("dd").slideDown();
		}
	});
});