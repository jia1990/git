$(function(){
		$(window).resize(function(){
			var Wwidth=$(window).width();
			if(Wwidth<1150){
				$(".c_team_left").css({left:"0"});
				$(".c_team_right").css({right:"0"});
			}else{
				$(".c_team_left").css({left:"-72px"});
				$(".c_team_right").css({right:"-72px"});
			}
			if(Wwidth<1000){
				$(".c_general_content").css({width:"1000px"});
				$(".c_sub_nav").css({width:"1000px"});
				$(".c_about_photo").css({width:"1000px"});
			}else{
				$(".c_general_content").css({width:"100%"});
				$(".c_sub_nav").css({width:"100%"});
				$(".c_about_photo").css({width:"100%"});
			}
		});
		$(window).resize();
		//管理团队左右滚动
		$(".c_manage_btn .c_human_intro").css({width:326*$(".c_manage_btn .c_human_intro dd").length+(8*$(".c_manage_btn .c_human_intro dd").length)});
		$(".c_team_img").css({width:326*$(".c_team_img dd").length+(8*$(".c_team_img dd").length)});
		$(".c_manage_btn .c_team_right").click(function(){
			var c_parlex_project=$(".c_manage_btn .c_human_intro");
			 if (!(c_parlex_project.is(":animated"))) {
				 c_parlex_project.stop();
				if(c_parlex_project.position().left<=-(326+8)*(c_parlex_project.find("dd").length-3)){
				}else{
				c_parlex_project.animate({left:c_parlex_project.position().left-326-8+"px"},600);
				}
			 }
		})
		$(".c_manage_btn .c_team_left").click(function(){
			var c_parlex_project=$(".c_manage_btn .c_human_intro");
			if (!(c_parlex_project.is(":animated"))) {
				 c_parlex_project.stop();
				if(c_parlex_project.position().left>=0){
				}else{
					c_parlex_project.animate({left:c_parlex_project.position().left+326+8+"px"},600);
				}
			}
		})
		//团队介绍左右滚动
		$(".c_team_content .c_team_right").click(function(){
			var c_team_img=$(".c_team_img");
			if (!(c_team_img.is(":animated"))) {
				c_team_img.stop();
				if(c_team_img.position().left<=-($(".c_team_img dd").width()+8)*(c_team_img.find("dd").length-3)){
				}else{
				c_team_img.animate({left:c_team_img.position().left-$(".c_team_img dd").width()-8+"px"},600);
				}
			}
		})
		$(".c_team_content .c_team_left").click(function(){
			var c_team_img=$(".c_team_img");
			if (!(c_team_img.is(":animated"))) {
				c_team_img.stop();
				if(c_team_img.position().left>=0){
				}else{
					c_team_img.animate({left:c_team_img.position().left+$(".c_team_img dd").width()+8+"px"},600);
				}
			}
		})
		//"我的交易"模块侧导航
		/*$(".c_deal_menu li").click(function(){
			var index=$(this).index();
			$(this).addClass("c_menu_this").siblings().removeClass("c_menu_this");
			$(".c_deal_operate").eq(index).show().siblings().hide();	
		})*/
})