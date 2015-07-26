define(function(require,exports,module){
  require('jquery');
  //异步请求标的数据
  $.ajax({
    type:"get",
    url:"/invest/borrowDetail.html"+window.location.search,
    dataType:"json",
    success:function(json){
      $("#loading_tip").slideUp();
      require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
          require.async("/plugins/handlebars-v1.3.0/transFormatJson",function(){
            $("#invest-main-box").html(Handlebars.compile(require("../../tpl/invest/stagesDetailnoLogin.tpl"))(json));
            
            $(".c_flow_step li").click(function(){
        		var index=$(this).index(".c_flow_step li");
        		$(this).addClass("c_flow_this").siblings().removeClass("c_flow_this");
        		$(".c_step_detail dd").eq(index).show().siblings().hide();
        	})
        	$(".c_risk_list li").click(function(){
        		var index=$(this).index(".c_risk_list li");
        		$(this).addClass("c_risk_this").siblings().removeClass("c_risk_this");
        		$(".c_risk_guarantee").eq(index).show().siblings().hide();
        	})
        	//JSDP-131 gjh 2015-5-22 start
        	if($(".c_fund_report").html()!=null){
        		$.ajax({
        			type:"get",
        			url:"/article/list.html?nid=riskMoney",
        			dataType:"json",
        			success:function(json){
	        			$(".c_fund_report").html(Handlebars.compile(require("../../tpl/invest/risk_guarantee.tpl"))(json));
	        			
	        			$(".c_fund_report dl dd").click(function(){
	        				var index=$(this).index(".c_fund_report dl dd");
	        				//alert(index);
	        				// 将原数据清除，避免重复
	        				$(".riskPic li").remove();
	        				
	        				$(".c_risk_bj").show();
	        				$(".c_report_detail").eq(index).show().siblings().hide();
	        				//alert($(this).parent().attr("data-id"));
	        				
	        				var dataId = $(this).attr("data-id");
	        				// 开始查询图片数据
	            				$.ajax({
	            					type : "post",
	            					url : "/article/riskDetailPic.html?id="+dataId,
	            					data : {
	            						id : dataId
	            					},
	            					// 请求成功后的回调函数有两个参数
	            					success : function(data) {
	            						var obj = eval(data);
	            						var adminurl = $("#adminurl").val();
	            						for(var i=0;i<obj.length;i++){
	            							//$(".riskPic").append("<li class='picdata' style='z-index:10'><img src='http://localhost:8081"+obj[i].picUrl+"' title='"+obj[i].title+"'></li>");
	            							$(".riskPic").append("<li class='picdata' style='z-index:10'><img src='"+adminurl+obj[i].picUrl+"' title='"+obj[i].title+"'></li>");
	            							
	            							// 如果仅一张图片，则不显示左右方向
	            							if(obj.length <= 1){
	            								$(".c_risk_left").hide();
	            								$(".c_risk_right").hide();
	            							}else{
	            								$(".c_risk_left").show();
	            								$(".c_risk_right").show();
	            							}
	            							
	            							// 备注：每条风险保证金至少有一张图片
	            						}
	            						
	            					}
	            				});
	        			})
	        		}
        		});
        	}
            //JSDP-131 gjh 2015-5-22 start
        	//2015.4.7
        	//table 奇偶数行颜色
        	var line=$(".c_cliam_tender table tr");
        	for (var i=0; i<line.length; i++){
        	   line[i].style.background=(i%2==1) ? "#e1e4e9" : "#FFFFFF"; 
        	}
        	//资金托管弹窗
        	$(window).resize(function(){
        		$(".c_risk_bj").height($("body").height());
        		$(".c_report_detail").css({left:($(window).width()-$(".c_report_detail").outerWidth())/2+"px",top:($(window).height()-$(".c_report_detail").outerHeight())/2+"px"});
        	})
        	$(window).resize();
        	$(".c_risk_close").click(function(){
        		$(".c_risk_bj").hide();
        		$(".c_report_detail").hide();
        	})
        	$(".c_fund_report dd").click(function(){
        		var index=$(this).index(".c_fund_report dd");
        		$(".c_risk_bj").show();
        		$(".c_report_detail").eq(index).show().siblings().hide();
        	})
        	//托管报告左右滑动
        	$(".c_risk_right").click(function(){
        		var c_pop_list=$(this).siblings("ul");
        		if (!(c_pop_list.is(":animated"))) {
        			if(c_pop_list.position().left<=-(c_pop_list.find("li").outerWidth())*(c_pop_list.find("li").length-1)){
        			}else{
        				c_pop_list.animate({left:c_pop_list.position().left-(c_pop_list.find("li").outerWidth())+"px"},600);
        			}
        		}
        	})
        	$(".c_risk_left").click(function(){
        		var c_pop_list=$(this).siblings("ul");
        		if (!(c_pop_list.is(":animated"))) {
        			if(c_pop_list.position().left>=0){
        			}else{
        				c_pop_list.animate({left:c_pop_list.position().left+(c_pop_list.find("li").outerWidth())+"px"},600);
        			}
        		}
        	})
        	
            //解决IE下不支持placeholder
        	require.async('common1',function(){
        		if($.browser.msie) { 
        			$(":input[placeholder]").each(function(){
        				$(this).placeholder({posL: 15});
        			});
        		}
        	});
        	
        	function refreshPrize(id,type_val){
        		var box = $(id);
        		var ruleId = json.ruleAward.id;
        		var ruleUrl = "";
        		if(type_val ==1 )
        		{
        			ruleUrl = "/scoreAward/getAwardList.html?id="+ruleId+"&randID="+ escape(new Date());
        		}
        		else if(type_val ==2 ){
        			ruleUrl = "/scoreAward/getAwardList.html?id="+ruleId+"&randID="+ escape(new Date())+"&level=level";
        		}
        		else if(type_val ==3 ){
        			ruleUrl = "/scoreAward/getMyAwardList.html?id="+ruleId+"&randID="+ escape(new Date());
        		}
        		var str="";
        		$.ajax({
        			url:ruleUrl,
        			error:function(){
        				
        			},
        			success:function(data){
        				var prize = data.data;
        				var len = prize.length;
        				var newDate = new Date();
        				for( var i = 0 ; i<len ; i++)
        				{
        					var date = prize[i].time.split("&")[0];
        					var time = prize[i].time.split("&")[1];
        					str+="<li id='test"+i+"'><dl><dd><p>"+date+"</p><p class='pmiaos'>"+time+"</p></dd><dd>"+prize[i].userName+ "</dd><dd class='blue-lidds'>"+prize[i].award+"</dd></dl></li>";						
        				}
        				box.html(str);
        				var num = 0;
        				// ul1 li的克隆实现无缝轮转   左侧轮转
        				// 轮转函数  左侧轮转
        				function move() {
        					num = num - 55;
        					if (num > -($(".y_details_con2right .y_details_con2rightscroll ul li").length-10)*55) {
        						//Topss++;
        						//$(".y_details_con2rightscroll ul li").css({display:"none"});
        						//box.find("li").eq(0).css({display:"blak"});
        						//$(li).addClass('selected').siblings().removeClass('selected');
        						//$("#test0").attr({style:"display:none;"});
        						//li.animate({marginLeft:300,opacity:0},1000);
        						//$(".y_details_con2rightscroll ul li").animate({left:300,opacity:0},500);
        						$(".y_details_con2right .y_details_con2rightscroll ul").animate({
        							marginTop: num
        						}, 1000);
        					} else {
        				     $(".y_details_con2right .y_details_con2rightscroll ul").animate({
        				         marginTop: num
        				     }, 1000, function() {
        				         num = 0;
        				         $(".y_details_con2right .y_details_con2rightscroll ul").css({
        				             marginTop: 0
        				        	});
        				    	});
        				 	}
        				};
        				var st=setInterval(move,3000);
        			}	
        		})	
        		
        	}	
        	//JSDBET-799 wcw 2015-3-9 start
        	if(json.ruleAward != undefined){
        		refreshPrize($(".y_details_con2right .y_details_con2rightscroll ul"),1);
        	}
        	//JSDBET-799 wcw 2015-3-9 end
        	
        	if(json.goodsPic != null){
        		$(".y_parlex_top").find("img").attr({src:json.url + json.goodsPic});
        	}
        	//最新广告条的读取
        	$.ajax({
        		url:"/index/newestAd.html?nid=borrowAd",
        		type:"post",
        		success:function(result){
        			if(result.data.length!=0){
        				 var imageUrl = result.data[0].picPath;
        				 $(".y_details_con2right").find("img").before("<a target='_blank' href='" + result.data[0].content + "'><img style='margin-top:22px;' width='280' src='"+ imageUrl +"'/></a>") ;
        			}
        	    },
        		error:function(){
        			location.reload();
        		}
        	
        	});
        	//协议弹窗
        	$(".protocolPreview").click(function(){
        		require.async("/plugins/layer-v1.8.4/layer.min",function(){
        			$.layer({
        			    type: 2,
        			    shade: [0],
        			    title : "协议预览",
        			    border : [10 , 0.3 , '#000', true],
        			    iframe: {src : 'iframe.html'},
        			    area: ['1000px' , '500px'],
        			    iframe: {src: '/invest/protocolPreview.html?id='+$("#bid_id").val()}
        			}); 
        		})
        	});
        	// 图片放大
        	$(".y_parlex_top").hover(function(){
				$(this).find("img").stop();
				$(this).find("img").animate({width:"120%",height:"120%",left:"-10%",top:"-10%"},600);
			},function(){
				$(this).find("img").stop();
				$(this).find("img").animate({width:"100%",height:"100%",left:"0",top:"0"},600);
			});
        	// end
        	var  lowestAccount = json.borrow.lowestAccount;
        	var  mostAccount = json.borrow.account - json.borrow.accountYes;
			
    		$(".y_detailsinputs").keyup(function(){
    			
    			if(parseInt($(".y_detailsinputs").val())<lowestAccount||($(".y_detailsinputs").val()=="")){
    				$(".reminderss").show().html("最低投资金额"+lowestAccount+"元");
    			}else if(parseInt($(".y_detailsinputs").val())>mostAccount||($(".y_detailsinputs").val()=="")){
    				if(mostAccount != 0){
    					$(".reminderss").show().html("最高投资金额"+mostAccount+"元");
    				}
    				
    			}else if(parseInt($(".y_detailsinputs").val())%1!=0){
    				$(".reminderss").show().html("投资金额必须为1的整数倍");
    			}else{
    				$(".reminderss").hide().html("");
    			}
    		})
    		//增加按钮+1元
    		$(".y_pluss").click(function(){
    			if (parseInt($(".y_detailsinputs").val())<mostAccount) {
    				$(".y_detailsinputs").val(parseInt($(".y_detailsinputs").val())+1);
    		    }
    			if(mostAccount != 0){
    				if (parseInt($(".y_detailsinputs").val())==mostAccount){
        				$(".reminderss").show().html("最高投资金额"+mostAccount+"元");
        			}
				}
    			
    		})
    		$(".y_subtracts").click(function(){
    			if (parseInt($(".y_detailsinputs").val())>lowestAccount) {
    				$(".y_detailsinputs").val(parseInt($(".y_detailsinputs").val())-1);
    			};
    			if (parseInt($(".y_detailsinputs").val())==lowestAccount) {
    				$(".reminderss").show().html("最低投资金额"+lowestAccount+"元");
    			};
    			
    			
    		})
    		$(".y_detailsinputs").blur(function(){
    			if($(".y_detailsinputs").val()==""){
    				$(".reminderss").show().html("最低投资金额"+lowestAccount+"元");
    			}else if($(".reminderss").css("display")=="none"){
    				$(".reminderss").hide().html("");
    			}
    		})
    		$(".y_details_con2leftTitle li").click(function(){
    					 var index=$(this).index(".y_details_con2leftTitle li");
    			$(".y_details_con2leftTitle li").removeClass("y_details_clicksli");
    			$(this).addClass("y_details_clicksli");
    			$(".y_detailscon2leftcon").css("display","none");
    			$($(".y_detailscon2leftcon")[index]).css("display","block");
    		})
    		$(".fengdetail").click(function(){
        		var len = $(".y_details_con2leftTitle li").length-3 ;
        		$(".y_details_con2leftTitle li").removeClass("y_details_clicksli") ;
        		$(".y_details_con2leftTitle li").eq(len).addClass("y_details_clicksli") ;
        		$(".y_detailscon2leftcon").hide();
        		$(".y_detailscon2leftcon").eq(len).show();
        	}) ;
    		$(".y_informationDetailsul li").click(function(){
    			$(".y_informationDetailsul li").removeClass("informationliclick");
    			$(this).addClass("informationliclick");
    		})
    		$(".y_assessmentdls dd .hintems").hover(function(){
    			$(this).parent(".y_assessmentdlstitle").parent("dd").find(".y_tooltips").show();
    		},function(){
    			$(this).parent(".y_assessmentdlstitle").parent("dd").find(".y_tooltips").hide();
    		})
    		
    		$(".y_details_con1leftul2 li .hintems").hover(function(){
    			$(this).parent("li").find(".y_tooltips").show();
    		},function(){
    			$(this).parent("li").find(".y_tooltips").hide();
    		})
    		
    		//倒计时处理
			var interval = 1000; 
			window.setInterval(function(){
				//var s = $(".y_countDownNew") ;
				for(var i=0 ;i<20;i++){
					var nowDate = new Date();
					var endDate = (json.endDate - nowDate);
		    		if(endDate>=0){
						var leftsecond = parseInt(endDate/1000); 
						//var day1=parseInt(leftsecond/(24*60*60*6)); 
						var day1=Math.floor(leftsecond/(60*60*24)); 
						var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
						var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
						var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
						//var cc = document.getElementsByClassName(divname); 
						//cc.innerHTML=hour+"小时"+minute+"分"+second+"秒"; 
						$(".y_details_con1leftul2 .y_tooltips").html("剩余："+day1+"天"+hour+"小时"+minute+"分"+second+"秒" + "<i></i>");
						if(hour==0 && minute==0 && second==0){
							//$(divname).eq(i).parent().hide();
							//$(divname).eq(i).parent().next().show();
						}
					}
				}
			}, interval) ;
    		
    		//  标进度那个圈圈特效
    		require.async("jquery.circliful.min",function(){
    			$('.myStat4').circliful();
    			$('#banner').flexslider({
    				animation: "slide",
    				direction:"horizontal",
    				easing:"swing"
    			});
    		});
          //投标记录分页显示
          if(json.data.page.pages > 0)
          {
        	  require.async(['/plugins/pager/tenderpager.css','/plugins/pager/tenderpager'],function(){
             tenderkkpager.generPageHtml({
            	  pagerid : 'tenderkkpager', //divID
                  pno : json.data.page.currentPage,//当前页码
                  total : json.data.page.pages,//总页码
                  totalRecords : json.data.page.total,//总数据条数
                  isShowFirstPageBtn  : false, 
                  isShowLastPageBtn : false, 
                  isShowTotalPage   : false, 
                  isShowTotalRecords  : false, 
                  isGoPage      : false,
                  lang:{
                    prePageText       : '上一页',
                    nextPageText      : '下一页'
                  },
                  mode:'click',
                  click:function(n){
                        $.ajax({
                          type:"get",
                          url:"/invest/detailTenderForJson.html?page="+n+"&id="+$("#bid_id").val(),
                          dataType:"json",
                          success:function(json){
                              $('.investRecord').html(Handlebars.compile(require("../../tpl/invest/invest_record.tpl"))(json));
                              var num = 0;
                              $(".order").each(function(){
                                num = num+1;
                                $(this).html((n-1)*10+num);
                              })
                          }
                        });
                    this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
                  }
              });
            });
          }
          if(json.repment.page.pages > 0) {
	            require.async(['/plugins/pager/creditpager.css','/plugins/pager/pager'],function(){
	            	kkpager.generPageHtml({
	            	  pagerid : 'repaymentkkpager', //divID
	                  pno : json.repment.page.currentPage,//当前页码
	                  total : json.repment.page.pages,//总页码
	                  totalRecords : json.repment.page.total,//总数据条数
	                  isShowFirstPageBtn  : false, 
	                  isShowLastPageBtn : false, 
	                  isShowTotalPage   : false, 
	                  isShowTotalRecords  : false, 
	                  isGoPage      : false,
	                  lang:{
	                    prePageText       : '上一页',
	                    nextPageText      : '下一页'
	                  },
	                  mode:'click',
	                  click:function(n){
                      $.ajax({
                        type:"get",
                        url:"/invest/detailRepayForJson.html?page="+n+"&id="+$("#bid_id").val(),
                        dataType:"json",
                        success:function(json){
                            $('.invet_repayment').html(Handlebars.compile(require("../../tpl/invest/invest_repayment.tpl"))(json));
                            var num = 0;
                            $(".order").each(function(){
                              num = num+1;
                              $(this).html((n-1)*10+num);
                            })
                        }
                      });
	                    this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
	                  }
	              });
	            });
	          }
          })
      })
    }
  });
});

          
