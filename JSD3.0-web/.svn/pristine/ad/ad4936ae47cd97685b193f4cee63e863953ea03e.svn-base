define(function(require,exports,module){
    require('jquery');
    require('alertNew');
    require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){	
    //默认加载铜牌会员规则
    $.ajax({
            type: "POST",
            dataType: "json",
            url: "/member/member/vipBuyRule.html?trandomTime="+(new Date()).getTime(),
            data: {
            	vipLevel:"V2"
            },
            success: function (data) {
            	var str ="<span>金额（元）：</span>";
            	var str2 = "<span>开 通 时 间：</span>";
            	for(i=0;i<data.vipPriceList.length;i++){
            		if(i == 0){
            			str += "<dd class='c_double_this' ><i >"+data.vipPriceList[i].price+"</i><b></b></dd>";
            			str2 +="<dd class='c_double_this' ><i data-val="+data.vipPriceList[i].month+">"+data.vipPriceList[i].month+"</i>月<b></b></dd>";
            		}else{
            			str += "<dd ><i >"+data.vipPriceList[i].price+"</i><b></b></dd>";
            			str2 +="<dd><i data-val="+data.vipPriceList[i].month+">"+data.vipPriceList[i].month+"</i>月<b></b></dd>";
            		}
            	}
            	str += "<div class='c_clear'></div>";
            	str2 += "<div class='c_clear'></div>";
            	$(".c_member_money").html(str);
            	$(".c_member_date").html(str2);   	
            	
            	$(".c_member_date dd").click(function(){
        			$(this).addClass("c_double_this").siblings().removeClass("c_double_this");
        			var index=$(this).index(".c_member_date dd");
        			$(this).parent().next().children("dd").eq(index).addClass("c_double_this").siblings().removeClass("c_double_this");
        			
        		})
            }
      });
    	
    //点击会员类型	
    $(".c_member_icon li").click(function(){
    	var vipLevel  =$(".c_member_icon li.c_member_this i").data("val");
    	$.ajax({
            type: "POST",
            dataType: "json",
            url: "/member/member/vipBuyRule.html?trandomTime="+(new Date()).getTime(),
            data: {
            	vipLevel:vipLevel
            },
            success: function (data) {
            	var str ="<span>金额（元）：</span>";
            	var str2 = "<span>开 通 时 间：</span>";
            	for(i=0;i<data.vipPriceList.length;i++){
            		if(i == 0){
            			str += "<dd class='c_double_this' ><i >"+data.vipPriceList[i].price+"</i><b></b></dd>";
            			str2 +="<dd class='c_double_this' ><i data-val="+data.vipPriceList[i].month+">"+data.vipPriceList[i].month+"</i>月<b></b></dd>";
            		}else{
            			str += "<dd ><i >"+data.vipPriceList[i].price+"</i><b></b></dd>";
            			str2 +="<dd><i data-val="+data.vipPriceList[i].month+">"+data.vipPriceList[i].month+"</i>月<b></b></dd>";
            		}
            	}
            	str += "<div class='c_clear'></div>";
            	str2 += "<div class='c_clear'></div>";
            	$(".c_member_money").html(str);
            	$(".c_member_date").html(str2);
            	
            	$(".c_member_date dd").click(function(){
        			$(this).addClass("c_double_this").siblings().removeClass("c_double_this");
        			var index=$(this).index(".c_member_date dd");
        			$(this).parent().next().children("dd").eq(index).addClass("c_double_this").siblings().removeClass("c_double_this");
        		})	
            }
        });
    	
    });	
    
    //点击确认按钮
    $(".c_confirms").click(function(){
    	//选中的会员等级
    	var vipLevel = $(".c_member_icon li.c_member_this i").data("val");
    	//选中的日期范围
    	var validMonth = $(".c_member_date dd.c_double_this i").data("val");
    	//选中的所需购买金额 
    	var vipFee = $(".c_member_money dd.c_double_this i").text();	
    	
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "/member/member/getMemberMoney.html?trandomTime="+(new Date()).getTime(),
            data: {
            	vipLevel:vipLevel,
            	validMonth:validMonth,
            	vipFee:vipFee
            },
            success: function (data) {
            	if(data.result== true){
            		var transferVipFee = data.transferVipFee;
            		$(".y_moneypaycpm").html(transferVipFee);
            		$(".calculatorCpmBoxj").show();
            		$(".calculatorCpmBottom").show(); 
            	}else if(data.result== false){
            		//layer.msg(data.msg, 1, -1);
            		alertNew(data.msg,"提示",function(){},true);
            	}            	
            },
            error: function(data) {
               // alert("系统异常，请联系管理员");
            	alertNew("系统异常，请联系管理员","提示",function(){},true);
             }
        });
    });
    
    
    var falg = false;
    function returnResult(){
  		var resultFlag=$("#resultFlag").val();
  		if(falg == false){
    	$.getJSON("/public/ymd/getResult.html", {
    		resultFlag : resultFlag
    	}, function(data) {
    		if(data.msg_data!=null){
    			falg = true;
    			if(data.msg_data=='buyVIPSuccess'){
    				$(".calculatorCpmBoxj").hide();
        			$(".calculatorCpmBottom").hide();
        			$("#qui_pop").hide();
	    			$.layer({
					    type: 1,
					    closeBtn: false,
					    title: false,
					    area: ['460px', '240px'],
					    shade: [0.5, '#000'],
					    border: 0,
					    page: {
					        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">会员服务提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>尊敬的用户您好，购买会员成功。</p></div><div class="fileconfirmbtn"><a href="/member/member/memberLog.html" class="okBtn">购买成功</a><a href="javascript:;" class="cancleBtn closeBtn">购买失败</a></div></div>'
					    }
					});	
	    			$(".closeBtn").click(function(){
						layer.closeAll();
					});
    			}else{
    				alertNew(data.msg_data,"提示",function(){window.location.reload();},true);
    			   //$(".pay_cpmerrorSuc_sub").html(data.msg_data);
    			}
    		}/*else{
    			setTimeout(returnResult(),5000);
    		}*/
    	});
  		}
    }
    
  //表单提交
	$(".change_true").click(function(){
		$(".change_true").hide();
		//选中的会员等级
    	var vipLevel = $(".c_member_icon li.c_member_this i").data("val");
    	//选中的日期范围
    	var validMonth = $(".c_member_date dd.c_double_this i").data("val");
    	//选中的所需购买金额 
    	var vipFee = $(".c_member_money dd.c_double_this i").text();
    
		$("#vipLevel").val(vipLevel);
		$("#validMonth").val(validMonth);
		$("#vipFee").val(vipFee);
    	
      //表单提交将值传入后台
      var repayPwd = $("#repayPwd").val().trim();
      if(repayPwd==""){   	  
    	  layer.msg("交易密码不能为空！", 1, -1);
    	  $(".change_true").show();
      }else{
    	  $(".calculatorCpmBoxj").hide();
    	  $(".calculatorCpmBottom").hide();
    	  alertNew("<div style='margin:0 100px;'>" +
					"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
					"&nbsp;正在处理请稍候</div>","提示",function(){},false);
        var AjaxURL = "/member/member/memberBuyVip.html";
        $.ajax({
            type: "POST",
            dataType: "json",
            url: AjaxURL,
            data: $('#form1').serialize(),
            success: function (data) {
            	if(data.result){
            		//JSDBET-840 gjh 2015-3-23 start
            		var flag = false;
					var t=setInterval(function () {
						if(flag == false){
							flag = returnResult();
						}
					},1000)
					//JSDBET-840 gjh 2015-3-23 end
				}else if(data.result == false){
					//layer.msg(data.msg, 1, -1);
					alertNew(data.msg,"提示",function(){window.location.reload();},true);
				}else {
					//JSDBET-840 gjh 2015-3-23 start
					var flag = false;
					var time = 0;
					var t=setInterval(function () {
						if(flag == false){
							flag = returnResult();
						}
						time = time + 1;
						if(time == 30){
							window.location.reload();
						}
					},1000)
					//JSDBET-840 gjh 2015-3-23 end
				}     
            },
            error: function(data) {
              //  alert("系统异常，请联系管理员");
            	alertNew("系统异常，请联系管理员","提示",function(){window.location.reload();},true);
             }
        });
      }    
	});
    
    });
});