//设置标题、内容、宽度、高度
function alerts(titles,cons,widths,heights){
       $("<div>").addClass("alertsbg").css({position:"absolute",left:0,top:0,zIndex:1000,background:"rgba(0,0,0,0.6)",width:"100%",height:$("body").height()}).appendTo("body");
        $("<div>").addClass("alertsBox").appendTo("body");
       $(".alertsBox").css({boxShadow:"2px 2px 3px #555",position:"fixed",left:($(window).width()-widths)/2,top:($(window).height()-heights)/2,zIndex:1001,background:"#fff",width:widths+"px",height:heights+"px"})
        $("<p>").html(titles).addClass("y_alertsBoxTitle").css({position:"absolute",left:"0",top:"0",color:"#0697da",fontSize:"16px",height: "40px",lineHeight:"40px",borderBottom: "1px solid #ddd",paddingLeft:"15px",width:widths-15+"px"}).appendTo(".alertsBox")
        $("<p>").html(cons).addClass("y_alertsBoxCon").css({padding:"68px 22px 0"}).appendTo(".alertsBox");
        $("<span>").addClass("y_alertsBoxButton").css({cursor:"pointer",position:"absolute",right:"-15px",top:"-15px",display:"block",width:"34px",height:"38px",background:"url(/themes/theme_default/images/authentications.png)"}).appendTo(".alertsBox");
   		  $(window).resize(function(){
    	$(".alertsBox").css({left:($(window).width()-widths)/2,top:($(window).height()-heights)/2})
    })
   		  $(".y_alertsBoxButton").click(function(){
   		  	$(".alertsbg").remove();
   		  	$(".alertsBox").remove();
   		  })
    }
//设置标题、内容、宽度、高度、是否刷新页面
 function alerts(titles,cons,widths,heights,refresh){
	 $("<div>").addClass("alertsbg").css({position:"absolute",left:0,top:0,zIndex:1000,background:"rgba(0,0,0,0.6)",width:"100%",height:$("body").height()}).appendTo("body");
	 $("<div>").addClass("alertsBox").appendTo("body");
	 $(".alertsBox").css({boxShadow:"2px 2px 3px #555",position:"fixed",left:($(window).width()-widths)/2,top:($(window).height()-heights)/2,zIndex:1001,background:"#fff",width:widths+"px",height:heights+"px"})
	 $("<p>").html(titles).addClass("y_alertsBoxTitle").css({position:"absolute",left:"0",top:"0",color:"#0697da",fontSize:"16px",height: "40px",lineHeight:"40px",borderBottom: "1px solid #ddd",paddingLeft:"15px",width:widths-15+"px"}).appendTo(".alertsBox")
	 $("<p>").html(cons).addClass("y_alertsBoxCon").css({padding:"68px 22px 0"}).appendTo(".alertsBox");
	 $("<span>").addClass("y_alertsBoxButton").css({cursor:"pointer",position:"absolute",right:"-15px",top:"-15px",display:"block",width:"34px",height:"38px",background:"url(/themes/theme_default/images/authentications.png)"}).appendTo(".alertsBox");
	 $(window).resize(function(){
		 $(".alertsBox").css({left:($(window).width()-widths)/2,top:($(window).height()-heights)/2})
	 })
	 $(".y_alertsBoxButton").click(function(){
		 $(".alertsbg").remove();
		 $(".alertsBox").remove();
		 if(refresh){
			 history.go(0); 
		 }
	 })
 }
 
