define(function(require,exports,module){
    require('jquery');   
    require('alert');   
   
    
   //判断用户验证信息
    $.ajax({
      type:"post",
      url:"/member/investIdentify.html",
      dataType:"json",
      success:function(json){
          require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
        	  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
              $(".MemberCenter_con1in").append(Handlebars.compile(require("../../tpl/member/main_info.tpl"))(json));
              $(function(){
      	    	var path = $("#webpath").val() ;
      	    	var newda=new Date();
      			newdaHours=newda.getHours();
      		//fengguoqin@ddtkj.com JSDP-31 2015.06.26  start
      			var nickname = $(".nickname").val();
      			var  figureUrl = $(".figureUrl").val();
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
      		  //qq协同登录显示用户的qq头像和qq昵称nickname  figureUrl
      			if($(".cooperationLogin").val()!=""){
      				$(".y_user_img img").attr("src",figureUrl);
      				$(".qqnickName").html(nickname);
      			}else{
      				var webroot = $("#webpathnodir").val();
      				var userImg = $(".userImg").val();
      				$(".y_user_img img").attr("src",webroot+"/avatar/"+userImg+".jpg");
      			}
      			
      		  //fengguoqin@ddtkj.com JSDP-31 2015.06.26  end
      	    });
          });
          });
          //判断是否开通第三方账户
          if(json.apiStatus == 0){
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
    	
    // 获取客服信息   于俊斐
    $(window).resize(function(){
		$(".calculatorCpmBox3").css({left:($(window).width()-500)/2+"px",top:($(window).height()-380)/2+"px"});
		$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
	})
	$(window).resize();
	$(".calculatorCpmBox3 h1 img").click(function(){
		$(".calculatorCpmBox3").hide();
		$(".calculatorCpmBottom").hide();
	})
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
    $.ajax({
    	url:"/member/getKFShow.html",
    	type:"post",
    	dataType:"json",
    	success:function(json){
    		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                    $(".MemberCenter_con3").append(Handlebars.compile(require("../../tpl/member/main_kf.tpl"))(json));
                    // 更换客服
                    $(".changekf").click(function(){
	                  	  $(".calculatorCpmBox4").show();
	                  	  $(".calculatorCpmBottom").show();
	                  	  var tpl = require('../../tpl/member_borrow/kfData.tpl');//载入tpl模板
	                  	   //初始化显示表格、搜索
	                  	   require.async(['../member_borrow/cfshowTable','../member_borrow/cfsearch'],function(showTable,search){
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
                  	$("#reason").val("");
                  	 $("#kfForm").attr("action",'/member_borrow/cf.html') ;
                  	  
                    })*/
                    $(".c_cf_re2").click(function(){  // 更换
                  	  $(".calculatorCpmBox3").show();
                  	  $(".calculatorCpmBottom").show();
                  	$("#reason").val("");
                  	  $("#kfForm").attr("action",'/member_borrow/changeCf.html') ;
                    })
                });
            });
    	}
    })
    //收益、余额等信息
    $.ajax({
      type:"post",
      url:"/member/investHandleMoney.html",
      dataType:"json",
      success:function(json){  	
    	  require.async('/plugins/echarts/echarts-all',function(){
    		  require.async('/plugins/echarts/chart/line',function(){
    			  // 使用柱状图就加载bar模块，按需加载
    	    	    // 基于准备好的dom，初始化echarts图表
    	          var myChart = echarts.init(document.getElementById('accountView')); 
    	          var option = {
    	                  tooltip: {
    	                      show: true
    	                  },
    	                  legend: {
    	                      data:['总额']
    	                  },
    	                  xAxis : [
    	                      {
    	                          type : 'category',
    	                          data : ["账户总额","可用总额","待收总额","冻结总额","充值总额","积分总额"]
    	                      }
    	                  ],
    	                  yAxis : [
    	                      {
    	                          type : 'value'
    	                      }
    	                  ],	
    	                  series : [
    	                      {
    	                          "name":"总额",
    	                          "type":"bar",
    	                          "data":json.object,
    	                          barWidth : 50//柱体宽度
    	                      },
    	                      
    	                  ],
    	                  color : ["#12ADFF"]
    	              };
    	            // 为echarts对象加载数据 
    	            myChart.setOption(option);
    		  });
    	  });
    	    
            
          require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
        	  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
              $(".account_home").html(Handlebars.compile(require("../../tpl/member/main_account.tpl"))(json));
              $(".sp1").click(function(){
        		  $.ajax({
        		      type:"post",
        		      url:"/member/user/userSignIn.html",
        		      dataType:"json",
        		      success:function(json){
        		    	  if(json.result){
        		    		  window.location.reload();
        		    	  }else{
        		    		  //alert("今天已签到，请明天再来");
        		    			$.alert("今天已签到，请明天再来","提示",function(){},true);
        		    	  }
        		      }
        		  })
            		
            });
              $(".y_con2_lis i").hover(function(){
      			$(this).parent().find(".y_tooltips").show();
      		},function(){
      			$(this).parent().find(".y_tooltips").hide();
      		});
              //提示效果
              require.async(['/plugins/poshytip/tip-yellowsimple/tip-yellowsimple.css','/plugins/poshytip/jquery.poshytip.min'],function(){
      	    	$('.textTips').poshytip({
      	    		className: 'tip-yellowsimple',
      	    		showTimeout: 1,
      	    		alignTo: 'target',
      					alignX: 'center',
      					alignY: 'top',
      					offsetY: 10,
      	    		allowTipHover:false
      	    	});
          	});
          });
          });
      }
   });
	/*详细信息
	alert($(".MemberCenter_con2_right").html());
	$(function(){
		$(".y_con2_lis i").hover(function(){
			alert(11);
			$(this).parent().find(".y_tooltips").show();
		},function(){
			$(this).parent().find(".y_tooltips").hide();
		})
	})
    */
    //关闭开能第三方账户条
    $(".close").click(function(){
    	$(".noAuthentication").hide();
    })
    
    //首页Tab标签
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
    
  /*  //可投借款
    $.ajax({
        url:'/member/investList.html?randomTime='+(new Date()).getTime(),
        type:'get',
        dataType:'json',
        success:function(json){
        	if(json.list.length){
        		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                    require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                        $("#main_invest").html(Handlebars.compile(require('../../tpl/member/main_invest.tpl'))(json));
                        require.async('/plugins/jquery.yomi/jquery.yomi',function(){
                    		$.invokeYomi();
                    	});
                    });
                });
        	}else{
        		$(".main_invest_list").html("<p class='noData'>暂无数据</p>");
        	}            
        }
    })
    
    //收款信息
     $.ajax({
        url:'/member/investCollectionList.html?randomTime='+(new Date()).getTime(),
        type:'get',
        dataType:'json',
        success:function(json){
        	if(json.data.length){
        		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                    require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                        $("#main_collection").html(Handlebars.compile(require('../../tpl/member/main_collection.tpl'))(json));
                    });
                });
        	}else{
        		$(".main_collection_list").html("<p class='noData'>暂无数据</p>");
        	}
        }
    });*/
    
  /*
   * 首页默认加载最近交易记录
   * 
   * **/
    var tpl = require('../../tpl/member/main_trade.tpl');//载入tpl模板
    require.async(['./investMainShowTable'],function(showTable){
		showTable.ajaxUrl('/member/investTransactionLog.html?randomTime='+(new Date()).getTime(),tpl);
		
		
	});
    //最近交易记录
    $("#recentTradingList").click(function(){
    	 var tpl = require('../../tpl/member/main_trade.tpl');//载入tpl模板
    	  require.async(['./investMainShowTable'],function(showTable){
    	  showTable.ajaxUrl('/member/investTransactionLog.html?randomTime='+(new Date()).getTime(),tpl);
    		});
    });
    //投资已收记录
    $("#investCollectedList").click(function(){
    	var tpl = require('../../tpl/member/mainCollectedList.tpl');//载入tpl模板
  	  require.async(['./investMainShowTable'],function(showTable){
  	  showTable.ajaxUrl('/member/invest/collectionList.html?time=-1&status=1&randomTime='+(new Date()).getTime(),tpl);
  		});
    	
    });
    //充值记录
    $("#rechargeList").click(function(){	
     var tpl = require('../../tpl/member/mainRechargeList.tpl');//载入tpl模板
   	  require.async(['./investMainShowTable'],function(showTable){
   	  showTable.ajaxUrl('/member/recharge/logList.html?randomTime='+(new Date()).getTime(),tpl);
   		});
    });
    
    //提现记录
    $("#cashList").click(function(){
    	var tpl = require('../../tpl/member/mainCashList.tpl');//载入tpl模板
     	  require.async(['./investMainShowTable'],function(showTable){
     	  showTable.ajaxUrl('/member/cash/logList.html?randomTime='+(new Date()).getTime(),tpl);
     		});
    });
    
    //积分明细
    $("#scoreList").click(function(){
    	var tpl = require('../../tpl/member/mainScoreList.tpl');//载入tpl模板
   	  require.async(['./investMainShowTable'],function(showTable){
   	  showTable.ajaxUrl('/member/score/scoreLogList.html?time=9&randomTime='+(new Date()).getTime(),tpl);
   		});
    	
    });
    	
  //购买债权
    $("#creditList").click(function(){
    	
      var tpl = require('../../tpl/member/mainCreditList.tpl');//载入tpl模板
   	  require.async(['./investMainShowTable'],function(showTable){
   	  showTable.ajaxUrl('/member/creditlog/creditLogList.html?randomTime='+(new Date()).getTime(),tpl);
   	  });
    	
    });
   
   /* //充值记录
    $.ajax({
        url:'/member_borrow/accountRechargeLog.html?randomTime='+(new Date()).getTime(),
        type:'get',
        dataType:'json',
        success:function(json){
        	if(json.accountRechargeLogList.length){
        		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                    require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                        $(".record_conss").html(Handlebars.compile(require('../../tpl/member/main_trade.tpl'))(json));
                    });
                });
        	}else{
        		$(".tradeLogTable_list").html("<p class='noData'>暂无数据</p>");
        	}
        }
    });*/
    
});
