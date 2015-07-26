define(function(require,exports,modlue){
	require('jquery');
	require('jquery-ui.min');
	require('jquery.fullPage.min');
	
	$(function(){
		if($.browser.msie && $.browser.version < 10){
			$('body').addClass('ltie10');
		}
		$.fn.fullpage({
			verticalCentered: false,
			anchors: ['page1', 'page2', 'page3','page4','page5','page6'],
			navigation: true,
			navigationTooltips: ['', '', '', '', '', ''],
			loopBottom:true
		});
	})
	
});