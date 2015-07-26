define(function(require,exports,module){
	require('jquery');
	require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
        require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
			$(".c_deal_record").append(Handlebars.compile(require("../../tpl/member/memberCreidt.tpl")));
			$(window).resize(function(){
				$(".c_cofirm_buy").css({left:($(window).width()-$(".c_cofirm_buy").width())/2+"px",top:($(window).height()-$(".c_cofirm_buy").outerHeight())/2+"px"});
				$(".c_buy_success").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
				$(".c_buy_revocation").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
				$(".c_buy_revocationing").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
				//JSDP-35 gjh 2015-4-30 start
				$(".c_buy_revocationing1").css({left:($(window).width()-$(".c_buy_success").width())/2+"px",top:($(window).height()-$(".c_buy_success").height())/2+"px"});
				//JSDP-35 gjh 2015-4-30 end
			})
			$(window).resize();
			/**/
			$(".cliam_title dd").click(function(){
				var index=$(this).index(".cliam_title dd");
				$(".cliam_title dd").css({color:"#333"});
				$(this).css({color:"#0697DA"});
				$(".cliam_list").hide();
				$(".cliam_list").eq(index).show();
			})
			/**/
			$(".c_member_list dd").click(function(){
				$(this).addClass("c_select_this").siblings().removeClass("c_select_this");
				var index=$(this).index(".c_member_list dd");
				$(".record_conss").eq(index).show().siblings().hide();
			})
			$(".yhoverems").hover(function(){
				$(this).parent("span").parent("li").find(".y_tooltips").show();;
			},function(){
				$(this).parent("span").parent("li").find(".y_tooltips").hide();;
			})
			$(".c_cliam_close2").click(function(){
				$(".c_buy_bj").hide();
				$(".c_buy_revocationing").hide();
			})
			$(".c_cliam_close21").click(function(){
				$(".c_buy_bj").hide();
				$(".c_buy_revocationing1").hide();
			})
			var tpl = require('../../tpl/member/CreditSwingout.tpl');//载入tpl模板
		   	require.async(['./creidtShowDetailTable'],function(showTable){
		   		showTable.ajaxUrl('/member/credit/swingout.html?size=5&randomTime='+(new Date()).getTime(),tpl,"swing_out");
		   	});
			$(".swingout").click(function(){
			    var tpl = require('../../tpl/member/CreditSwingout.tpl');//载入tpl模板
			   	require.async(['./creidtShowDetailTable'],function(showTable){
			   		showTable.ajaxUrl('/member/credit/swingout.html?size=5&randomTime='+(new Date()).getTime(),tpl,"swing_out");
			   	});
		    });
			$(".mayswingout").click(function(){
				  var tpl = require('../../tpl/member/CreditMaySwingout.tpl');//载入tpl模板
			   	  require.async(['./creidtShowDetailTable'],function(showTable){
			   		  showTable.ajaxUrl('/member/credit/maySwingoutTender.html?size=5&randomTime='+(new Date()).getTime(),tpl,"tender_mayswingout");
			   	  });
		    });
			$(".tendercreidt").click(function(){
				$("#c_mayswingout_kkpager").parent().hide() ;
				$("#tender_mayswingout_kkpager").parent().show() ;
			    var tpl = require('../../tpl/member/CreditMaySwingout.tpl');//载入tpl模板
			   	require.async(['./creidtShowDetailTable'],function(showTable){
			   		 showTable.ajaxUrl('/member/credit/maySwingoutTender.html?size=5&randomTime='+(new Date()).getTime(),tpl,"tender_mayswingout");
			   	});
		    });
			$(".clcreidt").click(function(){
				$("#tender_mayswingout_kkpager").parent().hide() ;
				$("#c_mayswingout_kkpager").parent().show() ;
				var tpl = require('../../tpl/member/CreditMaySwingout.tpl');//载入tpl模板
		   	  	require.async(['./creidtShowDetailTable'],function(showTable){
		   		  showTable.ajaxUrl('/member/credit/maySwingoutCredit.html?size=5&randomTime='+(new Date()).getTime(),tpl,"c_mayswingout");
		   	    });
		    });
		    $(".overswingout").click(function(){
			      var tpl = require('../../tpl/member/CreditMaySwingoutOver.tpl');//载入tpl模板
			   	  require.async(['./creidtShowDetailTable'],function(showTable){
			   		  showTable.ajaxUrl('/member/credit/creditedDetail.html?size=5&randomTime='+(new Date()).getTime(),tpl,"over_swingout");
			   	  });
		    });
		    $(".buyincredit").click(function(){
			      var tpl = require('../../tpl/member/CreditBuyIn.tpl');//载入tpl模板
			   	  require.async(['./creidtShowDetailTable'],function(showTable){
			   		  showTable.ajaxUrl('/member/creditlog/buyCreditedDetail.html?size=5&randomTime='+(new Date()).getTime(),tpl,"buy_incredit");
			   	  });
		    });
        })
	});
});