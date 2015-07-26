define(function(require,exports,module){
	//分页显示函数ajaxUrl(param,tpl)
	//param:请求参数
	//tpl:语义模板
	var ajaxUrl = function (param,tpl){
		$.ajax({
		type:'get',
		url:param + '&randomTime=' + (new Date()).getTime(),
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
						$('.change_conin').html(html);
						 $(".calculatorCpmBox4 .change_con ul li").click(function(){
              				$(".calculatorCpmBox4 .change_con ul li").removeClass("changeli");
              				$(this).addClass("changeli");
              			})
              			//JSDP-108 fengguoqin  5.12  start 
              			$(".calculatorCpmBox4 .change_conin").css("width",$(".calculatorCpmBox4 .change_con ul").length*190+"px");
              			$(".calculatorCpmBox4 .changeprevious").click(function(){
              				var lefts=parseInt($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2));
              				if ($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2)<0) {
              					if (!($(".calculatorCpmBox4 .change_conin").is(":animated"))) {
              						$(".calculatorCpmBox4 .change_conin").animate({left:lefts+190},1000);
              					};
              				};
              			})
              			$(".calculatorCpmBox4 .changenext").click(function(){

              				var lefts=parseInt($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2));
              				if ($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2)>-($(".calculatorCpmBox4 .change_con ul").length-4)*190) {
              					if (!($(".calculatorCpmBox4 .change_conin").is(":animated"))) {
              						$(".calculatorCpmBox4 .change_conin").animate({left:lefts-190},1000);
              					};
              					//JSDP-108 fengguoqin  5.12  end 
              				};
              			})
						$(".change_true").click(function(){
							// 获取新客服ID
							var id =$(".calculatorCpmBox4 .change_con ul li.changeli").data("val")  ;
							$.ajax({
								type:'get',
								url:'/member_borrow/ReKf.html?newkfid='+id,
								dataType:'json',
								success:function(json){
									if(json.flag){
										window.location.reload();
									}
								}
							});
						}) ;
					});
				});
				require.async(['/plugins/pager/pager.css','/plugins/pager/pager'],function(){/*
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
											$('.change_conin').html(html);
											 $(".calculatorCpmBox4 .change_con ul li").click(function(){
					                				$(".calculatorCpmBox4 .change_con ul li").removeClass("changeli");
					                				$(this).addClass("changeli");
					                			})
					                			$(".calculatorCpmBox4 .change_conin").css("width",$(".calculatorCpmBox4 .change_con ul").length*220+"px");
					                			$(".calculatorCpmBox4 .changeprevious").click(function(){
					                				var lefts=parseInt($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2));
					                				if ($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2)<0) {
					                					if (!($(".calculatorCpmBox4 .change_conin").is(":animated"))) {
					                						$(".calculatorCpmBox4 .change_conin").animate({left:lefts+220},1000);
					                					};
					                				};
					                			})
					                			$(".calculatorCpmBox4 .changenext").click(function(){

					                				var lefts=parseInt($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2));
					                				if ($(".calculatorCpmBox4 .change_conin").css("left").slice(0,-2)>-($(".calculatorCpmBox4 .change_con ul").length-4)*220) {
					                					if (!($(".calculatorCpmBox4 .change_conin").is(":animated"))) {
					                						$(".calculatorCpmBox4 .change_conin").animate({left:lefts-220},1000);
					                					};
					                				};
					                			})
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				*/});
			}
			else
			{
				$(".c_recharge_detail").html("<div class='c_nodata'></div>");
				$("#kkpager").html('');
			}
			
		}
		})	
	}
	exports.ajaxUrl = ajaxUrl;
});