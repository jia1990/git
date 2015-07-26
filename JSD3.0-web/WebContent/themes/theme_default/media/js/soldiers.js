define(function(require,exports,modlue){
	require('jquery');
	require('alert');
	$(function(){
		var heightL=$(window).height();
		var heights=$("body").height();
		$(".w_add_bg").css({height:heights+"px"});
		$(".popup_window").css({top:(heightL-390)/2+"px"});
		
		$(".box_state").hover(function(){
			var index=$(this).index(".box_state");
			$(this).next(".tips").show();
		},function(){
			$(".tips").hide();
		});
		$(".btn_state").click(function(){
			
			var index=$(this).index(".btn_state");
			var obj = $(this);
			$.ajax({
				url:"/rpActivity/rpActivityProduceOpen.html",
				data:{"index":index},
				type:"post",
				success:function(data){
					if(data.result){
						obj.parent().find(".box_state").attr({ src: "/themes/theme_default/images/subject/indianaJones/box_03.png"});
						$($(".btn_state")[index]).css({background:"url('/themes/theme_default/images/subject/indianaJones/btn_03.png')"});
						
						if(index==2||index==5||index==6){
							$($(".popup_bg")[index]).animate({display:"block",width:"40",top:0,left:270,opacity:"0"},500);
						}else{
							$($(".popup_bg")[index]).animate({display:"block",width:"40",top:0,left:0,opacity:"0"},500);
						}
						var t=setTimeout(function(){
							$(".popup_window").show();
							$($(".popup_window .window")[index]).show();
							$(".w_add_bg").show();},500);
						
					}else{
						$.alert(data.msg, "提示", function(){},true);
					}
				},
				error:function(){
					location.reload();
				}
			});
			
//			$(this).parent().find(".box_state").attr({ src: "/themes/theme_default/images/subject/indianaJones/box_03.png"});
//			$($(".btn_state")[index]).css({background:"url('/themes/theme_default/images/subject/indianaJones/btn_03.png')"});
//			
//			if(index==2||index==5||index==6){
//				$($(".popup_bg")[index]).animate({display:"block",width:"40",top:0,left:270,opacity:"0"},500);
//			}else{
//				$($(".popup_bg")[index]).animate({display:"block",width:"40",top:0,left:0,opacity:"0"},500);
//			}
//			var t=setTimeout(function(){
//				$(".popup_window").show();
//				$($(".popup_window .window")[index]).show();
//				$(".w_add_bg").show();},500);
			
			
		});
		
		$(".window .w_close").click(function(){
			$(".popup_window").hide("fast");
			$(".popup_window .window").hide("fast");
			$(".w_add_bg").hide("fast");
		});
	})
});