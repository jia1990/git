define(function(require,exports,module){
	require('alert');
	ajaxUrl("/member/score/getPetCardPackList.html?status=ud"+"&randomTime="+ (new Date()).getTime(),'inertiaPack',"#inertiaPack");
	
	function ajaxUrl(param,tpl,box,pageBox){
		$.ajax({
			type:'get',
			url:param + '&randomTime=' + (new Date()).getTime(),
			dataType:'json',
			success:function(json){
			//异步加载数据
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var html = "";
					//if(json.petCardPackList.length){
						if(tpl == 'inertiaPack'){
							html = Handlebars.compile(require('../../tpl/member/petCardInertiaPack.tpl'))(json);
						}else if(tpl == 'activePack'){
							html = Handlebars.compile(require('../../tpl/member/petCardActivePack.tpl'))(json);
						}else if(tpl == 'overduePack'){
							html = Handlebars.compile(require('../../tpl/member/petCardOverduePack.tpl'))(json);
						}
					/*}else{
						html = "<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>";
					}*/
					$(box).html(html);
					$("#petCardSum").html(json.petCardSum);
					$("#petCardCount").html(json.petCardCount);
					binding();
				});
			});
			if(pageBox !=null){
				//分页插件
				if(json.data.page.pages > 0)
				{
					require.async(['/plugins/pager/creditpager.css','/plugins/pager/pager'],function(){
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
								url:param+"&randomTime="+ (new Date()).getTime()+"&page="+n,
								dataType:"json",
								success:function(json){
								var template = Handlebars.compile(tpl);
								var html = template(json);	
								$(pageBox).html(html);
							}
							});
							this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
						}
						});
					});
				}
				else
				{
					$(box).html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
				}
			}
		}
		});
	}
	
	function ajaxPetCardList(param,tpl,box,pageBox){
		$(box).html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
		$.ajax({
			type:'get',
			url:param + '&randomTime=' + (new Date()).getTime(),
			dataType:'json',
			success:function(json){
			//异步加载数据
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var html = "";
					//if(json.petCardPackList.length){
						if(tpl == 'inertiaList'){
							html = Handlebars.compile(require('../../tpl/member/petCardInertiaList.tpl'))(json);
						}else if(tpl == 'activeList'){
							html = Handlebars.compile(require('../../tpl/member/petCardActiveList.tpl'))(json);
						}else if(tpl == 'overdueList'){
							html = Handlebars.compile(require('../../tpl/member/petCardOverdueList.tpl'))(json);
						}
					/*}else{
						html = "<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>";
					}*/
					$(box).html(html);
					binding();
					
				});
			});
			
			if(pageBox !=null){
				//分页插件
				if(json.data.page.pages > 0)
				{
					require.async(['/plugins/pager/creditpager.css','/plugins/pager/pager'],function(){
						
						kkpager.generPageHtml({
							pagerid : tpl + "Page",
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
								url:param+"&randomTime="+ (new Date()).getTime()+"&page="+n,
								dataType:"json",
								success:function(json){
								if(tpl == 'inertiaList'){
									html = Handlebars.compile(require('../../tpl/member/petCardInertiaList.tpl'))(json);
								}else if(tpl == 'activeList'){
									html = Handlebars.compile(require('../../tpl/member/petCardActiveList.tpl'))(json);
								}else if(tpl == 'overdueList'){
									html = Handlebars.compile(require('../../tpl/member/petCardOverdueList.tpl'))(json);
								}
								$(box).html(html);
							}
							});
							this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
						}
						});
					});
				}
				else
				{
					$(box).html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
				}
			}
		}
		});
	}
		//日期
		$(".c_recharge ul li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		})
		$(".c_date_range span").click(function(){
			$(".c_date_range").hide().siblings(".c_recharge_limit").show();
		})
		$(".c_recharge_limit span").click(function(){
			$(".c_recharge_limit").hide().siblings(".c_date_range").show();
		})
		//数据详细说明显示
		/*$(".c_recharge_detail dd i").hover(function(){
			var index=$(this).index(".c_recharge_detail dd i");
			$(".c_remark_info").hide();
			$(".c_remark_info").eq(index).show();
		},function(){
			$(".c_remark_info").hide();
		})*/
		$(".c_aside_nav").height($(".c_deal_record").height());
		//基本设置页面
		$(".c_deal_menu li").click(function(){
			var index=$(this).index();
			$(this).addClass("c_menu_this").siblings().removeClass("c_menu_this");
			$(".c_deal_operate").eq(index).show().siblings().hide();	
		})
		$(".c_safe_update").toggle(function(){
			$(this).css({background:"#129CDC",color:"#fff"});
			$(".c_safe_repwd").slideDown().show();
		},function(){
			$(this).css({background:"#fff",color:"#129CDC"});
			$(".c_safe_repwd").slideUp().hide();
		})
		$(".c_old_pwd").blur(function(){
			if($(".c_old_pwd").val()==""){
				$(this).next("span").show();
			}else{
				$(this).next("span").hide();
			}
		})
		
	/*2015.06.15 start*/
	$(".c_aside_nav").height($(".c_deal_record").height()-26);
	$(".c_card_menu li").click(function(){
		$(".c_checkbox_all").css({display:"none"});/*2015.06.16*/
		$(".c_big_checked").hide();
		$(".c_exp_checkbox div").hide();
		var index=$(this).index(".c_card_menu li");
		$(".c_card_all").eq(index).show().siblings().hide();
		$(".c_aside_nav").height($(".c_deal_record").height()-26);
		var status = "";
		if($(this).data("val") =="inertiaPack"){
			status = "ud";
		}else if($(this).data("val") =="activePack"){
			status = "da";
		}else if($(this).data("val") =="overduePack"){
			status = "dd";
		}
		ajaxUrl("/member/score/getPetCardPackList.html?status="+status+"&randomTime="+ (new Date()).getTime(),$(this).data("val"),"#"+$(this).data("val"));
	})
	function binding(){
		
		//点击进入未使用详情
		$(".c_no_active dd a").unbind("click");
		$(".c_no_active dd a").click(function(){
			$(".c_noactive_info .c_checkbox_all").hide();/*2015.06.16*/
			$(".c_noactive_info .c_big_checked").hide();/*2015.06.16*/
			$(".c_noactive_info").show().siblings().hide();
			$(".c_aside_nav").height($(".c_deal_record").height()-26);
			$(".c_noactive_info .c_confirm_take").removeClass("c_noactive").html("查看");
			$(".c_num_pwd").hide();
			$(".c_active_click").show();
			//ajaxPetCardList("/member/score/getPetCardList.html?status=ud&moneys=30","inertiaList","#inertiaList","#inertiaListPage");
			ajaxPetCardList("/member/score/getPetCardList.html?status=ud&moneys="+$(this).find(".money").html(),"inertiaList","#inertiaList","#inertiaListPage");
		})
		//点击进入已使用详情
		$(".c_already_active dd a").unbind("click");
		$(".c_already_active dd a").click(function(){
			$(".c_active_info").show().siblings().hide();
			$(".c_aside_nav").height($(".c_deal_record").height()-26);
			//alert($(this).find(".money").html());
			ajaxPetCardList("/member/score/getPetCardList.html?status=da&moneys="+$(this).find(".money").html(),"activeList","#activeList","#activeListPage");
		})
		//点击进入已失效详情
		$(".c_already_overdue dd a").unbind("click");
		$(".c_already_overdue dd a").click(function(){
			$(".c_overdue_info").show().siblings().hide();
			$(".c_aside_nav").height($(".c_deal_record").height()-26);
			//alert($(this).find(".money").html());
			ajaxPetCardList("/member/score/getPetCardList.html?status=dd&moneys="+$(this).find(".money").html(),"overdueList","#overdueList","#overdueListPage");
		})
		//查看卡
		$(".c_noactive_info .c_confirm_take").unbind("click");
		$(".c_noactive_info .c_confirm_take").click(function(){
			$(".c_valid_window").show();
			$(".c_qq_bj").show();
			$(this).addClass("c_noactive").html("未使用");
			$(this).parent().parent().siblings(".c_num_pwd").show();
			$(this).parent().parent().siblings(".c_active_click").hide();
		})
		//未使用全选
		$(".c_no_active .c_big_checked span").hide();
		$(".c_no_active .c_checkbox_all").unbind("click");
		$(".c_no_active .c_checkbox_all").click(function(){
			var activeEle=$(".c_no_active .c_exp_checkbox div");
			if(activeEle.is(":visible")){
				activeEle.hide();
				$(".c_no_active .c_big_checked span").hide();
			}else{
				activeEle.show();
				$(".c_no_active .c_big_checked span").show();
			}
		})
		$(".c_no_active .c_all_active").unbind("click");
		$(".c_no_active .c_all_active").click(function(){
			$(".c_no_active .c_big_checked span").hide();
			if($(".c_no_active .c_big_checked").is(":visible")){
				$(".c_no_active .c_big_checked").hide();
				$(".c_no_active .c_exp_checkbox div").hide();
				$(".c_no_active .c_checkbox_all").hide();/*2015.06.16*/
				$(".c_no_active .c_active_text").hide();/*2015.06.16*/
			}else{
				$(".c_no_active .c_big_checked").show();
				$(".c_no_active .c_checkbox_all").show();/*2015.06.16*/
				$(".c_no_active .c_active_text").css({display:"inline-block"});/*2015.06.16*/
			}
		})
		$(".c_no_active .c_big_checked").unbind("click");
		$(".c_no_active .c_big_checked").click(function(){
			var activeEle=$(this).find("span");
			if(activeEle.is(":visible")){
				activeEle.hide();
			}else{
				activeEle.show();
			}
			$(".c_no_active .c_exp_checkbox div").hide();
		})
		//已使用全选
		$(".c_already_active .c_big_checked span").hide();
		$(".c_already_active .c_checkbox_all").unbind("click");
		$(".c_already_active .c_checkbox_all").click(function(){
			var activeEle=$(".c_already_active .c_exp_checkbox div");
			if(activeEle.is(":visible")){
				activeEle.hide();
				$(".c_already_active .c_big_checked span").hide();
			}else{
				activeEle.show();
				$(".c_already_active .c_big_checked span").show();
			}
		})
		$(".c_already_active .c_all_active").unbind("click");
		$(".c_already_active .c_all_active").click(function(){
			$(".c_already_active .c_big_checked span").hide();
			if($(".c_already_active .c_big_checked").is(":visible")){
				$(".c_already_active .c_big_checked").hide();
				$(".c_already_active .c_exp_checkbox div").hide();
				$(".c_already_active .c_checkbox_all").hide();/*2015.06.16*/
				$(".c_already_active .c_active_text").hide();/*2015.06.16*/
			}else{
				$(".c_already_active .c_big_checked").show();
				$(".c_already_active .c_checkbox_all").show();/*2015.06.16*/
				$(".c_already_active .c_active_text").css({display:"inline-block"});/*2015.06.16*/
			}
		})
		$(".c_already_active .c_big_checked").unbind("click");
		$(".c_already_active .c_big_checked").click(function(){
			var activeEle=$(this).find("span");
			if(activeEle.is(":visible")){
				activeEle.hide();
			}else{
				activeEle.show();
			}
			$(".c_already_active .c_exp_checkbox div").hide();
		})
		//未使用详情全选
		$(".c_noactive_info .c_big_checked span").hide();
		$(".c_noactive_info .c_checkbox_all").unbind("click");
		$(".c_noactive_info .c_checkbox_all").click(function(){
			var activeEle=$(".c_noactive_info .c_exp_checkbox div");
			if(activeEle.is(":visible")){
				activeEle.hide();
				$(".c_noactive_info .c_big_checked span").hide();
			}else{
				activeEle.show();
				$(".c_noactive_info .c_big_checked span").show();
			}
		})
		$(".c_noactive_info .c_all_active").unbind("click");
		$(".c_noactive_info .c_all_active").click(function(){
			$(".c_noactive_info .c_big_checked span").hide();
			if($(".c_noactive_info .c_big_checked").is(":visible")){
				$(".c_noactive_info .c_big_checked").hide();
				$(".c_noactive_info .c_exp_checkbox div").hide();
				$(".c_noactive_info .c_checkbox_all").hide();//2015.06.16
				$(".c_noactive_info .c_active_text").hide();//2015.06.16
			}else{
				$(".c_noactive_info .c_big_checked").show();
				$(".c_noactive_info .c_checkbox_all").show();//2015.06.16
				$(".c_noactive_info .c_active_text").css({display:"inline-block"});//2015.06.16
			};
		})
		$(".c_noactive_info .c_big_checked").unbind("click");
		$(".c_noactive_info .c_big_checked").click(function(){
			var activeEle=$(this).find("span");
			if(activeEle.is(":visible")){
				activeEle.hide();
			}else{
				activeEle.show();
			}
			$(".c_noactive_info .c_exp_checkbox div").hide();
		})
		//卡包校验激活验证
		$(".c_card_all .c_active_valid").unbind("click");
		$(".c_card_all .c_active_valid").click(function(){
			var param = "";
			var status = $(this).parentsUntil(".c_card_all").parent().attr("id");
			var box = "";
			if(status == "inertiaPack"){
				param = param + "status=ud";
				box = "inertiaList";
			}else if(status == "activePack"){
				param = param + "status=da";
				box = "activeList";
			}
			if($(this).parent().attr("class") == "c_exp_right"){
				var checkedLength = $(".c_card_bag .c_big_checked").find("span").size();
				var checkCount = 0;
				for(var i = 0 ; i < checkedLength; i++){
					var obj = $(".c_card_bag .c_big_checked").find("span").eq(i);
					if($(obj).css("display") == "block"){
						var money = $(obj).parentsUntil(".c_card_bag").parent().find(".money").html();
						param = param+ "&moneys="+money;
						checkCount++;
					}
				}
				if(checkCount == 0){
					$.alert("请选择需要查看的卡包");
				}else{
					$(".c_valid_window").show();
					$(".c_qq_bj").show();
					if(status == "inertiaPack"){
						$(".get_bg").show();
						$(".tel_valid").show();
					}else if(status == "activePack"){
						$(".c_already_active .c_big_checked").hide();
						$(".c_already_active .c_exp_checkbox div").hide();
						$(".c_already_active .c_checkbox_all").hide();/*2015.06.16*/
						$(".c_already_active .c_active_text").hide();/*2015.06.16*/
						$(".c_active_info").show().siblings().hide();
						$(".c_aside_nav").height($(".c_deal_record").height()-26);
						ajaxPetCardList("/member/score/getPetCardList.html?"+param,box,"#"+box,"#"+box+"Page");
					}
				}
			}else{
				var money = $(this).siblings(".c_card_bag").find(".money").html();
				param = param+ "&moneys="+money;
				$(".c_valid_window").show();
				$(".c_qq_bj").show();
				if(status == "inertiaPack"){
					$(".get_bg").show();
					$(".tel_valid").show();
				}else if(status == "activePack"){
					$(".c_already_active .c_big_checked").hide();
					$(".c_already_active .c_exp_checkbox div").hide();
					$(".c_already_active .c_checkbox_all").hide();/*2015.06.16*/
					$(".c_already_active .c_active_text").hide();/*2015.06.16*/
					$(".c_active_info").show().siblings().hide();
					$(".c_aside_nav").height($(".c_deal_record").height()-26);
					ajaxPetCardList("/member/score/getPetCardList.html?"+param,box,"#"+box,"#"+box+"Page");
				}
			}
			$(".c_tel_confirm").unbind("click");
			$(".c_tel_confirm").click(function(){
				var validCode = $("#validCode").val();
				$.ajax({
					type: "POST",
					url: "/member/socre/checkPhoneCode.html",
					data:{validCode:validCode},
					success: function(data){
						if(data.result){
							$(".get_bg").hide();
							$(".tel_valid").hide();
							$(".c_noactive_info .c_checkbox_all").hide();
							$(".c_noactive_info .c_big_checked").hide();
							$(".c_noactive_info").show().siblings().hide();
							$(".c_aside_nav").height($(".c_deal_record").height()-26);
							$(".c_noactive_info .c_confirm_take").removeClass("c_noactive").html("查看").css({marginTop:"0"});
							$(".c_num_pwd").hide();
							$(".c_active_click").show();
							$("#validCode").val("");
							$.get("/member/score/updateIsCheck.html?"+param,function(data){
								ajaxPetCardList("/member/score/getPetCardList.html?"+param,box,"#"+box,"#"+box+"Page");
							});
						}else{
							$.alert(data.msg);
							$("#validCode").val("");
						}
					}
				});
			});
		})
		//卡校验激活验证
		$(".c_card_info .c_active_valid").unbind("click");
		$(".c_card_info .c_active_valid").click(function(){
			var param = "";
			var status = $(this).parentsUntil(".c_card_info").parent().find(".y_winning_List").attr("id");
			var box = "";
			if(status == "inertiaList"){
				param = param + "status=ud";
				box = "inertiaList";
			}
			if($(this).parent().attr("class") == "c_exp_right"){
				var checkedLength = $(this).parentsUntil(".c_card_info").parent().find(".c_big_checked span").size();
				var checkCount = 0;
				for(var i = 0 ; i < checkedLength; i++){
					var obj = $(this).parentsUntil(".c_card_info").parent().find(".c_big_checked span").eq(i);
					if($(obj).css("display") == "block"){
						var retCardId = $(obj).parentsUntil(".y_winning_List").parent().find(".retCardId").eq(i).html();
						param = param+ "&ids="+retCardId;
						checkCount++;
					}
					param = param+ "&moneys=" + $(obj).parentsUntil(".y_winning_List").parent().find(".c_detail_text .money").eq(i).html();
				}
				if(checkCount == 0){
					$.alert("请选择需要查看的卡");
				}else{
					$(".c_valid_window").show();
					$(".c_qq_bj").show();
					$(".get_bg").show();
					$(".tel_valid").show();
					//alert(param);
				}
			}else{
				var retCardId = $(this).parentsUntil("li").parent().find(".retCardId").html();
				var moneys = $(this).parentsUntil("li").parent().find(".money").html();
				param = param+ "&retCardId="+retCardId + "&moneys="+moneys;
				$(".c_valid_window").show();
				$(".c_qq_bj").show();
				$(".get_bg").show();
				$(".tel_valid").show();
			}
			$(".c_tel_confirm").unbind("click");
			$(".c_tel_confirm").click(function(){
				var validCode = $("#validCode").val();
				$.ajax({
					type: "POST",
					url: "/member/socre/checkPhoneCode.html",
					data:{validCode:validCode},
					success: function(data){
						if(data.result){
							$(".get_bg").hide();
							$(".tel_valid").hide();
							$(".c_noactive_info .c_checkbox_all").hide();
							$(".c_noactive_info .c_big_checked").hide();
							$(".c_noactive_info").show().siblings().hide();
							$(".c_aside_nav").height($(".c_deal_record").height()-26);
							$(".c_noactive_info .c_confirm_take").removeClass("c_noactive").html("查看").css({marginTop:"0"});
							$(".c_num_pwd").hide();
							$(".c_active_click").show();
							$("#validCode").val("");
							$.get("/member/score/updateIsCheck.html?"+param,function(data){
								ajaxPetCardList("/member/score/getPetCardList.html?"+param,box,"#"+box,"#"+box+"Page");
							});
						}else{
							$.alert(data.msg);
							$("#validCode").val("");
						}
					}
				});
			});
		});
		
		$(".c_valid_window .c_qq_close").unbind("click");
		$(".c_valid_window .c_qq_close").click(function(){
			$(".c_valid_window").hide();
			$(".c_qq_bj").hide();
		})
		//未使用返回列表
		$(".c_noactive_info .c_back_list").unbind("click");
		$(".c_noactive_info .c_back_list").click(function(){
			$(".c_no_active .c_big_checked").hide();/*2015.06.16*/
			$(".c_no_active .c_checkbox_all").hide();/*2015.06.16*/
			$(".c_no_active .c_active_text").hide();/*2015.06.16*/
			$(".c_no_active").show().siblings().hide();
			$(".c_aside_nav").height($(".c_deal_record").height()-26);
		})
		//已使用返回列表
		$(".c_active_info .c_back_list").unbind("click");
		$(".c_active_info .c_back_list").click(function(){
			$(".c_already_active .c_big_checked").hide();/*2015.06.16*/
			$(".c_already_active .c_checkbox_all").hide();/*2015.06.16*/
			$(".c_already_active").show().siblings().hide();
			$(".c_aside_nav").height($(".c_deal_record").height()-26);
		})
		//已失效返回列表
		$(".c_overdue_info .c_back_list").unbind("click");
		$(".c_overdue_info .c_back_list").click(function(){
			$(".c_already_overdue").show().siblings().hide();
			$(".c_aside_nav").height($(".c_deal_record").height()-26);
		})
		//弹窗
		$(".get_bg").height($("body").height());
		$(window).resize(function(){
			$(".tel_valid").css({left:($(window).width()-$(".tel_valid").width())/2,top:($(window).height()-$(".tel_valid").height())/2})
		})
		$(window).resize();
		$(".valid_close").unbind("click");
		$(".valid_close").click(function(){
			$(".get_bg").hide();
			$(".tel_valid").hide();
		})
		/*$(".c_active_valid").click(function(){
			$(".get_bg").show();
			$(".tel_valid").show();
		})*/
		/*2015.06.15 end */
		
		
		
		
		var validCode=true;//获取验证码状态
		var emailValidCode=true;//获取邮箱验证码状态
		//注册时修改获取验证码按钮状态
		function mobileVaildBtn(){
			var getCodeText = "获取短信验证码";
			var time=120;
			if (validCode) {
				getCodeText = "获取短信验证码";
				validCode=false;
				var t=setInterval(function () {
				time--;
					$("#mobileCode").html(time+"秒后重新获取");
					if (time==0) {
						clearInterval(t);
						$("#mobileCode").html(getCodeText);
						validCode=true;
					}
				},1000)
			}
		}
		//获取手机验证码单击事件
		$("#mobileCode").unbind("click");
		$("#mobileCode").click(function(){
			if($(".c_loginContent .user #mobileValidCode").val()=="" || $(".c_loginContent .user #mobileValidCode").val()=="短信验证码"){
				alerts("请输入短信验证码","请输入短信验证码",ture);
			}else{
				var getCodeText = "获取短信验证码";
				var time=120;
				if (validCode) {
					if($("#mobileCode").html() == "获取短信验证码"){
						getCodeText = "获取短信验证码";
						$.ajax({
							type: "POST",
							url: "/member/score/sendPhoneCode.html",
							success: function(msg){
							}
							});
					}
					validCode=false;
					var t=setInterval(function () {
					time--;
						$("#mobileCode").html(time+"秒后重新获取");
						if (time==0) {
							clearInterval(t);
							$("#mobileCode").html(getCodeText);
							validCode=true;
						}
					},1000)
				}
			}
		})
	}
});