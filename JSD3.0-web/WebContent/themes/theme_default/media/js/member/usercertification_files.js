define(function(require,exports,module){
	require('jquery');
	
	//TAB标签
	require.async('/themes/theme_default/media/js/common1',function(){
		$(".user_filesList").tabChange({
			isClick:true,
		    isHover:false,
			childLi:".user_filesList_tab li",//tab选项卡
			childContent:".user_filesList_content",//tab内容
			hoverClassName:"hover",//选中当前选项卡的样式
			callBack:false	
		});
		//设置TAB高度
		var tabLeftHeight = $(".user_filesList_tab").height();
		var boxHeight = $(".user_filesList").height();
		if(tabLeftHeight<boxHeight){
			$(".user_filesList_tab").css({"height":boxHeight+"px"})
		}else{
			$(".user_filesList_tab").css({"height":"300px"})
		}
	});
	
	//删除图片
	$(".user_filesList_content").delegate(".fileclose","click",function(){
		var current = $(this);
		require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
			//构造确认框DOM
			$.layer({
			    type: 1,
			    closeBtn: false,
			    title: false,
			    area: ['460px', '240px'],
			    shade: [0.5, '#000'],
			    border:0,
			    page: {
			        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">删除提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><span><i class="iconfont">&#xe614;</i>确定要删除该资料吗？</span></div><div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">确定</a><a href="javascript:;"  class="cancleBtn closeBtn">取消</a></div></div>'
			    }
			});	
			//确认操作
			$(".okBtn").click(function(){
				$.ajax({
					url:"/themes/theme_default/media/json/msg.json",
					dataType:"json",
					success: function(data){
						if(data.result){
							current.parent("li").remove();
							layer.closeAll();
						}else{
							layer.msg('系统错误！', 1, -1);
						}						
					}			
				});				
			});
			//删除操作
			$(".closeBtn").click(function(){
				layer.closeAll();
			});
		}); 
	});
	
	//预览图片
	require.async(['/plugins/fancybox/jquery.fancybox.css','/plugins/fancybox/jquery.fancybox.pack'],function(){
		$(".fileshow").fancybox({
			afterLoad: function() {
		        this.title = '<div class="fileViewTitle"><span><b>资料类型：</b>'+ this.title +'</span><span class="flieUpTime"><b>上传时间：</b>'+ $(this.element).attr('data-time'); + '</span></div>';
		    },
		    helpers : {
		        title: {
		            type: 'inside'
		        }
		    }
		});
	});
});