define(function(require,exports,module){
	require('jquery');	
	require('alertNew');	
	var heightL=$(window).height();
    var heights=$("body").height();
    $(".w_add_bg").css({height:heights+"px"});
    $(".window").css({top:(heightL-390)/2+"px"});
    $(".window .w_close").click(function(){
       $(".window").hide("fast");
       $(".w_add_bg").hide("fast");
    });
	function picChange(index,img){  
	       setInterval(function(){
	            switch(index){  
	                     case 1:
	                       img.src="/themes/theme_default/images/subject/questions/icon_03.png"; 
	                       index=2;
	                     break;     
	                     case 2: 
	                      img.src="/themes/theme_default/images/subject/questions/icon_02.png"; 
	                      index=1;
	                     break;
	                 }  
	               
	       },200);
	     
	 }  
	picChange(1,document.getElementById("heart"));
	
    $(".plane").animate({bottom:190,marginLeft:390},1000);
    $(".add_bg").click(function(){
      var index=$(this).index(".add_bg");
      $(".add_bg").removeClass("add_newbg");
      $(this).addClass("add_newbg");
      $(".w_btn").css({background:"url(/themes/theme_default/images/subject/questions/an_03.png) no-repeat left center"});
      $(".w_btn").hover(function(){
      $(".w_btn").css({background:"url(/themes/theme_default/images/subject/questions/an1_03.png) no-repeat left center"});
      },function(){
       $(".w_btn").css({background:"url((/themes/theme_default/images/subject/questions/an_03.png) no-repeat left center"}); 
      });
    });
    $(".banner").click(function(){
      var tops=$(".questions_con").offset().top;
       $(document.documentElement).animate({
                scrollTop: tops
                },200);
        //支持chrome
        $(document.body).animate({
            scrollTop: tops
            },200);
            
    });
    getQuestion();
    function getQuestion(){
    	$(".wrong").hide();
		$(".ture").hide();
		$(".add_bg").removeClass("add_newbg");
    	$.ajax({
    		url:"/subject/questionList.html",
    		type:"post",
    		success:function(data){
    		if(!data.result){
    			//alert(data.msg);
    			if(data.code == "02"){
    				//$(".title").html(data.msg);
    				$(".title1").hide();
    				$(".answerCount").html(data.answerCount);
    				$(".rightAnswerCount").html(data.rightAnswerCount);
    				$(".w_btn").hide();
    				$("#isFullAnswer").show();
    				$(".w_btn_new").show();
    				//rewardMoney
    				if(data.rightAnswerCount >= 3){
    					$(".money").html(data.rewardMoney + "元");
    					$(".window_one").show();
    					$(".w_add_bg").show();
    					$(".new_tips").show();
    				}else{
    					$(".window_wrong").show();
    					$(".w_add_bg").show();
    				}
    			}
    		}else{
    			$(".answerStr").eq(0).html(data.A);
    			$(".answerStr").eq(1).html(data.B);
    			$(".answerStr").eq(2).html(data.C);
    			$(".answerStr").eq(3).html(data.D);
    			$(".answerContent").html(data.content);
    			$(".answerCount").html(data.answerCount + 1);
    			$(".answerCountTitle").html((data.answerCount + 1) + "、");
    			$(".rightAnswerCount").html(data.rightAnswerCount);
    			$("#questionId").val(data.questionId);
    			$(".w_btn").show();
    			$(".title").show();
    			subjectAnswer();
    		}
    	}
    	});
    }
    //$(".ture").show();
    function subjectAnswer(){
    	$(".w_btn").unbind("click");
    	$(".w_btn").click(function(){
    		if($(".add_newbg").html()!=null && $(".add_newbg").html() != "null"){
    			var index = $(".add_bg").index($(".add_newbg"));
    			var answerStr = $(".answerStr").eq(index).html();
    			$.ajax({
    				url:"/subject/questionAnswer.html",
    				type:"post",
    				data:{questionId:$("#questionId").val(),answerStr:answerStr},
    				success:function(data){
    				if(!data.result){
    					$(".wrong").show();
    					var t1 = setTimeout(getQuestion,2000);
    					//clearTimeout(t1);
    				}else{
    					$(".ture").show();
    					var t1 = setTimeout(getQuestion,2000);
    					//clearTimeout(t1);
    				}
    			}
    			});
    		}else{
    			alertNew("请选择答案","提示",function(){},true);
    		}
    	});
    }
    
});