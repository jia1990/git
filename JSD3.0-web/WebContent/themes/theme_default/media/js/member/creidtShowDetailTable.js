define(function(require,exports,module){
	require('jquery');
	require('alert');
	//分页显示函数ajaxUrl(param,tpl)
	//param:请求参数
	//tpl:语义模板
	var ajaxUrl = function (param,tpl,classname){
		$.ajax({
		type:'get',
		url:param,
		dataType:'json',
		success:function(json){
			//分页插件
			if(json.data.page.pages > 0)
			{
				//异步加载数据
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						var template = Handlebars.compile(tpl);
						var html = template(json);
						$("."+classname).html(html);
						//table 奇偶数行颜色
						var line=$(".c_cliam_tender table tr");
						for (var i=0; i<line.length; i++){
						   line[i].style.background=(i%2==1) ? "#e1e4e9" : "#FFFFFF"; 
						}
						$(".c_cliamBT4").click(function(){
							$(".c_buy_bj").hide();
							$(".c_buy_success").hide();
						})
						$(".revocationddrevocation").click(function(){
							$(".c_cliamBT1").attr("data-val",$(this).data("val")) ;
							$(".c_buy_bj").show();
							$(".c_buy_revocationing").show();
						})
						//JSDP-35 gjh 2015-4-30 start
						$(".revocationddrevocation1").click(function(){
							$(".c_cliamBT11").attr("data-val",$(this).data("val")) ;
							$(".c_buy_bj").show();
							$(".c_buy_revocationing1").show();
						})
						//JSDP-35 gjh 2015-4-30 end
						$(".c_cliamBT1").click(function(){
							var id = $(this).data("val");
							$.ajax({
								type:"post",
								url:"/member/credit/reCall.html?id="+id + "&type=" + 1 ,
								dataType:"json",
								success:function(json){
									if(json.result){
										$(".c_buy_revocation").show();
										$(".c_buy_revocationing").hide();
									}
								}
							});
						}) ;
						//JSDP-35 gjh 2015-4-30 start
						$(".c_cliamBT11").click(function(){
							var id = $(this).data("val");
							var resultFlag = $("#resultFlag").val();
							$.ajax({
								type:"post",
								url:"/member/credit/reCall.html?id="+id + "&type=" + 2 + "&resultFlag=" + resultFlag,
								dataType:"json",
								success:function(json){
								if(json.result){
									/*$.alert("<div style='margin:0 100px;'>" +
											"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
											"&nbsp;正在处理请稍候</div>","提示",function(){},true);*/
									$(".c_buy_revocation").show();
									//$(".c_buy_bj").hide();
									$(".c_buy_revocationing1").hide();
									/*var flag = false;
	    							var time = 0;
	    							var t=setInterval(function () {
	    								if(flag == false){
	    									flag = returnResult();
	    								}
	    								time = time + 1;
	    								if(time == 30){
	    									window.location.reload();
	    								}
	    							},1000)*/
								}
							}
							});
						}) ;
						//JSDP-35 gjh 2015-4-30 end
						$(".c_cliamBT2").click(function(){
							$(".c_buy_revocation").hide();
							$(".c_buy_bj").hide();
							window.location.reload();
						}) ;
						$(".revocationddAssignment").click(function(){
							var id = $(this).parent().find(".creid").html() ;
							var type = $(this).next().val() ;
							var collectionId =  $(this).next().next().val() ;
							$.ajax({
								type:"post",
								url:"/member/credit/sellApply.html?id="+id+"&type="+type+"&collectionId="+collectionId,
								dataType:"json",
								success:function(json){
									require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
							            require.async('/plugins/handlebars-v1.3.0/transFormatJsonCredit',function(){
										$(".c_cofirm_buy").html(Handlebars.compile(require("../../tpl/member/credit_detail.tpl"))(json));
										rel(json);
										$(window).resize(function(){
											$(".c_cofirm_buy").css({left:($(window).width()-$(".c_cofirm_buy").width())/2+"px",top:($(window).height()-$(".c_cofirm_buy").outerHeight())/2+"px"});
											$(".c_buy_success").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
											$(".c_buy_revocation").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
											$(".c_buy_revocationing").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
										})
										//table 奇偶数行颜色
										var line = $(".c_cliam_tender table tr");
										for (var i=0; i<line.length; i++){
										   line[i].style.background=(i%2==1) ? "#e1e4e9" : "#FFFFFF"; 
										}
										$(window).resize();
										$(".c_cliam_close").click(function(){
											$(".c_buy_bj").hide();
											$(".c_cofirm_buy").hide();
										})
										$(".c_cliam_close1").click(function(){
											$(".c_buy_bj").hide();
											$(".c_buy_success").hide();
										})
										$(".c_cliam_close3").click(function(){
											$(".c_buy_bj").hide();
											$(".c_buy_revocation").hide();
										})
										$("#validCode").blur(function(){
											if($("#validCode").val()==""){
												$("#validCode").val("验证码").css({color:"#ababab"});
											}
										})
										$("#validCode").focus(function(){
											$("#validCode").css({color:"#333"});
											if($("#validCode").val()=="验证码"){
												$("#validCode").val("");
											}
										})
										$(".truereturn").click(function(){
											$(".c_buy_bj").hide();
											$(".c_cofirm_buy").hide();
										})
										$(".c_buy_bj").show();
										$(".c_cofirm_buy").show();
										$(".truebutton").click(function(){
											var id = $("#tenderID").val() ;
											var fee = d($(".select_option").find(".selected").attr("value"),100) ;
											var validCode =  $("#validCode").val() ;
											if($("#trueconsent").attr("checked")=="checked"){
												if(validCode!=""&&validCode!="验证码"){
													$(".pubErr").html("");
													$.ajax({
														type:"post",
														url:"/member/credit/sell.html",
														data:{id:id,fee:fee,type:type,collectionId:collectionId,validCode:validCode},
														dataType:"json",
														success:function(json){
															if(json.result){
																$(".c_cofirm_buy").hide();
																//alert(json.msg);
																$.alert(json.msg,"提示",function(){},true);
																window.location.reload() ;
															}else{
																$(".pubErr").html(json.msg);
															}
														}
													}) ;
												}else{
													$(".pubErr").html("请输入验证码！");
												}
											}else{
												$(".pubErr").html("请同意转让协议！");
											}
											
										}) ;
									  });
						            });
								}
							})
							
						})
					});
				});
				require.async(['/plugins/pager/creditpager.css','/plugins/pager/pager'],function(){
					kkpager.generPageHtml({
							pagerid: classname+'_kkpager', //divID
							pno : json.data.page.currentPage,//当前页码
							total : json.data.page.pages,//总页码
							totalRecords : json.data.page.total,//总数据条数
							isShowFirstPageBtn	: false, 
							isShowLastPageBtn	: false, 
							isShowTotalPage 	: false, 
							isShowTotalRecords 	: false, 
							isGoPage 			: false,
							lang:{
								prePageText				: '<',
								nextPageText			: '>'
							},
							mode:'click',
							click:function(n){
					        	$.ajax({
					        		type:"get",
					        		url:param+"&randomTime="+ (new Date()).getTime()+"&page="+n,
					        		dataType:"json",
					        		success:function(json){
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$("."+classname).html(html);
											//table 奇偶数行颜色
											var line=$(".c_cliam_tender table tr");
											for (var i=0; i<line.length; i++){
											   line[i].style.background=(i%2==1) ? "#e1e4e9" : "#FFFFFF"; 
											}
											$(".c_cliamBT4").click(function(){
												$(".c_buy_bj").hide();
												$(".c_buy_success").hide();
											})
											$(".revocationddrevocation").click(function(){
												$(".c_cliamBT1").attr("data-val",$(this).data("val")) ;
												$(".c_buy_bj").show();
												$(".c_buy_revocationing").show();
											})
											$(".c_cliamBT1").click(function(){
												var id = $(this).data("val");
												$.ajax({
													type:"post",
													url:"/member/credit/reCall.html?id="+id + "&type=" + 1,
													dataType:"json",
													success:function(json){
														if(json.result){
															$(".c_buy_revocation").show();
															$(".c_buy_revocationing").hide();
														}
													}
												});
											}) ;
											//JSDP-35 gjh 2015-4-30 start
											$(".c_cliamBT11").click(function(){
												var id = $(this).data("val");
												var resultFlag = $("#resultFlag").val();
												$.ajax({
													type:"post",
													url:"/member/credit/reCall.html?id="+id + "&type=" + 2 + "&resultFlag=" + resultFlag,
													dataType:"json",
													success:function(json){
													if(json.result){
														$(".c_buy_revocation").show();
														$(".c_buy_revocationing1").hide();
													}
												}
												});
											}) ;
											//JSDP-35 gjh 2015-4-30 end
											$(".c_cliamBT2").click(function(){
												$(".c_buy_revocation").hide();
												$(".c_buy_bj").hide();
												window.location.reload();
											}) ;
											$(".revocationddAssignment").click(function(){
												var id = $(this).parent().find(".creid").html() ;
												var type = $(this).next().val() ;
												var collectionId =  $(this).next().next().val() ;
												$.ajax({
													type:"post",
													url:"/member/credit/sellApply.html?id="+id+"&type="+type+"&collectionId="+collectionId,
													dataType:"json",
													success:function(json){
														require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
												            require.async('/plugins/handlebars-v1.3.0/transFormatJsonCredit',function(){
															$(".c_cofirm_buy").html(Handlebars.compile(require("../../tpl/member/credit_detail.tpl"))(json));
															rel(json);
															$(window).resize(function(){
																$(".c_cofirm_buy").css({left:($(window).width()-$(".c_cofirm_buy").width())/2+"px",top:($(window).height()-$(".c_cofirm_buy").outerHeight())/2+"px"});
																$(".c_buy_success").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
																$(".c_buy_revocation").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
																$(".c_buy_revocationing").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
															})
															//table 奇偶数行颜色
															var line = $(".c_cliam_tender table tr");
															for (var i=0; i<line.length; i++){
															   line[i].style.background=(i%2==1) ? "#e1e4e9" : "#FFFFFF"; 
															}
															$(window).resize();
															$(".c_cliam_close").click(function(){
																$(".c_buy_bj").hide();
																$(".c_cofirm_buy").hide();
															})
															$(".c_cliam_close1").click(function(){
																$(".c_buy_bj").hide();
																$(".c_buy_success").hide();
															})
															$(".c_cliam_close3").click(function(){
																$(".c_buy_bj").hide();
																$(".c_buy_revocation").hide();
															})
															$("#validCode").blur(function(){
																if($("#validCode").val()==""){
																	$("#validCode").val("验证码").css({color:"#ababab"});
																}
															})
															$("#validCode").focus(function(){
																$("#validCode").css({color:"#333"});
																if($("#validCode").val()=="验证码"){
																	$("#validCode").val("");
																}
															})
															$(".truereturn").click(function(){
																$(".c_buy_bj").hide();
																$(".c_cofirm_buy").hide();
															})
															$(".c_buy_bj").show();
															$(".c_cofirm_buy").show();
															$(".truebutton").click(function(){
																var id = $("#tenderID").val() ;
																var fee = d($(".select_option").find(".selected").attr("value"),100) ;
																var validCode =  $("#validCode").val() ;
																if($("#trueconsent").attr("checked")=="checked"){
																	if(validCode!=""&&validCode!="验证码"){
																		$(".pubErr").html("");
																		$.ajax({
																			type:"post",
																			url:"/member/credit/sell.html",
																			data:{id:id,fee:fee,type:type,collectionId:collectionId,validCode:validCode},
																			dataType:"json",
																			success:function(json){
																				if(json.result){
																					$(".c_cofirm_buy").hide();
																					//alert(json.msg);
																					$.alert(json.msg,"提示",function(){},true);
																					window.location.reload() ;
																				}else{
																					$(".pubErr").html(json.msg);
																				}
																			}
																		}) ;
																	}else{
																		$(".pubErr").html("请输入验证码！");
																	}
																}else{
																	$(".pubErr").html("请同意转让协议！");
																}
																
															}) ;
														  });
											            });
													}
												})
												
											})
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				});
			}
			else
			{
				$("."+classname).html("<div class='c_nodata'></div>");
				$("#kkpager").html('');
			}
			
		}
		})	
	}
	function c(r3,dis){
		var m=0,s1=r3.toString(),s2=dis.toString();
		try{m+=s1.split(".")[1].length}catch(e){}
		try{m+=s2.split(".")[1].length}catch(e){}
		return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
	 }
	function d(ag1,ag2){
		var t1=0,t2=0,r1,r2,r3; 
		try{t1=ag1.toString().split(".")[1].length}catch(e){}   
		try{t2=ag2.csom.creditCopies.toString().split(".")[1].length}catch(e){}   
		with(Math){   
			r1=Number(ag1.toString().replace(".",""))   
			r2=Number(ag2.toString().replace(".",""))   
			r3 = ((r1/r2)*pow(10,t2-t1)).toFixed(2);   
		}
		return r3 ;
	 }
	function rel(json){
		$.getScript('../../themes/theme_default/media/js/jquery.selectdefalult.js',function(){
			$(".select_option").find("li").click(function(){  //  费率规则应该是动态的
				dis = d($(this).attr("value"),100) ;
				var r3 = d(json.csom.creditValue,json.csom.creditCopies) ;
				var rc = c(r3,dis) ;
				var rt = c(json.csom.creditValue,dis) ;
				$(".sellprice").html(rc.toFixed(2)+"元/份");
				$(".sellTotal").html(rt.toFixed(2)+"元");
				$(".sellRTotal").html(Subtr(rt.toFixed(2),json.csom.fee)+"元");
			})
		});
		
	}
	function Subtr(arg1,arg2){  
	     var r1,r2,m,n;  
	     try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
	     try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
	     m=Math.pow(10,Math.max(r1,r2));  
	     //last modify by deeka  
	     //动态控制精度长度  
	     n=(r1>=r2)?r1:r2;  
	     return ((arg1*m-arg2*m)/m).toFixed(2);  
	}
	exports.ajaxUrl = ajaxUrl;
	
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
						falg =  true;
						if(data.msg_data=="债权已撤销"){
							$.alert(data.msg_data,"提示",function(){window.location.reload();},true);
							//window.location.reload();
						}else{
							//fnShowReturn($("input[type='submit']"),data.msg_data);
							$.alert(data.msg_data,"提示",function(){window.location.reload();},true);
							/*$(".pay_cpmerror").eq(1).show() ;
							$(".pay_cpmerror").eq(1).html(data.msg_data) ;*/
						}
					}else{
						//setTimeout(returnResult(),5000);
						//JSDBET-832 gjh 2015-3-23 start
						/*var time = 2;
						var t=setInterval(function () {
							if(time == 0){
								returnResult();
							}
							time--;
						},1000);*/
						//JSDBET-832 gjh 2015-3-23 end
					}
				});
			}
			return falg;
		}
});