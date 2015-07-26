define(function(require,exports,module){
	require('jquery');
	require('alert');
	require.async('/themes/theme_default/media/js/common1',function(){
		//TAB标签
		$(".user_right").tabChange({
			isClick:true,
		    isHover:false,
			childLi:".amountApplyTab li",//tab选项卡
			childContent:".amountApplyTabBox",//tab内容
			hoverClassName:"hover",//选中当前选项卡的样式
			callBack:false	
		});
		
		//select美化
		$("select").minSelect();
	});
	
	
	//字数限制
	require.async('textLimit',function(){
		$('textarea').limitTextarea({
			maxNumber:100,
			position:'bottom',
			overClass:'overText',
			onOk:function(){},
			onOver:function(){}
		});
	});
	
	//申请额度验证
	require.async(['/themes/theme_default/media/js/validate/jquery.validate.min','/themes/theme_default/media/js/validate/addtional-method'],function(){
		require.async(['/plugins/poshytip/jquery.poshytip.min','/plugins/poshytip/tip-yellowsimple/tip-yellowsimple.css'],function(){
			$("#addAmountApply").validate({
				rules:{
					amount:{
						required:true,
						max:10000
					},
					content:{
						required:true
					}
				},
				messages:{
					amount:{
						required:"请填写申请金额",
						 max:"申请金额不能超过10000"
					},
					content:{
						required:"请写上详细信息"
					}
				},
				errorPlacement:function(error,element){
					element.poshytip('hide');
					element.attr("title",error.html());
					element.poshytip({
						className: 'tip-yellowsimple',
						showOn: 'none',
						alignTo: 'target',
						alignX: 'center',
						alignY:'top',
						fade:false,
						slide:false,
						offsetX: 0,
						offsetY: 5,
						showTimeout: 100
					});
					element.poshytip('show');
				},
				success:function(element){
					element.poshytip('hide');
				},
				submitHandler:function(form){
					$(form).ajaxSubmit(function(data){
						if(data.result==true){
							//alert(data.result);
							$.alert(data.result,"提示",function(){},true);
						}	
					})
				}
			})
		});
	});
	
	
	
	var tpl = require('../../tpl/borrow_amountApply.tpl');//载入tpl模板
	//初始化显示表格、搜索
	require.async(['./showTable','./search'],function(showTable,search){
		showTable.ajaxUrl('/member/borrow/creditApplyList.html?status='+99,tpl);
		search.search('/member/borrow/creditApplyList.html?',tpl);
	});
});