define(function(require,exports,module){
	require('jquery');
	//判断是否已开通第三方账户    fgq  3.9
	$.ajax({
		url:"/member/useridentify/thirdPartyIsOpen.html",
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
			    border: [1],
			    page: {
			        html: '<div class="fileconfirm"><span style="display:block;"><i class="is_del" style="margin-right:0;">操作提示</i><div class="del_bank">是否删除这张银行卡？</div></span><div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">确定</a><a href="javascript:;"  class="cancleBtn" style="background:#ddd;">取消</a></div></span><a class="float_right closeBtn address_close" href="javascript:;"></a></div>'
			    }
			});	
			//确认操作
			$(".okBtn").click(function(){
				//layer.closeAll();
				//location.reload();
				$.ajax({
					url:re_url,
					type:"post",
					success: function(data){
						if(data.result){
							layer.msg('成功解除绑定银行卡！', 1, -1);
							//reLoad();
							location.reload();
						}else{
							layer.msg('解绑失败！', 1, -1);
							location.reload();
						}						
					}			
				});	
				location.reload();
			});
			//删除操作
			$(".cancleBtn").click(function(){
				layer.closeAll();
			});
			
			
			//关闭操作
			$(".address_close").click(function(){
				layer.closeAll();
			});
		}); 
	});

});