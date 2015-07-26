define(function(require,exports,module){
	require('jquery');
	
	//判断是否已开通环迅支付
	$.ajax({
		url:"/member/useridentify/realNameStatus.html",
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.result==false){
				require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
					//构造确认框DOM
					$.layer({
					    type: 1,
					    closeBtn: false,
					    title: false,
					    area: ['460px', '240px'],
					    shade: [0.5, '#000'],
					    border: 0,
					    page: {
					        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">认证提示</h1></div><div class="fileconfirm_msg"><span><i class="iconfont">&#xe614;</i>您尚未通过实名认证，请先认证。</span></div><div class="fileconfirmbtn"><a href="/member_borrow/security/realNameIdentify.html" class="okBtn">马上去认证</a></div></div>'
					    }
					});	
				});
			}
		}
	})
	
	require.async("/plugins/jquery-validation-1.13.0/jquery.validate",function(){
		require.async("/plugins/jquery-validation-1.13.0/additional-methods",function(){
			$("#J_cash").validate({
					ignore:".ignore",
					rules: {
						money: {
							required: true,
							max:parseFloat($("#available_Balance").text()),
							min:0.01
						}
					},
					messages:{
						money: {
							required: "请输入提现金额",
							max:"超过可提现金额",
							min:"不能小于0.01元"
						}
					},
					errorElement:"em",
					errorPlacement:function(error,element){
						error.appendTo(element.parent().find("span"));
					},
					submitHandler:function(form,event,vaildator){
						form.submit();
					}
				});
		});
	});
});