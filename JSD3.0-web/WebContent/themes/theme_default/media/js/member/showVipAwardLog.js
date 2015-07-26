define(function(require,exports,module){
    require('jquery');
  
    var ajaxUrl = function (param,tpl){
    	    $.ajax({
    			type:'get',
    			url:param+'?randomTime=' + (new Date()).getTime(),
    			dataType:'json',
    			success:function(json){
    				//异步加载数据
    				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
    					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
    						require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
    						var template = Handlebars.compile(tpl);
    						var html = template(json);
    						$('.c_member_record').html(html);
    						
    						//兑换vip
    						$(".changeIsDefault").click(function(){	
    						var id = $(this).data("val");
    						var resultFlag = $("#resultFlag").val();
    						$.ajax({
    							url:"/member/member/updateVipAward.html?idd="+Math.random(),
    							type:"get",
    							async:false,
    							data:{
    								id:id,
    								resultFlag:resultFlag
    							},
    							dataType:"json",
    							success:function(data){
    							if(data.result == true){
    								window.location.reload();
    							  }else if(data.result == false){
    		 								  
    								  $.layer({
    									    type: 1,
    									    closeBtn: false,
    									    title: false,
    									    area: ['460px', '240px'],
    									    shade: [0.5, '#000'],
    									    border: 0,
    									    page: {
    									        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">兑换提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>尊敬的用户您好，您当前是：'+data.vipLevelName+'。低级会员包无法兑换比当前级别高的会员。</p></div><div class="fileconfirmbtn"><a href="/member/member/memberService.html" class="okBtn">兑换成功</a><a href="javascript:;" class="cancleBtn closeBtn">兑换失败</a></div></div>'
    									    }
    									});	
    									//
    									$(".closeBtn").click(function(){
    										layer.closeAll();
    									});
    							  }	
    							}
    						})		   					   					
    					});
    						});	
    					});
    				});
    			
    				//分页插件
    				if(json.data.page.pages > 0)
    				{
    					require.async(['/plugins/pager/pager.css','/plugins/pager/pager'],function(){
    						kkpager.generPageHtml({
    								pno : json.data.page.currentPage,//当前页码
    								total : json.data.page.pages,//总页码
    								totalRecords : json.data.page.total,//总数据条数
    								isShowFirstPageBtn	: false, 
    								isShowLastPageBtn	: false, 
    								isShowTotalPage 	: false, 
    								isShowTotalRecords 	: false, 
    								isGoPage 			: false,
    								lang:{
    									prePageText				: '上一页',
    									nextPageText			: '下一页'
    								},
    								mode:'click',
    								click:function(n){
    						        	$.ajax({
    						        		type:"get",
    						        		url:'/member/member/memberAwardLogList.html?randomTime='+ (new Date()).getTime()+"&page="+n,
    						        		dataType:"json",
    						        		success:function(json){
    												var template = Handlebars.compile(tpl);
    												var html    = template(json);
    												$('.c_member_record').html(html);
    												
    												
    												//兑换vip
    					    						$(".changeIsDefault").click(function(){	
    					    						var id = $(this).data("val");
    					    						var resultFlag = $("#resultFlag").val();
    					    						$.ajax({
    					    							url:"/member/member/updateVipAward.html?idd="+Math.random(),
    					    							type:"get",
    					    							async:false,
    					    							data:{
    					    								id:id,
    					    								resultFlag:resultFlag
    					    							},
    					    							dataType:"json",
    					    							success:function(data){
    					    							if(data.result == true){
    					    							window.location.reload();
    					    							  }else if(data.result == false){
    					    		 								  
    					    								  $.layer({
    					    									    type: 1,
    					    									    closeBtn: false,
    					    									    title: false,
    					    									    area: ['460px', '240px'],
    					    									    shade: [0.5, '#000'],
    					    									    border: 0,
    					    									    page: {
    					    									        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">兑换提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>尊敬的用户您好，您当前是：'+data.vipLevelName+'。低级会员包无法兑换比当前级别高的会员。</p></div><div class="fileconfirmbtn"><a href="/member/member/memberService.html" class="okBtn">兑换成功</a><a href="javascript:;" class="cancleBtn closeBtn">兑换失败</a></div></div>'
    					    									    }
    					    									});	
    					    									//
    					    									$(".closeBtn").click(function(){
    					    										layer.closeAll();
    					    									});
    					    							  }	
    					    							}
    					    						})		   					   					
    					    					});
    						        		}
    						        	});
    									this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
    								}
    						});
    					});
    				}//end if
    				else
    				{
    					$("#kkpager").html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
    				}
    				
    			}//success
    			})	//end ajax 			
    			
    }
	exports.ajaxUrl = ajaxUrl;	
    	   
});