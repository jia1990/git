define(function(require,exports,module){
	require('jquery');
	$.ajax({
		url:"/member_borrow/useridentify/thirdPartyIsOpen.html",
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.result==false){
				alerts("认证提示",$(".pss").html(),560,240);		
				$(".y_alertsBoxButton").click(function(){
					//绑定第三方
					window.location.href="/member_borrow/security/realNameIdentify.html";	
				});
			}
		}
	})
	$(function(){
		$($(".y_account_nav dd")[2]).addClass("c_invest_this");
	})
	$(function(){
		$(".y_account_nav dd").click(function(){
			$(".nav_MemberCenter").eq(1).siblings(".c_nav3_this").addClass("c_nav3_this");
		})
	})
	//银行卡号解绑
	
	$(".y_add_bank_shows").delegate("#resetBank","click",function(){
		
		var re_url = "/member/cash/disableBank.html?id=" + $(this).attr("data-value");
		
		require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
			//构造确认框DOM
			$.layer({
			    type: 1,
			    closeBtn: false,
			    title: false,
			    area: ['400px', '200px'],
			    shade: [0.5, '#000'],
			    border: [0],
			    page: {
			    	 html: '<div class="fileconfirm"><span style="display:block;"><i class="is_del" style="margin-right:0;">操作提示</i><div class="del_bank">是否删除这张银行卡？</div></span><div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">确定</a><a href="javascript:;"  class="cancleBtn" style="background:#ddd;">取消</a></div><a class="float_right closeBtn address_close" href="javascript:;"></a></div>'
			    }
			});	
			$(".fileconfirm").css({width:"400px",height:"200px"});
			//确认操作
			$(".okBtn").click(function(){
				$.ajax({
					url:re_url,
					type:"post",
					success: function(data){
						if(data.result){
							layer.msg('成功解除绑定银行卡！', 1, -1);
							reLoad();
						}else{
							layer.msg('解绑失败！', 1, -1);
						}						
					}			
				});				
			});
			//删除操作
			$(".cancleBtn").click(function(){
				layer.closeAll();
			});
			
			$(".address_close").click(function(){
				layer.closeAll();
			});
		}); 
	});
	

});