define(function(require,exports,module){
    require('jquery');
  //判断用户验证信息
    $.ajax({
          type:"post",
          url:"/member_borrow/businessUserIdentify.html",
          dataType:"json",
          success:function(json){
              require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                	  $(".MemberCenter_con1in").append(Handlebars.compile(require("../../tpl/member_borrow/main_info.tpl"))(json));
                	  $(function(){
                	    	var path = $("#webpath").val() ;
                	    	var newda=new Date();
                			newdaHours=newda.getHours();
                			if(newdaHours>=7&&newdaHours<=10){
                				$(".time_text").hide();
                				$(".time_textmorning").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter03.jpg) no-repeat center 0"})
                			}else if(newdaHours>10&&newdaHours<=13){
                				$(".time_text").hide();
                				$(".time_textnoon").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter04.jpg) no-repeat center 0"})
                			}else if(newdaHours>13&&newdaHours<=18){
                				$(".time_text").hide();
                				$(".time_textafternoon").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter04.jpg) no-repeat center 0"})
                			}else{
                				$(".time_text").hide();
                				$(".time_textnight").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter02.jpg) no-repeat center 0"})
                			}
                			
                	    });
                  });
              });
              //判断是否开通第三方账户
              if(json.apiStatus == 0)
              {
                  $(".noAuthentication").slideDown();
              }
          }
    });
  //JSDP-140 gjh 2015-5-21 start
    function setCookie(c_name, value, expiredays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		//alert(exdate.toGMTString());
		document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	}
    //JSDP-140 gjh 2015-5-21 start
    //查询客服是否存在
    $.ajax({
    	type:"post",
    	url:"/member_borrow/queryUserKf.html",
    	dataType:"json",
    	success:function(json){
    			if(json.kfid == 0){
    				//JSDP-140 gjh 2015-5-21 start
    				if (!(document.cookie.length > 0) || document.cookie.indexOf("kfShow=") == -1 ){
    					var exdate=new Date();
    					setCookie('kfShow',true,180);
	    				$(".calculatorCpmBox4").show();
	    	    		$(".calculatorCpmBottom").show();
	    	    		var tpl = require('../../tpl/member_borrow/kfData.tpl');//载入tpl模板
	    	    		//初始化显示表格、搜索
	    	    		require.async(['../member_borrow/cfshowTable','../member_borrow/cfsearch'],function(showTable,search){
	    	    		   showTable.ajaxUrl('/member_borrow/ReKfPre.html?id=14',tpl);
	    	    		   search.search('/member_borrow/ReKfPre.html?id=14',tpl);
	    	    	   });
    				}
    				//JSDP-140 gjh 2015-5-21 end
    			}
    		}
    });
	$(window).resize(function(){
			$(".calculatorCpmBox3").css({left:($(window).width()-500)/2+"px",top:($(window).height()-380)/2+"px"});
			$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
		})
		$(window).resize();
	$(".calculatorCpmBox3 h1 img").click(function(){
		$(".calculatorCpmBox3").hide();
		$(".calculatorCpmBottom").hide();
	})
    $(function(){
		$(".c_weixin").hover(function(){
			$(".c_foot_weixin").show();
		},function(){
			$(".c_foot_weixin").hide();
		})
	})
	 $.ajax({
    	type:"post",
    	url:"/member_borrow/queryUserKf.html",
    	dataType:"json",
    	success:function(json){
    			if(json.kfid == 0){
    				$(".calculatorCpmBox4").show();
    	    		$(".calculatorCpmBottom").show();
    	    		var tpl = require('../../tpl/member_borrow/kfData.tpl');//载入tpl模板
    	    		//初始化显示表格、搜索
    	    		require.async(['../member_borrow/cfshowTable','../member_borrow/cfsearch'],function(showTable,search){
    	    		   showTable.ajaxUrl('/member_borrow/ReKfPre.html?id=14',tpl);
    	    		   search.search('/member_borrow/ReKfPre.html?id=14',tpl);
    	    	   });
    			}
    		}
    });
    $(function(){
		$(".c_contact_icon").hover(function(){
			var index=$(this).index(".c_contact_icon");
			$(".pophover-content").hide();
			$(".pophover-content").eq(index).show();
		},function(){
			$(".pophover-content").hide();
		})
	})
    $(window).resize(function(){
		if($(window).width()>=1911){
		  $(".MemberCenter_con1").css("backgroundSize","100%");
		}else{
		     $(".MemberCenter_con1").css("backgroundSize","");
		}
	});
	$(window).resize();
    $(".c_record li").click(function(){
		var index=$(this).index(".c_record li");
		$(".c_record li").removeClass("c_recent_record");
		$(this).addClass("c_recent_record");	
		$(".record_conssin_num").css("display","none");
		$($(".record_conssin_num")[index]).css("display","block");
	});
  //可提现金额、正在借款项目、下一个待还日期
  $.ajax({
      url:"/member_borrow/businessHandleMoney.html",
      type:"post",
      dataType:"json",
      success:function(json){
          require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
              require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                  $(".MemberCenter_con3").html(Handlebars.compile(require("../../tpl/member_borrow/main_total.tpl"))(json));
                  // 更换客服
                  $(".changekf").click(function(){
                	  $(".calculatorCpmBox4").show();
                	  $(".calculatorCpmBottom").show();
                	  var tpl = require('../../tpl/member_borrow/kfData.tpl');//载入tpl模板
                	   //初始化显示表格、搜索
                	   require.async(['./cfshowTable','./cfsearch'],function(showTable,search){
                		   showTable.ajaxUrl('/member_borrow/ReKfPre.html?id=14',tpl);
                		   search.search('/member_borrow/ReKfPre.html?id=14',tpl);
                	   });
                	   
                  });
                  $(".change_true").click(function(){
                	  require.async('jquery.form',function(){
                		//JSDP-52 gjh 2015-4-20 start
                		  if($("#reason").val().length >= 20){
                  			  $("#kfForm").ajaxSubmit(function(data){
                  				  if(data.result){
                  					  window.location.reload();
                  				  }else{
                  					  
                  				  }
                  			  });
                  		  }else{
                  			if($(".calculatorCpmBox3").css("display") != "none"){
              				  $(".calculatorCpmBox3").hide();
              				  $.alert("请输入20个字符以上的内容！","提示",function(){$(".calculatorCpmBox3").show()},true);
                  			}
                  		  }
                		//JSDP-52 gjh 2015-4-20 end
  	    			});
                  })
                  // JSDP-126 20150519 sxy start
                  /*$(".c_cf_re1").click(function(){  // 投诉
                	  $(".calculatorCpmBox3").show();
                	  $(".calculatorCpmBottom").show();
                	 $("#kfForm").attr("action",'/member_borrow/cf.html') ;
                	 $("#reason").val("");
                  })*/
                  $(".c_cf_re2").click(function(){  // 更换
                	  $(".calculatorCpmBox3").show();
                	  $(".calculatorCpmBottom").show();
                	  $("#kfForm").attr("action",'/member_borrow/changeCf.html') ;
                	  $("#reason").val("");
                  })
              });
          });
      }
  });
  require.async('common1',function(){
	$(".account_home_con").tabChange({
		isClick:true,
        isHover:false,
		childLi:"ul li",//tab选项卡
		childContent:".con",//tab内容
		hoverClassName:"hover",//选中当前选项卡的样式
		callBack:false	
	});
  });
  
