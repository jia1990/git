define(function(require,exports,module){
    require('jquery');
    require('alert');
    $(".mobile").val("");
	$(".yanzm").val("");
	
    function checkMobile(){
    	var phone = $(".mobile").val();
    	var reg= /^[1][35876]\d{9}$/; //验证手机号码   
    	if(phone ==''){
    		$.alert("请输入手机号码","提示",function(){},true);
    		return false;
    	}else if(!reg.test(phone)){
    		$.alert("请输入正确的手机号码","提示",function(){},true);
	    		return false;
    	}
    	return true;
    }
    function yanzm(){
    	var yanzmCode = $(".yanzm").val();
    	if(yanzmCode ==''){
    		$.alert("请输入验证码","提示",function(){},true);
    		return false;
    	}else if(yanzmCode.length!=4){
    		$.alert("请输入正确的验证码","提示",function(){},true);
	       return false;
    	}
    	return true;
    }
    
	$(".SMSfree").click(function(){
		var mobile = $(".mobile").val();
		var yanzmCode = $(".yanzm").val();
		//校验基本数据正确
		if(checkMobile()&&yanzm()){
			 $.ajax({
					type:"post",
					url:"/member/inviteGift/sendMobileMsg.html",
					data:{mobile:mobile,yanzm:yanzmCode},
					dataType:"json",
					success:function(json){
						if(json.result){
							/*alert("发送成功！");*/
							$.alert("发送成功！","提示",function(){},true);
							$(".mobile").val("");
							$(".yanzm").val("");
							$(".ok_btn").click(function(){
    							window.location.reload();
    						})
						}else{
							/*alert("发送失败请重新发送！");*/
							$.alert(json.msg,"提示",function(){},true);
							$(".ok_btn").click(function(){
    							window.location.reload();
    						})
						}
					}
			    
			    });
		}
		
		
	})
	
	
    
    
});