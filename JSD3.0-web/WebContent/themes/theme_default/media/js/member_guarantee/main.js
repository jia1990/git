define(function(require,exports,module){
    require('jquery');
    //用户基本信息
    $.ajax({
        type:"post",
        url:"/member/investIdentify.html",
        dataType:"json",
        success:function(json){
        	require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
                require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                	$(".MemberCenter_con1in").append(Handlebars.compile(require("../../tpl/member_guarantee/main_info.tpl"))(json));
                	 $(function(){
               	    	var path = $("#webpath").val();
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
                	 })
                });
            });
        }
    });

    //担保信息
    $.ajax({
        type:"post",
        url:"/member_guarantee/getGuaranteeProject.html",
        dataType:"json",
        success:function(json){
            require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
                require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                	$(".memberData").html(Handlebars.compile(require("../../tpl/member_guarantee/main_guarantee_account.tpl"))(json));
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
                   /* $(".c_cf_re1").click(function(){  // 投诉
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
    
    //选项卡
	/*require.async('common1',function(){
		$(".account_home_con").tabChange({
			isClick:true,
            isHover:false,
			childLi:"ul li",//tab选项卡
			childContent:".con",//tab内容
			hoverClassName:"hover",//选中当前选项卡的样式
			callBack:false	
		});
	});*/
	/* require.async('common1',function(){
			$(".account_home_con").tabChange({
				isClick:true,
		        isHover:false,
				childLi:"ul li",//tab选项卡
				childContent:".con",//tab内容
				hoverClassName:"hover",//选中当前选项卡的样式
				callBack:false	
			});
		  });*/
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
	
	  //担保项目======
	  $.ajax({
			url:'/member_guarantee/guarantee/guaranteeList.html',
			type:'get',
			dataType:'json',
			success:function(json){
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
		            require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
		            	/*$($(".record_conssin_num")[0]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_guarantee.tpl'))(json));
		            	if(!json.businessBidList.length){
			   				$("#borrowmore").hide();
			   				$($(".record_conssin_num")[0]).append("<p class='y_no_nums' style='margin: 60px 420px 0;'></p>");
			   			}*/
		            	//$("#dataList").html(Handlebars.compile(require('../../tpl/member_guarantee/main_guarantee.tpl'))(json));
		            	
		            	$($(".record_conssin_num")[0]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_guarantee.tpl'))(json));
	                	
		            	/*if(!json.data.length){
		            		alert(json.data.length);
		            		$($(".record_conssin_num")[0]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_guarantee.tpl'))(json));
		                	 
	  	            	}else{
	  		   				$($(".record_conssin_num")[0]).html("<p class='noData' style='padding-top:100px;'><img src='/themes/theme_default/images/no_data.png'/></p>");
	  		            }*/
		            });
		        });
			}
	    });
	  //催收项目=====
	  //$(".c_recent_record2").click(function(){
		$(".c_record li:eq(1)").one("click",function(){
	       $.ajax({
	          url:'/member_guarantee/collection/collectionListJSON.html',
	          type:'get',
	          dataType:'json',
	          success:function(json){
	        	  require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
	                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
	                     /* $($(".record_conssin_num")[1]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
	                      if(!json.businessRepaymentList.length){
	                   		 $("#repaymentmore").hide();
	                   		 $($(".record_conssin_num")[1]).append("<p class='y_no_nums' style='margin: 60px 420px 0;'></p>");
	                   	}*/
	                	 /* alert(json.collectionDataList.list.length);*/
	                	  //$("#dataList").html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
	                	  
	                	  $($(".record_conssin_num")[1]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
	                  /*
	                	  if(!json.data.length){
			            		$($(".record_conssin_num")[1]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
				               
	                	  }else{
		  		   				$($(".record_conssin_num")[1]).html("<p class='noData' style='padding-top:100px;'><img src='/themes/theme_default/images/no_data.png'/></p>");
	                	  }
	                  
	                  */
	                  });
	              });
	          }
	       })
	      });
	  //逾期项目======
	  $(".c_record li:eq(2)").one("click",function(){
	      $.ajax({
	          url:'/member_guarantee/overdue/getOverdueGuaranteeList.html',
	          type:'get',
	          dataType:'json',
	          success:function(json){
	        	  require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
	                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
	                	 /* $($(".record_conssin_num")[2]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_overdue.tpl'))(json));
	                	  if(!json.accountLogList.length){
	                		  $("#tendermore").hide();
	                		  $($(".record_conssin_num")[2]).append("<p class='y_no_nums' style='margin: 60px 420px 0;'></p>");
	                      }*/
	                	  //$("#dataList").html("");
	                	  //$("#dataList").html(Handlebars.compile(require('../../tpl/member_guarantee/main_overdue.tpl'))(json));
	                	  
	                	  $($(".record_conssin_num")[2]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_overdue.tpl'))(json));
	                  /*
	                	  if(!json.data.length){
	                		  	$($(".record_conssin_num")[2]).html(Handlebars.compile(require('../../tpl/member_guarantee/main_overdue.tpl'))(json));
	    	                  
	                	  }else{
		  		   				$($(".record_conssin_num")[2]).html("<ul><li class='record_conss_title'><dl><dd style='width:150px;'>发布时间</dd><dd style='width:150px;'>借款标题</dd><dd style='width:150px;'>类型</dd><dd style='width:120px;'>金额</dd><dd style='width:120px;'>年利率</dd><dd style='width:120px;'>期限</dd><dd style='width:120px;'>状态</dd></dl></li></ul><p class='noData' style='padding-top:100px;'><img src='/themes/theme_default/images/no_data.png'/></p>");
	                	  }
	                  */
	                  
	                  
	                  });
	              });
	          }
	      }) ;
	  });
	
	
	
	
	
	
	
	
	
    
    //待登记项目
   /* $.ajax({
        url:'/member_guarantee/getNeedGuaranteeRegisterList.html',
        type:'get',
        dataType:'json',
        success:function(json){
        	if(json.data.length){
        		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                    require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                        $("#main_registration").html(Handlebars.compile(require('../../tpl/member_guarantee/main_registration.tpl'))(json));
                    });
                });
        	}else{
        		$(".main_registration_list").html("<p class='noData'>暂无数据</p>");
        	}
        }
    });*/
    
    //催收项目
   /* $.ajax({
            url:'/member_guarantee/collection/collectionListJSON.html?size=4',
            type:'get',
            dataType:'json',
            success:function(json){
            	if(json.data.list.length){
            		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                        require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                            $(".main_collection").html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
                        });
                    });
            	}else{
            		$(".main_collection_list").html("<p class='noData'>暂无数据</p>");
            	}
            }
    });
    */
    /*$(".guaranteeReg").live("click",function(){
    	var idVal = $(this).attr("data-id");
    	window.open("/member_guarantee/registerGuarantee.html?borrowId="+idVal);
		require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
			//构造确认框DOM
			$.layer({
			    type: 1,
			    closeBtn: false,
			    title: false,
			    area: ['460px', '240px'],
			    shade: [0.5, '#000'],
			    border: [10, 0.3, '#000'],
			    page: {
			        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">登记提示</h1><span class="float_right cancleBtn">X</span></div><div class="fileconfirm_msg"><p>您即将跳往登记操作，登记完成前，请不要关闭本窗口。登记完成后，请根据您的登记结果点击下面按钮。</p></div><div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">登记成功</a><a href="javascript:;" class="cancleBtn okBtn">登记失败</a></div></div>'
			    }
			});	
			//确认操作
			$(".okBtn").click(function(){
				window.location.reload();	
			});
			//删除操作
			$(".cancleBtn").click(function(){
				layer.closeAll();
			});
		});
		
	});*/
    
    //担保项目
	/*$.ajax({
        url:'/member_guarantee/guarantee/guaranteeListJSON.html',
        type:'get',
        dataType:'json',
        success:function(json){
        	if(json.data.list.length){
        		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
                    require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                        $(".main_collection").html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
                    });
                });
        	}else{
        		$(".main_collection_list").html("<p class='noData'>暂无数据</p>");
        	}
        }
    });*/
	//催收项目
	/*$.ajax({
		url:'/member_guarantee/collection/collectionListJSON.html',
		type:'get',
		dataType:'json',
		success:function(json){
			if(json.data.list.length){
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						$(".record_conssin_num1").html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
					});
				});
			}else{
				$(".record_conssin_num1").html("<p class='noData' style='padding-top:100px;'><img src='/themes/theme_default/images/no_data.png'/></p>");
			}
		}
	});
	*/
	//逾期项目
	/*$.ajax({
		url:'/member_guarantee/overdue/getOverdueGuaranteeList.html',
		type:'get',
		dataType:'json',
		success:function(json){
			if(json.data.list.length){
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						$(".record_").html(Handlebars.compile(require('../../tpl/member_guarantee/main_collection.tpl'))(json));
					});
				});
			}else{
				$(".main_collection_list").html("<p class='noData'>暂无数据</p>");
			}
		}
	});*/
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
    $(window).resize(function() {
		$(".calculatorCpmBox4").css({left:($(window).width()-1000)/2+"px",top:($(window).height()-760)/2+"px"});
		$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
});
$(window).resize();
$(".calculatorCpmBox4 h1 img").click(function(){
	$(".calculatorCpmBox4").hide();
	$(".calculatorCpmBottom").hide();
})

	

});

