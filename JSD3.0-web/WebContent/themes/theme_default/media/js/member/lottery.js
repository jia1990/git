$(function(){
		var num = 0;
		// ul1 li的克隆实现无缝轮转   左侧轮转
		// 轮转函数  左侧轮转
		function move() {
			num = num - 48;
			if (num > -($(".lotterybannerleftin .ul1 li").length-10)*48) {
		     $(".lotterybannerleftin .ul1").animate({
		         marginTop: num
		     }, 1000);
		 } else {
		     $(".lotterybannerleftin .ul1").animate({
		         marginTop: num
		     }, 1000, function() {
		         num = 0;
		         $(".lotterybannerleftin .ul1").css({
		             marginTop: 0
		        	});
		    	});
		 	}
		};
		var st=setInterval(move,3000);
		$($(".lotterybannercenterin .cneterul1 li")[0]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul1 li")[7]));
		$($(".lotterybannercenterin .cneterul1 li")[1]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul1 li")[8]));
		$($(".lotterybannercenterin .cneterul1 li")[2]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul1 li")[9]));

		$($(".lotterybannercenterin .cneterul2 li")[0]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul2 li")[7]));
		$($(".lotterybannercenterin .cneterul2 li")[1]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul2 li")[8]));
		$($(".lotterybannercenterin .cneterul2 li")[2]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul2 li")[9]));
		
		$($(".lotterybannercenterin .cneterul3 li")[0]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul3 li")[7]));
		$($(".lotterybannercenterin .cneterul3 li")[1]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul3 li")[8]));
		$($(".lotterybannercenterin .cneterul3 li")[2]).clone(true).insertAfter($($(".lotterybannercenterin .cneterul3 li")[9]));

		$(".lotterybannercenterin .cneterul1 li")[0].index=0;
		$(".lotterybannercenterin .cneterul2 li")[0].index=-69;
		$(".lotterybannercenterin .cneterul3 li")[0].index=0;
		function move1(obj,t) {
			obj.find("li")[0].index = obj.find("li")[0].index - 69;
			if (obj.find("li")[0].index >= -483) {
		    obj.animate({
		         marginTop: obj.find("li")[0].index
		     }, 10);
		 } else {
		    obj.animate({
		         marginTop: obj.find("li")[0].index
		     }, 10, function() {
		         obj.find("li")[0].index = 0;
		    obj.css({
		             marginTop: 0
		        	});
		    	});
		 	}
		};
		var objssy2=$(".lotterybannercenterin .cneterul1").find("li")[2];
		var objssy3=$(".lotterybannercenterin .cneterul1").find("li")[3];
		objssy2.index=true;
		$(".InstantLottery").click(function(){
			if(objssy2.index){
				objssy2.index=false;
			//积分抽奖的核心请求方法 start
			var ruleId = $("#id").val();
			
		 	var b = new Base64();  
	        var ruleIdStr = b.encode(ruleId+"");  
			var ruleUrl = "/scoreAward/award.html?id="+ruleIdStr+"&randID="+ escape(new Date());
		    
			$.ajax({
				url:ruleUrl,
				dataType:"json",
				data:"data",
				error:function(){

				},
				success:function(result){
					var levelNo = "";
					var prizeName = "";
					var prizeHideName = "";
					if(!result.result){
						var status = result.data.is_success;
						if(status == "True")
						{
							
							levelNo = result.data.levelNo;			//奖品等级
							objssy3.index=levelNo;				
							prizeName = result.data.name;			//奖品名
							prizeHideName = result.data.hideName;	//奖品名
							prizeMoney = result.data.money;			//中奖值
							prizeType = result.data.awardType;		//中奖类型
							validScore = result.data.score;			//积分余额
							$(".lotterybannercenterin .cneterul1 li")[0].index=0;
							$(".lotterybannercenterin .cneterul2 li")[0].index=-69;
							$(".lotterybannercenterin .cneterul3 li")[0].index=0;
							$(".lotterybannercenterin .cneterul1").css("marginTop","0");
							$(".lotterybannercenterin .cneterul2").css("marginTop","-69px");
							$(".lotterybannercenterin .cneterul3").css("marginTop","0");
							var t1 = setInterval(
									function(){move1($(".lotterybannercenterin .cneterul1"),t1);},
									20);
							
							setTimeout(function(){
								var t2 = setInterval(
										function(){move1($(".lotterybannercenterin .cneterul2"),t2);},
										20);
								setTimeout(function(){
									clearInterval(t2);
									$(".lotterybannercenterin .cneterul2").stop();
									if((9-objssy3.index)==1){
										$(".lotterybannercenterin .cneterul2").animate({marginTop: -7*69},20);
									}else{
										$(".lotterybannercenterin .cneterul2").animate({marginTop: -(7-objssy3.index)*69},20);
									}
								},((Math.random()+2)*1000+1040));
							}, 500);
							setTimeout(function(){
								clearInterval(t1);
								$(".lotterybannercenterin .cneterul1").stop();
								$(".lotterybannercenterin .cneterul1").animate({marginTop: -(objssy3.index-2)*69},20);
								
							},((Math.random()+2)*1000+20));	
							
							setTimeout(function(){
								var t3 = setInterval(
										function(){move1($(".lotterybannercenterin .cneterul3"),t3);},
										20);
								setTimeout(function(){
									clearInterval(t3);
									$(".lotterybannercenterin .cneterul3").stop();
									$(".lotterybannercenterin .cneterul3").animate({marginTop: -(objssy3.index-2)*69},20);
									$(".lotterybannerrightcon").hide();
									$(".NOLoginRight").show();
									if(prizeName.length > 10){
										$(".NOLoginRight .lotterybannerrightTitle span").html(prizeHideName);
									}else if(prizeName.length <= 10){
										$(".NOLoginRight .lotterybannerrightTitle span").html(prizeName);
									}
									$(".lotterybannerrightspan em").html(validScore);
									if(prizeType == 6){
										$(".NOLoginRight .InstantLottery").addClass("InstantLottery33");
										$(".NOLoginRight .InstantLottery55").addClass("InstantLottery22");
										$(".NOLoginRight .InstantLottery55").attr("href","/member/score/showPetCard.html");
									}else if(prizeType == 3){
										$(".NOLoginRight .InstantLottery").addClass("InstantLottery33");
										$(".NOLoginRight .InstantLottery55").addClass("InstantLottery22");
										$(".NOLoginRight .InstantLottery55").attr("href","/member/member/memberAwardLog.html");
									}
									//	$(".bannerrightimg1").css("background","")
									objssy2.index=true;
								},((Math.random()+2)*1000+1540));
							},1000);
							
							
						}else if(status == "False"){
							errorMsg = result.data.error;
							if(errorMsg=="RESULT_NO_LOGIN")
							{
								alerts("提示","您还没有登录<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_RULE_STATUS_DISABLE")
							{
								alerts("提示","规则未启用<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_INVALID_RULE_ID")
							{
								alerts("提示","规则ID错误<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_PARAMETER_ERROR")
							{
								alerts("提示","请求参数错误<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_BEFORE_START_TIME")
							{
								alerts("提示","活动还没开始<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_AFTER_END_TIME")
							{
								alerts("提示","活动已经结束<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_POINT_LIMIT")
							{
								alerts("提示","您的积分不足咯<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_TIME_LIMIT")
							{
								alerts("提示","抽奖次数用完啦，期待新活动吧<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_AWARD_OBJ_LIMIT")
							{
								alerts("提示","超出奖品数量限制啦，期待新活动吧<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_MONEY_LIMIT")
							{
								alerts("提示","超出奖品金额限制啦，期待新活动吧<span>确认</span>",300,200);
								objssy2.index=false;	
							}else if(errorMsg=="RESULT_REAL_NO_AUTHENTICATION")
							{
								alerts("提示","你还没实名认证！<a href='/member/security/realNameIdentify.html'>实名认证</a>",300,200);
								objssy2.index=false;	
							}else if(errorMsg=="RESULT_EMAIL_NO_AUTHENTICATION")
							{
								alerts("提示","你还没邮箱认证！<a href='/member/useridentify/identifedEmail.html'>邮箱认证</a>",300,200);
								objssy2.index=false;	
							}else if(errorMsg=="RESULT_PHONE_NO_AUTHENTICATION")
							{
								alerts("提示","你还没手机认证！<a href='/member/useridentify/identifedPhoneView.html'>手机认证</a>",300,200);
								objssy2.index=false;	
							}else if(errorMsg=="RESULT_AWARD_TRANSFER_ERROR")
							{
								alerts("提示","现金转账失败<span>确认</span>",300,200);
								objssy2.index=false;
							}else if(errorMsg=="RESULT_YGCARD_NOT_ENOUGH")
							{
								alerts("提示","对应金额云购体验卡不足，请联系管理员<span>确认</span>",300,200);
								objssy2.index=false;
							}else {
								alerts("提示","业务繁忙，请刷新后再试<span>确认</span>",300,200);
								objssy2.index=false;
							}		
							$(".y_alertsBoxCon span").click(function(){
								$(".alertsBox").hide();
								$(".alertsbg").hide();
								
							});
						}
					}else{
						alerts("提示",result.msg,400,400);
					}
				}
			});
			//积分抽奖的核心请求方法 end
			}	
	});	
 	});