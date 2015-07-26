define(function(require,exports,modlue){
	require('jquery');
	$(window).resize(function() {
		$(".calculatorCpmBox").css({left:($(window).width()-852)/2+"px",top:($(window).height()-444)/2+"px"});
		$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
	});
	$(window).resize();
	$(".calculatorCpmBox h1 img").click(function(){
		$(".calculatorCpmBox").hide();
		$(".calculatorCpmBottom").hide();
	})
	$(".calculatorCpmBox").show();
	$(".calculatorCpmBottom").show();
});