//借款中的项目
  $.ajax({
		url:'/member_borrow/businessBid.html',
		type:'get',
		dataType:'json',
		success:function(json){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
	            require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
	            	$($(".record_conssin_num")[0]).html(Handlebars.compile(require('../../tpl/member_borrow/main_borrow.tpl'))(json));
	            	if(!json.businessBidList.length){
		   				$("#borrowmore").hide();
		   				$($(".record_conssin_num")[0]).append("<p class='y_no_nums' style='margin: 60px 420px 0;'></p>");
		   			}
	            });
	        });
		}
    });
  //还款中的项目
  $(".c_record li:eq(1)").one("click",function(){
       $.ajax({
          url:'/member_borrow/businessRepayment.html',
          type:'get',
          dataType:'json',
          success:function(json){
        	  require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                      $($(".record_conssin_num")[1]).html(Handlebars.compile(require('../../tpl/member_borrow/main_repayment.tpl'))(json));
                      if(!json.businessRepaymentList.length){
                   		 $("#repaymentmore").hide();
                   		 $($(".record_conssin_num")[1]).append("<p class='y_no_nums' style='margin: 60px 420px 0;'></p>");
                   	}
                  });
              });
          }
      });
  });
  //交易记录
  $(".c_record li:eq(2)").one("click",function(){
      $.ajax({
          url:'/member_borrow/accountTransactionLog.html',
          type:'get',
          dataType:'json',
          success:function(json){
        	  require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                	  $($(".record_conssin_num")[2]).html(Handlebars.compile(require('../../tpl/member_borrow/main_trade.tpl'))(json));
                	  if(!json.accountLogList.length){
                		  $("#tendermore").hide();
                		  $($(".record_conssin_num")[2]).append("<p class='y_no_nums' style='margin: 60px 420px 0;'></p>");
                      }
                  });
              });
          }
      }) ;
  });
   $(window).resize(function() {
   //JSDP-108 fengguoqin  5.12  start 
			$(".calculatorCpmBox4").css({left:($(window).width()-862)/2+"px",top:($(window).height()-530)/2+"px"});
	//JSDP-108 fengguoqin  5.12  end 
			$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
	});
	$(window).resize();
	$(".calculatorCpmBox4 h1 img").click(function(){
		$(".calculatorCpmBox4").hide();
		$(".calculatorCpmBottom").hide();
	})
});

