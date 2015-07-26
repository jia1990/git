/**
 * 晋商贷
 * @name alert美化提示
 * @description 功能模块
 * @date 2014-08-04
 * @version $V1.0$
 */
//define(function(require, exports, module) {
	//引入依赖函数
	//require('jquery');
	//$.extend({
		//alert: function(val, tit, fn, isBtn) {
        function alertNew(val, tit, fn, isBtn){
			var o = {
				sTit: "提示", //标题
				sVal: "", //内容
				bBtn: true, //是否显示按钮
				fnAdditional: "" //关闭后执行的回调
			}
			if (typeof val == "object") {
				o = $.extend(o, val);
			} else {
				o.sTit = tit || "提示";
				o.sVal = val;
				o.fnAdditional = fn;
				o.bBtn = isBtn;
			}
			$('#qui_pop,#qui_shade').remove();
			var oPop, //弹出窗对象
				oShade, //遮罩元素对象
				oClose; //关闭按钮对象
			var sHtmlPop = "";
			sHtmlPop += '<div id="qui_pop" class="qui_pop">';
			sHtmlPop += '<div class="tits clearfix">';
			sHtmlPop += '<h4>' + o.sTit + '</h4>';
			sHtmlPop += '<a href="javascript:;" title="关闭" id="pop_close"></a>';
			sHtmlPop += '</div>';
			sHtmlPop += '<div class="conts"></div>';
			sHtmlPop += '</div>';
			$("#qui_pop,#qui_shade").remove();
			$("body").append(sHtmlPop);
			oPop = $("#qui_pop");
			oClose = $("#pop_close");
			oPop.find(".conts")
				.append(o.bBtn ? '<div class="alert_info">' + o.sVal + '</div><div class="alert_operation"><a class="ok_btn" id="alertOk" href="javascript:;" title="确认">确&nbsp;&nbsp;认</a></div>' : '<div class="alert_info">' + o.sVal + '</div>');

			oPop.css({
				"width": "inherit",
				"height": "inherit",
				"min-width": "380px",
				"max-width": "600px",
				"min-height": "150px"
			});
			oPop.css({
				marginTop: -parseInt(oPop.height()) / 2,
				marginLeft: -parseInt(oPop.width()) / 2
			});
			if (o.bBtn) {
				$("#alertOk").click(function() {
					oClose.click();
				}).focus();
				oClose.hide();
			}

			//遮罩
			var sShade = '<div id="qui_shade" class="qui_shade"></div>';
			$("body").append(sShade);
			oShade = $("#qui_shade");
			oShade.css({
				"opacity": 0.4
			});
			oClose.bind("click", function() {
				oPop.remove();
				oShade.remove();
				o.fnAdditional && o.fnAdditional();
			});
		}
	//});
//});