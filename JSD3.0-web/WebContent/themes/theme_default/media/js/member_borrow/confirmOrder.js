define(function(require,exports,module){
    require('jquery');
    require('alert');
    $(".subOrder").click(function(){
    	var flag = true ;
    	var addrid = $("#addrid").val(); 
    	if(addrid=="" || addrid=="noset"){
    		flag = false ;
    	}
    	var id = $("#id").val() ;
    	var period = $("#period").val() ;
    	var onePay = $("#onePay").val() ;
    	var type = $("#type").val() ;
    	var paypwd= $("#paypwd").val() ;
    	var orderToken = $("#orderToken").val();
    	//JSDBET-884 gjh 2015-3-30 start
    	var resultFlag = $("#resultFlag").val();
    	//JSDBET-884 gjh 2015-3-30 end
    	if(paypwd!="" && paypwd!="noset" && flag){
    		$.ajax({
    			type:"post",
    			url:"/invest/checkPayPwd.html",
    			dataType:"json",
    			data:{paypwd:paypwd},
    			success:function(data){
    				if(data.result){
    					$(".orderError").hide() ;
    					if(type==1){
    						$.ajax({
    						      type:"post",
    						      url:"/member_borrow/goodToBorrow.html",
    						      //JSDBET-884 gjh 2015-3-30 start
    						      data:{id:id,period:period,onePay:onePay,orderToken:orderToken,resultFlag:resultFlag},
    						      //JSDBET-884 gjh 2015-3-30 end
    						      dataType:"json",
    						      success:function(json){
    						    	//JSDBET-884 gjh 2015-3-30 start
    						    	  if(json.result){
    						    		  $.alert("<div style='margin:0 100px;'>" +
    						    				  "<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
    						    				  "&nbsp;正在处理请稍候</div>","提示",function(){},false);
    						    		  var flag = false;
    						    		  var t=setInterval(function () {
    						    			  if(flag == false){
    						    				  flag = returnResult();
    						    			  }
    						    		  },1000)
    						    	  }else{
    						    		  $.alert(json.msg,"提示",function(){window.location.reload();},true);
    						    	  }
		    							//JSDBET-884 gjh 2015-3-30 start
    						      }
    							}) ;
    					}else if(type==2){
    						$.ajax({
    						      type:"post",
    						      url:"/member_borrow/goodToOnePay.html",
    						      //JSDBET-884 gjh 2015-3-30 start
    						      data:{id:id,orderToken:orderToken,resultFlag:resultFlag},
    						      //JSDBET-884 gjh 2015-3-30 end
    						      dataType:"json",
    						      success:function(json){
    						    	  //$.alert(json.msg);
    						    	  //window.location.href="/member_borrow/borrow/indentDetail.html" ;
    						    	  //JSDBET-884 gjh 2015-3-30 start
    						    	  if(json.result){
    						    		  $.alert("<div style='margin:0 100px;'>" +
    						    				  "<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
    						    				  "&nbsp;正在处理请稍候</div>","提示",function(){},false);
    						    		  var flag = false;
    						    		  var t=setInterval(function () {
    						    			  if(flag == false){
    						    				  flag = returnResult();
    						    			  }
    						    		  },1000)
    						    	  }else{
    						    		  $.alert(json.msg,"提示",function(){window.location.reload();},true);
    						    	  }
		    							//JSDBET-884 gjh 2015-3-30 end
    						      }
    						}) ;
    					}else{
    						$(".orderError").show() ;
    						$(".errSpan").html("类型不正确");
    					}
    				}else{
    					$(".orderError").show() ;
    					$(".errSpan").html("交易密码不正确");
    				}
    			}
        	});	
    	}else if(paypwd == "noset"){
    	
    		if(addrid=="" || addrid=="noset"){
    			 $(".orderError").show() ;
    			 $(".errSpan").html("请设置收货地址!") ;
    		}else{
    			 $(".orderError").show() ;
    			 $(".errSpan").html("请设置交易密码!") ;
    		}
		}else{
			if(addrid=="" || addrid=="noset"){
	   			 $(".orderError").show() ;
	   			 $(".errSpan").html("请设置收货地址!") ;
	   		}else{
		   		 $(".orderError").show() ;
				 $(".errSpan").html("请输入交易密码!") ;
	   		}
		}
    });
    
    var getdefault = function (){ 
    	$.ajax({
			url:"/member_borrow/getDefaultAddress.html",
			type:"get",
			dataType:"json",
			success:function(data){
				require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
	                require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
							$('.defaultAddr').html(Handlebars.compile(require("../../tpl/member_borrow/defaultAddr.tpl"))(data));
							$(".updateAddr").click(function(){  // 显示选择页面
								$(".defaultAddr").hide() ;
								$(".setAddr").show();
							}) ;
							$(".setAddr").hide();
							$(".defaultAddr").show() ;
	                })
				});
			}
    	});
    }
    $.ajax({
		url:"/member_borrow/getAddress.html",
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.result){
				 require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
	                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
							$('.address_infodiv').html(Handlebars.compile(require("../../tpl/member_borrow/ordersInfo.tpl"))(data));
							getdefault() ;
							$(".updateAddr").click(function(){  // 显示选择页面
								$(".defaultAddr").hide() ;
								$(".setAddr").show();
							}) ;
							$(".saveAddr").click(function(){
								var id = $("input[name='addrcheckbox']:checked").val() ;
								$.ajax({
									type:"post",
									url:"/member/logisticsAddress/modifyIsDefault.html",
									data:{id:id},
									dataType:"json",
									success:function(data){
										getdefault() ;
									}
								})
							});	
							$(":checkbox").parent().click(function(){
								$(":checkbox").attr("checked",false) ;
								$(this).children().eq(0).attr("checked",true);
							});
	                  })
	             });
			}
		}
	});
  //JSDBET-884 gjh 2015-3-30 start
	var falg = false;
    function returnResult(){
  		var resultFlag=$("#resultFlag").val();
  		if(falg == false){
  		 $.getJSON("/public/ymd/getResult.html", {
  				resultFlag : resultFlag
  			}, function(data) {
  				if(data.msg_data!=null){
  					//alert(data.msg_data);
  					//fnShowReturn($("input[type='submit']"),data.msg_data);
  					falg = true;
  					if(data.msg_data=="投标成功"){
  						$.alert(data.msg_data,"提示",function(){window.location.href="/member_borrow/borrow/indentDetail.html" ;},true);
  						//window.location.reload();
  					}else{
  						//fnShowReturn($("input[type='submit']"),data.msg_data);
  						$.alert(data.msg_data,"提示",function(){window.location.href="/member_borrow/borrow/indentDetail.html" ;},true);
  						/*$(".pay_cpmerror").eq(1).show() ;
  						$(".pay_cpmerror").eq(1).html(data.msg_data) ;*/
  					}
  				}/*else{
  					//setTimeout(returnResult(),5000);
  					//JSDBET-832 gjh 2015-3-23 start
  					var t=setInterval(function () {
  						returnResult();
  					},1000)
  					//JSDBET-832 gjh 2015-3-23 end
  				}*/
  			});
  		}
  	}
  //JSDBET-884 gjh 2015-3-30 start
});

