define(function(require,exports,modlue){
	require('jquery');
	//alert((($(window).width()-1000)/2)+"px");
	var typeVal = $("#typeVal").val();  // 宝宝类型 
	var statusVal = $("#status li.y_RinseChoose_conClick").attr("data-val");  // 标状态
	var timeSearchVal = $("#timeSearch li.y_RinseChoose_conClick").attr("data-val"); //  标期限
	var aprSearchVal = $("#aprSearch li.y_RinseChoose_conClick").attr("data-val"); //  利率
	var styleVal = $("#style li.y_RinseChoose_conClick").attr("data-val") ;
	
	var loading = "type="+typeVal+"&aprSearch="+aprSearchVal+"&timeSearch="+timeSearchVal+"&status="+statusVal+"&style="+styleVal;
	ajaxUrl(loading);//初始化调用

	//利率搜索
	$("#aprSearch li").click(function(){
		var param = "type="+$("#typeVal").val()+"&aprSearch="+$(this).data("val")+"&timeSearch="+$("#timeSearch li.y_RinseChoose_conClick").data("val")+"&status="+$("#status li.y_RinseChoose_conClick").attr("data-val")+"&style="+$("#style li.y_RinseChoose_conClick").attr("data-val");
		ajaxUrl(param);
	});
	
	//期限搜索
	$("#timeSearch li").click(function(){
		var param = "type="+$("#typeVal").val()+"&aprSearch="+$("#aprSearch li.y_RinseChoose_conClick").data("val")+"&timeSearch="+$(this).data("val")+"&status="+$("#status li.y_RinseChoose_conClick").attr("data-val")+"&style="+$("#style li.y_RinseChoose_conClick").attr("data-val");
		ajaxUrl(param);
	});
	
	//状态搜索
	$("#status li").click(function(){
		var param = "type="+$("#typeVal").val()+"&aprSearch="+$("#aprSearch li.y_RinseChoose_conClick").data("val")+"&timeSearch="+$("#timeSearch li.y_RinseChoose_conClick").data("val")+"&status="+$(this).attr("data-val")+"&style="+$("#style li.y_RinseChoose_conClick").attr("data-val");
		ajaxUrl(param);
	});
	//还款方式搜索
	$("#style li").click(function(){
		var param = "type="+$("#typeVal").val()+"&aprSearch="+$("#aprSearch li.y_RinseChoose_conClick").data("val")+"&timeSearch="+$("#timeSearch li.y_RinseChoose_conClick").data("val")+"&status="+$("#status li.y_RinseChoose_conClick").attr("data-val")+"&style="+$(this).attr("data-val");
		ajaxUrl(param);
	});

	//通用显示函数
	function ajaxUrl(param){
		$.ajax({
		type:'get',
		url:'/invest/investJson.html?'+param+'&randomTime='+(new Date()).getTime(),
		dataType:'json',
		success:function(json){
			//分页插件
			if(json.data.page.pages > 0) {	
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						var tpl = require('../../tpl/energyList.tpl');
						var template = Handlebars.compile(tpl);
						var html = template(json);
						$('.y_parlex_projects').html(html);
						
					    for(i=0;i<=$(".y_parlex_project dd").length;i++){
					        if((i+1)%4==0){
					            $($(".y_parlex_project dd")[i]).css({marginRight:"0"});
					        }
					        if(i%4==0){
					            $($(".y_parlex_project dd")[i]).css({marginLeft:"0px"});
					        }
					    }
					    
					    //设置标的图标样式
					    if(typeVal == 113){
					    	$(".y_parlex_top h3 .hoversc").css({"background":"url(/themes/theme_default/images/index/bao.png) no-repeat"});
					    }else if(typeVal == 103){
					    	$(".y_parlex_top h3 .hoversc").css({"background":"url(/themes/theme_default/images/index/ya.png) no-repeat"});
					    }
					    
						//倒计时处理
						var interval = 1000; 
						window.setInterval(function(){
							var s = $(".y_countDownNew") ;
							for(var i=0 ;i<s.length;i++){
								var fixedTime = s.eq(i).attr("data") ;
								fixedTime = fixedTime.replace(/-/g,"/");
								var divname = ".y_countDownNew" ;
								var endDate= new Date(fixedTime);
								
								var now = new Date(); 
								var leftTime= endDate.getTime()-now.getTime();
								
								if(leftTime>=0){
									var leftsecond = parseInt(leftTime/1000); 
									//var day1=parseInt(leftsecond/(24*60*60*6)); 
									var day1=Math.floor(leftsecond/(60*60*24)); 
									var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
									var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
									var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
									//var cc = document.getElementsByClassName(divname); 
									//cc.innerHTML=hour+"小时"+minute+"分"+second+"秒"; 
									$(divname).eq(i).html(day1+"天"+hour+"小时"+minute+"分"+second+"秒");
									if(hour==0 && minute==0 && second==0){
										$(divname).eq(i).parent().hide();
										$(divname).eq(i).parent().next().show();
									}
								}else{
									$(divname).eq(i).parent().hide();
									$(divname).eq(i).parent().next().show();
								}
							}
						}, interval) ;
					});
				});
				require.async(['/plugins/pager/mypager.css','/plugins/pager/pager'],function(){
					kkpager.generPageHtml({
							pno : json.data.page.currentPage,//当前页码
							total : json.data.page.pages,//总页码
							totalRecords : json.data.page.total,//总数据条数
							isShowFirstPageBtn	: false, 
							isShowLastPageBtn	: false, 
							isShowTotalPage 	: false, 
							isShowTotalRecords 	: false, 
							isGoPage 			: false,	
							mode:'click',//click模式匹配getHref 和 click
							click:function(n,total,totalRecords){
					        	$.ajax({
					        		type:"get",
					        		url:"/invest/investJson.html?"+param+"&randomTime="+ (new Date()).getTime()+"&page="+n,
					        		dataType:"json",//这个必不可少，如果缺少，导致传回来的不是json格式
					        		success:function(json){
					        			require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
											var tpl = require('../../tpl/energyList.tpl');
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$('.y_parlex_projects').html(html);
										    for(i=0;i<=$(".y_parlex_project dd").length;i++){
										        if(i%4==0){
										            $($(".y_parlex_project dd")[i]).css({marginLeft:"0"});
										        }
										    }
											// 倒计时处理
											var interval = 1000; 
											window.setInterval(function(){
												var s = $(".y_countDown") ;
												for(var i=0 ;i<s.length;i++){
													var fixedTime = s.eq(i).attr("data") ;
													fixedTime = fixedTime.replace(/-/g,"/");
													var divname = ".y_countDown" ;
													var d = new Date(fixedTime);
													var now = new Date(); 
													var endDate = new Date(year, month-1, day,hour,minute,second); 
													var leftTime=endDate.getTime()-now.getTime(); 
													if(leftTime>=0){
														var leftsecond = parseInt(leftTime/1000); 
														//var day1=parseInt(leftsecond/(24*60*60*6)); 
														var day1=Math.floor(leftsecond/(60*60*24)); 
														var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
														var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
														var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
														//var cc = document.getElementsByClassName(divname); 
														//cc.innerHTML=hour+"小时"+minute+"分"+second+"秒"; 
														$(divname).eq(i).html(hour+"小时"+minute+"分"+second+"秒");
														if(hour==0 && minute==0 && second==0){
															$(divname).eq(i).parent().hide();
															$(divname).eq(i).parent().next().show();
														}
													}else{
														$(divname).eq(i).parent().hide();
														$(divname).eq(i).parent().next().show();
													}
												}
											}, interval) ;
										});
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
						});
					});
				}else{
					$('.y_parlex_projects').html("<div class='c_nodata'></div>");
					$("#kkpager").html('');
				}
			}
		})	
	}
	
	$(function(){
		$(window).resize(function() {
  			$(".calculatorCpmBox").css({left:($(window).width()-852)/2+"px",top:($(window).height()-444)/2+"px"});
  			$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
		});
		$(window).resize();
		$(".calculatorCpmBox h1 img").click(function(){
			$(".calculatorCpmBox").hide();
			$(".calculatorCpmBottom").hide();
		})
		$(".y_calculatorbutton").click(function(){
			$(".calculatorCpmBox").show();
			$(".calculatorCpmBottom").show();
		})
	})
	// store
	 $(function(){
	    $(".y_RinseChoose_con ul li").click(function(){
	        $(this).parent("ul").find("li").removeClass("y_RinseChoose_conClick");
	        $(this).addClass("y_RinseChoose_conClick");
	    })
	       for(i=0;i<$(".y_RinseChoose_con").length;i++){
	        if(i>2){
	            $($(".y_RinseChoose_con")[i]).addClass("y_rinse_hides");
	        }
	    }
	    $(".y_arrows").toggle(function(){
		    $(this).addClass("y_up");
		    $(".y_rinse_hides").slideToggle();
		},
		 function () {
		    $(this).removeClass("y_up");
		    $(".y_rinse_hides").slideToggle();
		    }
		);
	    for(i=0;i<=$(".c_parlex_projects dd").length;i++){
	        if(i%3==0){
	            $($(".c_parlex_projects dd")[i]).css({marginLeft:"0"});
	        }
	    }
	    for(i=0;i<=$(".y_parlex_project dd").length;i++){
	    	if(i%4==0){
	    		$($(".y_parlex_project dd")[i]).css({marginLeft:"0"});
	    	}
	    }
	    $(".y_PageNums").width(($(".y_PageNums li").length-2)*39+79*2+"px");
	    $(".y_PageNums li.y_linums").click(function(){
	        $(".y_PageNums li.y_linums").removeClass("y_PageNumsclick");
	        $(this).addClass("y_PageNumsclick");
	    })
	 })
// store  end
});