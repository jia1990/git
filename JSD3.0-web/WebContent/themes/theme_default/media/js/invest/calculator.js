define(function(require,exports,modlue){
	require('jquery');
	$("#typestatusnew").prev().attr("value",1);
	$("#typestatusnew").prev().html("月标");
	$("#flagstatusnew").prev().attr("value",2);
	$("#flagstatusnew").prev().html("一次性还");
	$(".tyepname").html("月");
	
	$("#typestatusnew").click(function(){
		var t = $("#typestatusnew").find(".selected").attr("value");
		if(t==1){
			$(".tyepname").html("月");
			$("#flagstatusnew").prev().html("一次性还");
			$("#flagstatusnew").prev().attr("value","2");
			$("#flagstatusnew").html('<li class="selected" value="2" style="cursor: pointer;">一次性还</li><li class="" value="3" style="cursor: pointer;">每月付息</li><li class="" value="4" style="cursor: pointer;">等额本息</li>');
		}else{
			$(".tyepname").html("天");
			$("#flagstatusnew").prev().html("一次性还");
			$("#flagstatusnew").prev().attr("value","1");
			$("#flagstatusnew").html('<li class="selected" value="1" style="cursor: pointer;">一次性还</li>');
		}
		var li_option=$("#flagstatusnew").find('li');
		li_option.on('click',function(){
			$(this).parent().parent().next().find("option").eq($(this).index()).attr("selected","selected");
			$(this).addClass('selected').siblings().removeClass('selected');
			var value=$(this).text();
			$("#flagstatusnew").prev().text(value);
			$("#flagstatusnew").prev().attr("value",$(this).attr("value"));
			ul_option.hide();
		});
		li_option.hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover');	
		},function(){
			li_option.removeClass('hover');
		});
	}) ;
	
	$(".y_cpmbuttons").click(function(){
		var account = $("#account").val() ;
		var flag = true ;
		if(account==""){
			flag = false ;
			$("#calculErr").html("请输入投资金额");
			$("#calculErr").show();
		//计算器校验问题 start
		}else if(account > 5000000){
			flag = false ;
			$("#calculErr").html("投资金额最高为5000000元");
			$("#calculErr").show();
		}
		var apr = $("#apr").val() ;
		if(apr==""){
			flag = false ;
			$("#calculErr").html("请输入年利率");
			$("#calculErr").show();
		}else if(apr > 24){
			flag = false ;
			$("#calculErr").html("年利率最高24%");
			$("#calculErr").show();
		}
		var status = $("#flagstatusnew").prev().attr("value") ;
		var periods = $("#periods").val() ;
		if(periods==""){
			flag = false ;
			$("#calculErr").html("请输入投资期限");
			$("#calculErr").show();
		}else if(periods>0){
			if(!/^[0-9]*[1-9][0-9]*$/.test(periods)){
				flag = false ;
				$("#calculErr").html("投资期限-请输入正整数");
				$("#calculErr").show();
			}
			if(periods>36 && status != 1){
				flag = false ;
				$("#calculErr").html("投资期限-月标最大为36个月");
				$("#calculErr").show();
			}else if(periods>90 && status == 1){
				flag = false ;
				$("#calculErr").html("投资期限-天标最大为90天");
				$("#calculErr").show();
			}
		}else if(periods<=0){
			flag = false ;
			$("#calculErr").html("投资期限-请输入正数");
			$("#calculErr").show();
		}
		//计算器校验问题 end
		if(flag){
			$("#calculErr").html("");
			$("#calculErr").hide();
			$.ajax({
				url:"/invest/getCalculator.html",
				type:"post",
				dataType:"json",
				data:{account:account,apr:apr,periods:periods,status:status},
				success:function(json){
					if(json.result != false){
						require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
							var tpl = require('../../tpl/calculator.tpl');
							var template = Handlebars.compile(tpl);
							var html = template(json);
							$('.calculatorCpmRight').html(html);
						});
					}else{
						$("#calculErr").html(json.msg);
						$("#calculErr").show();
					}
				}
			}) ;
		}
	}) ;
	$(function(){
		$(window).resize(function() {
  			$(".calculatorCpmBox").css({left:($(window).width()-874)/2+"px",top:($(window).height()-454)/2+"px"});
  			$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
		});
		$(window).resize();
		$(".calculatorCpmBox h1 img").click(function(){
			$(".calculatorCpmBox").hide();
			$(".calculatorCpmBottom").hide();
		})
		$(".y_calculatorbutton").click(function(){
			$("#typestatus").val(1);
			$(".tyepname").html("月");
			$(".calculatorCpmBox").show();
			$(".calculatorCpmBottom").show();
		})
	})
});