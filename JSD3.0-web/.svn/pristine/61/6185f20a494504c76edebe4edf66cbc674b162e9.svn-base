define(function(require,exports,module){
    require('jquery');
    require('base');
    require('jquery.jqzoom');
    $.ajax({
		url:"/member_borrow/useridentify/thirdPartyIsOpen.html",
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.result==false){
				alerts("认证提示",$(".pss").html(),560,240);		
			}
		}
	})
    var param = "id="+$("#goodId").val();
    var type = "load";
    goodsClass(param,type);
    var colorBtn = "";
    var sizeBtn = "";
    var vesionBtn = "";
    $("#periodSelect").val(1) ;
    $("#oneRepay").val("0") ;
    $(".select_option").find("li").click(function(){
    	var period = $(this).attr("value") ;
    	var id = $("#goodId").val() ;
    	var onePay = $("#oneRepay").val() ;
    	if(onePay==""){
    		onePay = 0.00 ;
    	}
    	$.ajax({
	          type:"post",
	          url:"/member_borrow/getAccountByInstall.html",
	          data:{id:id,period:period,onePay:onePay},
	          dataType:"json",
	          success:function(json){
	        	  $("#monthTotal").html(json.total);
	        	  $("#monthRepay").html(json.repay);
	        	  $("#feeVal").html(json.fee);
	        	  $("#periodVal").html(period+"个月") ;
	          }
    	}) ;
    }) ;
    $("#oneRepay").blur(function(){
    	if($(this).val() < 0){
    		$(this).val(0);
    	}
    	var period = $(".select_option").find(".selected").attr("value") ;
    	var id = $("#goodId").val() ;
    	var onePay = $("#oneRepay").val() ;
    	var total = $(".i-account").html();
    	//alert(total);
    	if(onePay==""){
    		onePay = 0.00 ;
    	}
    	if(Number(onePay) >= Number(total)){
    		$("#oneRepay").val(total);
    		onePay = total ;
    		$(".Ypayments2").addClass("yListrclickem").siblings().removeClass("yListrclickem");
    		$(".y-show-hidden-divs").hide();
    		$(".Yininstallment2").show();
    		$(".Yininstallment1").hide();
    		
    	}
    	$.ajax({
	          type:"post",
	          url:"/member_borrow/getAccountByInstall.html",
	          data:{id:id,period:period,onePay:onePay},
	          dataType:"json",
	          success:function(json){
	        	  $("#monthTotal").html(json.total);
	        	  $("#monthRepay").html(json.repay);
	        	  $("#feeVal").html(json.fee);
	        	  $("#periodVal").html(period+"个月") ;
	          }
    	}) ;
    }) ;
    $(".Yininstallment1,.Yininstallment2").click(function(){  // 分期购买
      	var period = $(".select_option").find(".selected").attr("value") ;
    	var id = $("#goodId").val() ;
    	var onePay = $("#oneRepay").val() ;
    	var type=$(this).data("val") ;
    	if(onePay==""){
    		onePay = 0.00 ;
    	}
    	//fgq
    	if(onePay==0 && type ==2){
    		onePay = $(".i-account").html() ;
    	}
    	
    	$.ajax({
    		url:"/member_borrow/useridentify/thirdPartyIsOpen.html",
    		type:"get",
    		dataType:"json",
    		success:function(data){
    			if(data.result){
    				window.location.href="/member_borrow/buyPre.html?id="+id+"&period="+period+"&onePay="+onePay+"&type="+type ;
    			}else{
    				alerts("认证提示",$(".pss").html(),560,240);		
    			}
    		}
    	})
    }) ;
    function onclick(){
    	$(".left-extra ul li").eq(0).find("em").unbind("click");
    	$(".left-extra ul li").eq(1).find("em").unbind("click");
    	$(".left-extra ul li").eq(2).find("em").unbind("click");
    	//点击颜色事件
    	$(".left-extra ul li").eq(0).find("em").click(function(){
    		if(colorBtn != $(this).attr("data-val")){
        		$(this).addClass("yListrclickem").siblings().removeClass("yListrclickem");
        		var param = "id="+$("#goodId").val() + "&color=" + $(this).attr("data-val");
        		goodsClass(param,"color");
        		colorBtn = $(this).attr("data-val");
        		/*var vesion = $(".left-extra ul li").eq(1).find(".yListrclickem").attr("data-val");
        		var size = $(".left-extra ul li").eq(2).find(".yListrclickem").attr("data-val");
        		param = "id="+$("#goodId").val() + "&color=" + $(this).attr("data-val") + "&size=" + size + "&vesion=" + vesion;
        	    sizeBtn = size;
        	    vesionBtn = vesion;
        		goodsClass(param,"size");*/
    		}
    	})
    	//点击版本事件
    	$(".left-extra ul li").eq(1).find("em").click(function(){
    		if(vesionBtn != $(this).attr("data-val")){
        		$(this).addClass("yListrclickem").siblings().removeClass("yListrclickem");
        		var color = $(".left-extra ul li").eq(0).find(".yListrclickem").attr("data-val");
        		var vesion = $(".left-extra ul li").eq(1).find(".yListrclickem").attr("data-val");
        		var param = "id="+$("#goodId").val() + "&vesion=" + vesion + "&color=" + color;
        		vesionBtn = $(this).attr("data-val");
        		goodsClass(param,"vesion");
    		}
    	})
    	//点击尺寸事件
    	$(".left-extra ul li").eq(2).find("em").click(function(){
    		if(sizeBtn != $(this).attr("data-val")){
        		$(this).addClass("yListrclickem").siblings().removeClass("yListrclickem");
        		var color = $(".left-extra ul li").eq(0).find(".yListrclickem").attr("data-val");
        		var vesion = $(".left-extra ul li").eq(1).find(".yListrclickem").attr("data-val");
        		var size = $(".left-extra ul li").eq(2).find(".yListrclickem").attr("data-val");
        		var param = "id="+$("#goodId").val() + "&size=" + size + "&color=" + color + "&vesion=" + vesion;
        		sizeBtn = size;
        		goodsClass(param,"size");
    		}
    	})
    }
    //获取商品分类方法
    function goodsClass(param,type){
	    $.ajax({
	          type:"post",
	          url:"/member_borrow/goodsClassification.html",
	          data:param,
	          dataType:"json",
	          success:function(json){
	              require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
	                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
	                	  if(type == "color" || type == "vesion" || type == "size"){//加载与点击颜色时触发
	                		  var html = "";
	                		  for(var i=0;i<json.vesionList.length;i++){
	                			  if(json.vesionList[i].status){
	                				 html = html + "<em";
	                				 	if(json.vesionList[i].vesion == json.goods.vesion){
	                				 		html = html+ " class='yListrclickem'";
	                				 	}
	                				 html = html + " data-val='"+ json.vesionList[i].vesion +"'><b>"+ json.vesionList[i].vesion +"</b><i></i></em> ";
	                			  }else{
	                				  html = html + "<a><b>"+ json.vesionList[i].vesion +"</b></a> ";
	                			  }
	                		  }
	                		  $(".left-extra ul li .left-extrainl").eq(1).html(html);
	                	  }
	                	  if(type == "vesion" || type == "color" || type == "size"){//加载与点击版本是触发
	                		  var html = "";
	                		  for(var i=0;i<json.sizeList.length;i++){
	                			  if(json.sizeList[i].status){
	                				  html = html + "<em";
	                				  if(json.sizeList[i].name == json.goods.size){
	                					 // alert("ok");
	                					  html = html+ " class='yListrclickem'";
	                				  }
	                				  html = html + "><b>"+ json.sizeList[i].name +"</b><i></i></em> ";
	                			  }else{
	                				  html = html + "<a><b>"+ json.sizeList[i].name +"</b></a> ";
	                			  }
	                		  }
	                		  $(".left-extra ul li .left-extrainl").eq(2).html(html);
	                	  }
	                	  if(type == "vesion" || type == "color" || type == "size"){
	                		  $(".colorp00 i").eq(0).html(json.goods.cost);
	                		  $(".colorp00 i").eq(1).html(json.goods.goodsApr + "%");
	                		  $(".colorp00").eq(2).find("em").eq(0).html(json.goods.cost + json.apr);
	                		  $(".colorp00").eq(2).find("em").eq(1).html(json.goods.cost);
	                		  $(".colorp00").eq(2).find("em").eq(2).html(json.apr);
	                		//JSDBET-790 gjh 2015-3-12 start
	                		  $("#goodId").val(json.goods.id);
	                		//JSDBET-790 gjh 2015-3-12 end
	                	  }
	                	  //alert();
	                	  onclick();
	                	//JSDBET-790 gjh 2015-3-12 start
		                	var period = 1 ;
		                  	var id = $("#goodId").val() ;
		                  	var onePay = $("#oneRepay").val() ;
		                  	if(onePay==""){
		                  		onePay = 0.00 ;
		                  	}
		                  	$.ajax({
		              	          type:"post",
		              	          url:"/member_borrow/getAccountByInstall.html",
		              	          data:{id:id,period:period,onePay:onePay},
		              	          dataType:"json",
		              	          success:function(json){
		              	        	  $("#monthTotal").html(json.total);
		              	        	  $("#monthRepay").html(json.repay);
		              	        	  $("#feeVal").html(json.fee);
		              	        	  $("#periodVal").html(period+"个月") ;
		              	          }
		                  	}) ;
		                  //JSDBET-790 gjh 2015-3-12 end
	                	  //$(".left-extra").html(Handlebars.compile(require("../../tpl/member_borrow/stagesDetail.tpl"))(json));
	                  });
	              });
	          },
	          error:function(e){
	        	  history.go(0);
	          }
	    });
    }
    
    $(".left-extra ul li em").click(function(){
		$(this).addClass("yListrclickem").siblings().removeClass("yListrclickem");
	})
	
	if($(".items li").length<=5){
		$(".spec-scroll .prev").hide();
		$(".spec-scroll .next").hide();
	}
	$(".Ypayments2").click(function(){
		$(".y-show-hidden-divs").hide();
		$(".Yininstallment2").show();
		$(".Yininstallment1").hide();
	})
	$(".Ypayments1").click(function(){
		$(".y-show-hidden-divs").show();
		$(".Yininstallment1").show();
		$(".Yininstallment2").hide();
	})
});

