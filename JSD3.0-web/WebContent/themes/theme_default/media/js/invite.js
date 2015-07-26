define(function(require,exports,module){
	require.async('subject/jquery.min.js',function(){
		require.async('subject/jquery-ui.min.js',function(){
			require.async('subject/jquery.fullPage.min.js',function(){
				require.async('ZeroClipboard2.js',function(){
					/*require('subject/jquery.min');
					require('subject/jquery-ui.min');
					require('subject/jquery.fullPage.min');
					require('ZeroClipboard2');*/
						if($.browser.msie && $.browser.version < 10){
							$('body').addClass('ltie10');
						}
						$.fn.fullpage({
							verticalCentered: false,
							loopBottom:true,
							anchors: ['page1', 'page2', 'page3','page4'],
							navigation: true,
							navigationTooltips: ['', '', '','']
						});
						
						//复制邀请链接
					    $.ajax({
							type:"post",
							url:"/member/invite/getInviteLink.html?trandomTime="+(new Date()).getTime(),
							dataType:"json",
							success:function(json){
					    	//alert(json.inviteUrl);
								$("#domainLink").val(json.inviteUrl);
								//alert($("#domainLink").val());
								ZeroClipboard.setMoviePath('/themes/theme_default/media/js/ZeroClipboard.swf'); 
								//创建ZeroClipboard对象 
								 clip = new ZeroClipboard.Client();
								 clip.setHandCursor(true); 
								 //加载事件，在mouseOver事件中将需要复制的内容传到flahs文件中保存 
								 clip.addEventListener('mouseOver', function(client) { 
								 	clip.setText($("#domainLink").val()); 
								 }); 
								 //复制成功后弹出对话框 
								 clip.addEventListener('complete', function(client, text) {
								 	$(".c_copy_success").show().fadeOut(1000);
								 }); 
								 //指定实现复制功能对象 
								 clip.glue('Copy');
							     
				
							}
					    
					    });
						//分享到
						bShareOpt = {
						   uuid: "", 
						   url: "http://www.jinshangdai.com", //商品的永久链接
						   summary: "{晋商贷}", //商品描述
						   pic: "./../{$goods_info.goods_img}", //商品图片链接
						   vUid: "$_SESSION['user_id']|$_SESSION['user_name']", //用户id，为了让您能够知道您网站的注册用户分享、喜欢了哪些商品
						   product: "{$goods_info.goods_name}", //商品名称
						   price: "{$goods_info.promote_price}", //商品价格
						   brand: "{$brand_name}", //商品品牌
						   tag: "{$value.label}", //商品标签
						   category: "{$cat_data.cat_name}", //商品分类
						   template: "1" 
						};
						var Wheight=$(window).height();
						if(Wheight<830){
							$(".tell_friend").css({backgroundSize:"220px 130px"});
							$(".hgroup").css({backgroundSize:"500px 140px"});
							$(".ready").css({backgroundSize:"160px 50px"});
							$(".relaxed").css({backgroundSize:"300px 66px"});
							$(".invite").css({backgroundSize:"300px 56px"});
							$(".section4 .road").css({top:"5%"});
							$(".p1").css({top:"24%"});
						}
				});
			});
		});
	});
});