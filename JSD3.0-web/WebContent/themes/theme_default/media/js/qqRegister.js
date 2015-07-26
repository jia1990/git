define(function(require, exports,module){
	require('jquery');
	require('alert');
	//表单验证
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			$("#qqBound").validate({
				rules: {},
				messages:{},
				errorPlacement:function(error, element){},
				success:function(element){
				},
				submitHandler: function(form,event,validator) 
				{     
				   	require.async('jquery.form',function(){
				   		$(form).ajaxSubmit(function(data){
					    	  if(data.result == true)
				    		  {
					    		  var nickname  = $(".nickname").val();
				    		     var figureUrl  = $(".figureUrl").val();
					    		  location.href = "/member/main.html";
				    		  } else {
				    			  alert(data.msg);
				    			/*  $.alert(data.msg,"提示",function(){},true);*/
				    		  }
				        });
				   	})
				}  
			});
		})
	})

});
