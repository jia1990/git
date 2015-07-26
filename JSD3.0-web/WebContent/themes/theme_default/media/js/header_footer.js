define(function(require,exports,modlue){
	require('jquery');
	
	$(function(){
		$(".c_weixin").hover(function(){
			$(".c_foot_weixin").show();
		},function(){
			$(".c_foot_weixin").hide();
		})
	})
	/*头部 收藏本站代码 */
	jQuery.fn.addFavorite = function(l, h) {
		return this.click(function() {
			var t = jQuery(this);
			if (jQuery.browser.msie) {
				window.external.addFavorite(h, l);
			} else if (jQuery.browser.mozilla || jQuery.browser.opera) {
				t.attr("rel", "sidebar");
				t.attr("title", l);
				t.attr("href", h);
			} else {
				alert("请使用Ctrl+D将本页加入收藏夹！");
			}
		});
	};
	$(function() {
		$('#fav').addFavorite('收藏本站', location.href);
	});
});
