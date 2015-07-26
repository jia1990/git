 /*index*/
 $(function() {
$(window).resize(function(){
if($(window).width()>=1911){
    $(".conbanner").css("backgroundSize","100%");
}else{
     $(".conbanner").css("backgroundSize","");
}
})
$(window).resize();
    /*选项卡*/
    $(".y_babyBoxMore .y_babyBoxTitle h1").click(function(){
        $(".y_babyBoxMore .y_babyBoxTitle h1").removeClass("h1Click");
        $(this).addClass("h1Click");
        var index=$(this).index(".y_babyBoxMore .y_babyBoxTitle h1");
         $(".y_babyBoxIns").css("display","none");
       $($(".y_babyBoxIns")[index]).css("display","block");
    })
    
     var num1 = 0;
     function move() {
         num1 = num1 - 44;
         if (num1 >= -($(".scroll_list_left li").length - 1) * 44) {
             $(".scroll_list_left").animate({
                 marginTop: num1
             }, 1000);
         } else {
             $(".scroll_list_left").animate({
                 marginTop: num1
             }, 1000, function() {
                 num1 = 0;
                 $(".scroll_list_left").css({
                     marginTop: 0
                 });
             });
         }
     };
     var t = setInterval(move, 2000);
     $(".scroll_list_left").hover(function() {
         clearInterval(t);
     }, function() {
         t = setInterval(move, 2000);
     })

   $(".scroll_list_rightli1").click(function() {
	 if (!($(".scroll_list_left").is(":animated"))) {
     $(".scroll_list_left").stop();
         var mls = parseInt($(".scroll_list_left").css("marginTop").slice(0,-2));
         if (mls > -(($(".scroll_list_left li").length - 2) * 44)) {
             $(".scroll_list_left").animate({marginTop: mls - 44 }, 1000);
         }
	 }
     });
     $(".scroll_list_rightli2").click(function() {
    	 if (!($(".scroll_list_left").is(":animated"))) {
        $(".scroll_list_left").stop();
         var mls = parseInt($(".scroll_list_left").css("marginTop").slice(0,-2));
         if (mls <=-44) {
             $(".scroll_list_left").animate({marginTop: mls + 44 }, 1000);
         }
    	 }
     });

     $(".scroll_list_right li").hover(function() {
         clearInterval(t);
     }, function() {
         var mls = $(".scroll_list_left").css("marginTop");
         num1 = mls;
         t = setInterval(move, 2000);
     })

     //鼠标滑过显示隐藏
        $(".c_show_hide dd.y_oldobj").hover(function(){
            var index=$(this).index(".c_show_hide dd");
            $(".c_show_hide ul").eq(index).hide();
            $(".c_show_hide .c_par_support").hide();
            $(".c_show_hide .c_par_support").eq(index).show();
        },function(){
            var index=$(this).index(".c_show_hide dd");
            $(".c_show_hide ul").show();
            $(".c_show_hide .c_par_support").hide();
        })
        $(".c_case dd").hover(function(){
            var index=$(this).index(".c_case dd");
            $(".c_case ul").eq(index).hide();
            $(".c_case .c_par_support").hide();
            $(".c_case .c_par_support").eq(index).show();
        },function(){
            var index=$(this).index(".c_case dd");
            $(".c_case ul").show();
            $(".c_case .c_par_support").hide();
        })

            //左右滚动
        $(".c_one").css({width:306*$(".c_one dd").length+(42*($(".c_one dd").length-3))});
        $(".y_one").css({width:227*$(".y_one dd").length+(32*($(".y_one dd").length-3))});
        //$(".c_three").css({width:304*$(".c_three dd").length+(21*($(".c_three dd").length-1))});
        $(".c_right_btn").click(function(){ 
        	var c_parlex_project=$(this).parent().find(".c_parlex_project");
        	if(c_parlex_project.find("dd").length>4){
            if (!(c_parlex_project.is(":animated"))) {
            	c_parlex_project.stop();
	            if(c_parlex_project.position().left<=-($(".c_parlex_project dd").width()+34)*(c_parlex_project.find("dd").length-4)){
	         c_parlex_project.animate({left:0+"px"},600);
	            }else{
	            c_parlex_project.animate({left:c_parlex_project.position().left-$(".c_parlex_project dd").width()-34+"px"},600);
	            }
            }
        	}
         })
        $(".c_left_btn").click(function(){
            var c_parlex_project=$(this).parent().find(".c_parlex_project");
            if(c_parlex_project.find("dd").length>4){
            if (!(c_parlex_project.is(":animated"))) {
            	c_parlex_project.stop();
                if(c_parlex_project.position().left>=0){
                c_parlex_project.animate({left:-($(".c_parlex_project dd").width()+34)*(c_parlex_project.find("dd").length-4)+"px"},600);
                }else{
                c_parlex_project.animate({left:c_parlex_project.position().left+$(".c_parlex_project dd").width()+34+"px"},600);
                }
            }
            }
        })
          $(".y_right_btn").unbind('click').click(function(){ 
                var y_parlex_project=$(this).parent().find(".y_parlex_project");
                if(y_parlex_project.find("dd").length>4){
                if (!(y_parlex_project.is(":animated"))) {
	                y_parlex_project.stop();
	                if(y_parlex_project.position().left<=-($(".y_parlex_project dd").width()+34)*(y_parlex_project.find("dd").length-4)){
	              y_parlex_project.animate({left:0+"px"},600);
	                }else{
	                y_parlex_project.animate({left:y_parlex_project.position().left-$(".y_parlex_project dd").width()-34+"px"},600);
	                }
                }
                }
          })
         $(".y_left_btn").unbind('click').click(function(){
                var y_parlex_project=$(this).parent().find(".y_parlex_project");
                if(y_parlex_project.find("dd").length>4){
                if (!(y_parlex_project.is(":animated"))) {
	                y_parlex_project.stop();
	                if(y_parlex_project.position().left>=0){
	                y_parlex_project.animate({left:-($(".y_parlex_project dd").width()+34)*(y_parlex_project.find("dd").length-4)+"px"},600);
	                }else{
	                y_parlex_project.animate({left:y_parlex_project.position().left+$(".y_parlex_project dd").width()+34+"px"},600);
	                }
                }
                }
        })
        //平台公告
       
        $(".y_babyBoxNotice2 .y_babyBoxTitle h1").hover(function(){
            $(this).find("span").css({backgroundPosition:"-57px -153px"});
        },function(){
            $(this).find("span").css({backgroundPosition:"-57px -130px"});
        })
         $(".y_babyBoxNotice1 .y_babyBoxTitle h1").hover(function(){
            $(this).find("span").css({backgroundPosition:"-28px -153px"});
        },function(){
            $(this).find("span").css({backgroundPosition:"-28px -130px"});
        })
 })