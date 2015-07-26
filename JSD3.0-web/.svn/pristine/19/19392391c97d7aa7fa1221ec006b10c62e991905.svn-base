$(function(){
	//tips显示隐藏
	$(".egg_hover").hover(function(){
		$(".egg_full").removeClass("egg_full_hover");
		$(this).parent().addClass("egg_full_hover");
	},function(){
		$(".egg_full").removeClass("egg_full_hover");
	});
	//砸蛋
	$(".egg_hover").click(function(){
		//锤子不足tip提示
		$(".tip").hide();
		$(this).parent().siblings(".tip").show().delay(2000).fadeOut(1000);
		//鸡蛋碎裂
		$(this).parent().hide();
		$(".egg_full").delay(2000).hide(0);
		$(".egg_sub img").delay(2000).show(0);
		$(".chip_box").delay(2000).show(500);
		$(this).parent().siblings(".chip_box").show();
		$(this).parent().siblings(".egg_sub").children().show();
		$(".red_packet").delay(2600).show(0);
		$(".packet_bj").delay(2600).show(0);
	});
	//中奖名单滚动
	var speed = 40 ;
    var content_three = document.getElementById("content_three");  
    var list_copy = document.getElementById("list_copy");  
    var list_all = document.getElementById("list_all");  
    list_copy.innerHTML = list_all.innerHTML + list_all.innerHTML;
    function Marquee() {  
        if (list_copy.offsetTop - content_three.scrollTop <= 0)  
            content_three.scrollTop -= list_all.offsetHeight ; 
        else {  
            content_three.scrollTop++ ; 
        }  
    }  
    var MyMar = setInterval(Marquee, speed);  
    content_three.onmouseover = function() { clearInterval(MyMar)} 
    content_three.onmouseout = function() { MyMar = setInterval(Marquee, speed)} 
	//红包弹窗
	$(window).resize(function(){
		$(".red_packet").css({left:($(window).width()-$(".red_packet").width())/2,top:($(window).height()-$(".red_packet").height())/2-60});
	});
	$(window).resize();
	$(".packet_bj").height($("body").height());
	$(".packet_close").click(function(){
		$(".red_packet").hide();
		$(".packet_bj").hide();
	});
});