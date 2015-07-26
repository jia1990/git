define(function(require, exports, modlue) {
	require('jquery');


	// 给省份下拉选择框注册change事件
	$(".y_input_province").change(function() {
		$(".y_input_city").empty();
		$(".y_input_city").append("<option value=''>请选择</option>");
		var id = $(this).val();
		getCity(id);
	});

	/*
	 * 省份发生变化 AJAX一步后台获取与此省份关联的城市
	 * 
	 */
	function getCity(id) {
		// ajax逻辑
		$.ajax({
			type : "get",
			async : false,
			url : "/region/regionList.html?id=" + Math.random(),
			dataType : "json",
			data : {
				pId : id
			},
			success : function(json) {
				for (i = 0; i < json.length; i++) {
					var city = json[i];
					$(".y_input_city").append("<option value=" + city.id + ">" + city.name+ "</option>");
				}
			}
		});
	}
	/*
	 * 初始化页面加载收货地址列表
	 */
	$.ajax({
		type : "get",
		url : "/member/logisticsAddress/addressList.html?id="+ Math.random(),
		dataType : "json",
		success : function(data) {
			if (data.list.length == 3) {
				$("#name").attr('disabled', true);
				$("#detailAddress").attr('disabled', true);
				$("#zipCode").attr('disabled', true);
				$("#phone").attr('disabled', true);
				$("#province").attr('disabled', true);
				$("#city").attr('disabled', true);
				$("#formsub").css("background", "#dbdbdb");
				$("#formsub").attr('disabled', true);
			} else {
				$("#name").attr('disabled', false);
				$("#detailAddress").attr('disabled', false);
				$("#zipCode").attr('disabled', false);
				$("#phone").attr('disabled', false);
				$("#province").attr('disabled', false);
				$("#city").attr('disabled', false);
				$("#formsub").attr('disabled', false);

			}
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function() {
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function() {
				require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min' ],function() {
				var tpl = require('../../tpl/member/addressList.tpl');// 载入tpl模板
				var template = Handlebars.compile(tpl);
				var html = template(data);
				$('.y_address_statistics').html(html);
				$(".y_address_statistics tr").hover(
				function() {$(this).find(".y_address_statistics8 a").css({display : "inline-block"});},
					function() {$(this).find(".y_address_statistics8 a").css({display : "none"});
								});
				var updateBtn;
				// 修改收货地址
				$(".updateAddress").click(function() {
					var id = $(this).data("val");
					if (data.list.length == 3) {
						$("#name").attr('disabled',false);
						$("#detailAddress").attr('disabled',false);
						$("#zipCode").attr('disabled',false);
						$("#phone").attr('disabled',false);
						$("#province").attr('disabled',false);
						$("#city").attr('disabled',false);
						$("#formsub").css("background","#12adff");
						$("#formsub").attr('disabled',false);
					}
					if(updateBtn != id){
						updateBtn = id;
						updateAddress(id);
					}
				});
				// 删除收货地址
				$(".delAddress").click(function() {
						var id = $(this).data("val");
						$.layer({
								type : 1,
								closeBtn : false,
								title : false,
								area : [
										'400px',
										'200px' ],
								shade : [
										0.5,
										'#000' ],
								border : 0,
								page : {
									
									html : '<div class="fileconfirm"> <i class="address_instruc">收货地址提示 </i><span style="display:block;text-align:center;height:80px;line-height:80px;font-size: 18px;">您确定删除此收货地址吗？ <div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">删除</a><a href="javascript:;"  class="cancleBtn closeBtn" style="background:#dddddd;">取消</a></div></span> <a class="float_right closeBtn address_close" href="javascript:;"></a></div>'
												}
											});
									// 提现失败操作
									$(".closeBtn").click(function() {
										layer.closeAll();
													});
									$(".okBtn").click(function() {
										deleteAddress(id);
													});
								});
				// 修改默认收货地址
				$(".changeIsDefault").click(function() {
					var id = $(this).data("val");
					updateIsdefaultAddress(id);
								});

					})
				})
			})
				}
			});

	// 保存收货地址信息
	$("#formsub").click(function() {
						var id = $("#id").val();
						var name = $("#name").val();
						var province = $("#province1").val();
						var city = $("#city1").val();
						var county = $("#county1").val(); 
						var detailAddress = $("#detailAddress").val();
						var zipCode = $("#zipCode").val();
						var phone = $("#phone").val();
						var addAddressToken  = $(".addAddressToken").val();
						if (name == "") {
							$(".y_spans_name").html("<font style='color:#FC6210'>请填写用户名</font>");
							$(".y_spans_name").css("display", "block");
							return;
						}
						//JSDBET-817 gjh 2015-3-19 start
						if (/[^\u4E00-\u9FA5]/g.test(name)) {
							$(".y_spans_name").html("<font style='color:#FC6210'>请输入中文</font>");
							$(".y_spans_name").css("display", "block");
							return;
						}
						//JSDBET-817 gjh 2015-3-19 end
						if (province == "" || province == -1) {
							$(".y_spans_province").html("<font style='color:#FC6210'>请选择省</font>");
							$(".y_spans_province").css("display", "block");
							return;
						}else{
							$(".y_spans_province").css("display", "none");
						}
						if (city == "" || city == -1) {
							$(".y_spans_city").html("<font style='color:#FC6210'>请选择市</font>");
							$(".y_spans_city").css("display", "block");
							return;
						}else{
							$(".y_spans_city").css("display", "none");
						}
						if (county == "" || county == -1) {
							$(".y_spans_county").html("<font style='color:#FC6210'>请选择区</font>");
							$(".y_spans_county").css("display", "block");
							return;
						}else{
							$(".y_spans_county").css("display", "none");
						}
						if (detailAddress == "") {
							$(".y_spanstextarea").html("<font>请填写详细地址信息</font>");
							$(".y_spanstextarea").css("display", "block");
							return;
						}
						if (zipCode == "") {
							$(".y_spans_code").html("<font style='color:#FC6210'>邮政编码不为空</font>");
							$(".y_spans_code").css("display", "block");
							return;
						}
						if (phone == "") {
							$(".y_spans_phone").html("<font style='color:#FC6210'>请填写手机号码</font>");
							$(".y_spans_phone").css("display", "block");
							return;
						}
						if (!checkTelephone(phone)) {
							$(".y_spans_phone").html("<font style='color:#FC6210'>联系电话格式错误</font>");
							$(".y_spans_phone").css("display", "block");
							return;
						}
						if (!checkPostal(zipCode)) {
							$(".y_spans_code").html("<font style='color:#FC6210'>邮政编码格式不正确</font>");
							$(".y_spans_code").css("display", "block");
							return;
						}
						$.ajax({
								url : "/member/logisticsAddress/saveUserLogisticsAddress.html",
								type : "post",
								data : {
									id : id,
									name : name,
									province : province,
									city : city,
									county : county,
									detailAddress : detailAddress,
									zipCode : zipCode,
									phone : phone,
									addAddressToken:addAddressToken
								},
								success : function(result) {
									addresslist();

									$("#id").val("");
									$("#name").val("");
									$("#province").val("");
									$("#city").val();
									$("#detailAddress").val("");
									$("#zipCode").val("");
									$("#phone").val("");

									window.location.reload();
									}
								});

					});

	/***************************************************************************
	 * 手机号码 电话号码和非空 李建云
	 **************************************************************************/
	function checkTelephone(phone) {

		var flag = false;
		var reg = /^[1][358]\d{9}$/; // 验证手机号码
		var a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/;

		if ((!reg.test(phone)) && (!a.test(phone))) {
			flag = false;
		} else {
			flag = true;
		}
		return flag;
	}

	/***************************************************************************
	 * 验证邮编格式
	 * 
	 * 李建云
	 **************************************************************************/
	function checkPostal(zipCode) {
		var flag = false;
		var re = /^[0-9][0-9]{5}$/;

		if (!re.test(zipCode)) {

			flag = false;
		} else {
			flag = true;
		}
		return flag;
	}

	// 修改收货地址
	function updateAddress(id) {
		$.ajax({
			url : "/member/logisticsAddress/queryUserLogisticsAddressById.html?id="
					+ id,
			type : "get",
			dataType : "json",
			success : function(data) {

			var id = data.userLogisticsAddress.id;
			var name = data.userLogisticsAddress.name;
			var province = data.userLogisticsAddress.regionProvince.id;
			var city = data.userLogisticsAddress.regionCity.id;
			var county = data.userLogisticsAddress.regionCounty.id;
			
			var cityName = data.userLogisticsAddress.regionCity.name;
			var detailAddress = data.userLogisticsAddress.detailAddress;
			var zipCode = data.userLogisticsAddress.zipCode;
			var phone = data.userLogisticsAddress.phone;
				var provinceSelect = $(".adds").find(".province");
				var provinceli = $(".adds").find(".select_option").eq(0);
				var provinceshowbox = $(".adds").find(".select_showbox").eq(0);
				var citySelect = $(".adds").find(".city");
				var cityli = $(".adds").find(".select_option").eq(1);
				var cityshowbox = $(".adds").find(".select_showbox").eq(1);
				var countySelect = $(".adds").find(".county");
				var countyli = $(".adds").find(".select_option").eq(2);
				var countyshowbox = $(".adds").find(".select_showbox").eq(2);
				
				var provinceSend = $(".adds").find(".send").eq(0);
				var citySend = $(".adds").find(".send").eq(1);
				var countySend = $(".adds").find(".send").eq(2);
				provinceSend = data.userLogisticsAddress.regionProvince.id;
				citySend = data.userLogisticsAddress.regionCity.id;
				countySend = data.userLogisticsAddress.regionCounty.id;
				//alert("修改获取-->"+countySend +data.userLogisticsAddress.regionCounty.name);
				for(var i = 0; i <= provinceSelect.find("option").index(); i++){//修改省
					if(data.userLogisticsAddress.regionProvince.id == provinceSelect.find("option").eq(i).val()){
						provinceSelect.find("option").eq(i).attr({selected:"selected"});
						provinceli.find("li").eq(i).addClass('selected').siblings().removeClass('selected');
						provinceshowbox.html(data.userLogisticsAddress.regionProvince.name);
						
					}
				}
					$.ajax({//获取修改市
						type:"get",
						url:"/region/regionList.html?id="+Math.random(),
						dataType:"json",	        
						data:{
						pId:data.userLogisticsAddress.regionProvince.id
					},
					success:function(json){
						citySelect.html("<option value='-1'>请选择</option>");
						//nextitem.next().find("select").html("<option value='-1'>请选择</option>");
						citySelect.next(".send").val(-1);
						//nextitem.next().find(".send").val(-1);
						for(i=0;i<json.length;i++) {                                                                                                                                                                                        
							var city=json[i];
							//alert(city.name);
							citySelect.append("<option value="+city.id+">"+city.name+"</option>");
							cityshowbox.parent().remove();
						//var newitem = nextitem.find("select");
						}
						//citySelect.next(".send").val(selectitem.val());
						createSelect(citySelect,citySelect.find("option"));
						citySelect = $(".adds").find(".city");
						cityli = $(".adds").find(".select_option").eq(1);
						cityshowbox = $(".adds").find(".select_showbox").eq(1);
						for(var i = 0; i <= citySelect.find("option").index(); i++){
							if(data.userLogisticsAddress.regionCity.id == citySelect.find("option").eq(i).val()){
								citySelect.find("option").eq(i).attr({selected:"selected"});
								cityli.find("li").eq(i).addClass('selected').siblings().removeClass('selected');
								cityshowbox.html(data.userLogisticsAddress.regionCity.name);
							}
						}
						$("#province1").val(provinceSend);
						$("#city1").val(citySend);
						$.ajax({//获取修改县
							type:"get",
							url:"/region/regionList.html?id="+Math.random(),
							dataType:"json",	        
							data:{
							pId:data.userLogisticsAddress.regionCity.id
						},
						success:function(json){
							countySelect.html("<option value='-1'>请选择</option>");
							//nextitem.next().find("select").html("<option value='-1'>请选择</option>");
							countySelect.next(".send").val(-1);
							//nextitem.next().find(".send").val(-1);
							for(i=0;i<json.length;i++) {                                                                                                                                                                                        
								var city=json[i];
								//alert(city.name);
								countySelect.append("<option value="+city.id+">"+city.name+"</option>");
								countyshowbox.parent().remove();
							//var newitem = nextitem.find("select");
							}
							//citySelect.next(".send").val(selectitem.val());
							createSelect(countySelect,countySelect.find("option"));
							countySelect = $(".adds").find(".county");
							countyli = $(".adds").find(".select_option").eq(2);
							countyshowbox = $(".adds").find(".select_showbox").eq(2);
							for(var i = 0; i <= countySelect.find("option").index(); i++){
								//alert(data.userLogisticsAddress.regionCounty.id+"   "+countySelect.find("option").eq(i).val());
								if(data.userLogisticsAddress.regionCounty.id == countySelect.find("option").eq(i).val()){
									//alert(data.userLogisticsAddress.regionCounty.id+"   "+countySelect.find("option").eq(i).val());
									countySelect.find("option").eq(i).attr({selected:"selected"});
									countyli.find("li").eq(i).addClass('selected').siblings().removeClass('selected');
									countyshowbox.html(data.userLogisticsAddress.regionCounty.name);
								}
							}
							//alert(countySend);
							$("#county1").val("修改最后---->"+countySend);
							
						}
						});
						$("#id").val(id);
						$("#name").val(name);
						$("#detailAddress").val(detailAddress);
						$("#zipCode").val(zipCode);
						$("#phone").val(phone);
						
						
						
					}
					});
					
				}
				})
	}

	// 删除收货地址
	function deleteAddress(id) {
		$.ajax({
			type : "get",
			url : "/member/logisticsAddress/deletelogisticsAddress.html?idd="+ Math.random(),
			dataType : "json",
			data : {
				id : id
			},
			success : function(json) {
				addresslist();
				window.location.reload();
			}
		});
	}

	// 修改默认收货地址
	function updateIsdefaultAddress(id) {

		$.ajax({
			type : "get",
			url : "/member/logisticsAddress/modifyIsDefault.html?idd="+ Math.random(),
			dataType : "json",
			data : {
				id : id
			},
			success : function(json) {
				addresslist();
				$("#id").val("");
				$("#name").val("");
				$("#province").val("");
				$("#city").val();
				$("#detailAddress").val("");
				$("#zipCode").val("");
				$("#phone").val("");

				window.location.reload();
			}
		});
	}

	// 删除完成以后加载列表
	function addresslist() {
		$.ajax({
				type : "get",
				url : "/member/logisticsAddress/addressList.html?id="+ Math.random(),
				dataType : "json",
				success : function(data) {
					require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function() {
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function() {
						var tpl = require('../../tpl/member/addressList.tpl');// 载入tpl模板
						var template = Handlebars.compile(tpl);
						var html = template(data);
							$('.y_address_statistics').html(html);
							})
						})
					}
				});
	}

	// 查询保存地址信息，还能保存几条地址
	$.ajax({
		url : "/member/logisticsAddress/queryAdderssCount.html?id="+ Math.random(),
		type : "get",
		dataType : "json",
		success : function(data) {
			var count = String(data.count);
			var otherCount = String(data.otherCount);
			$(".y_nums_statistics").append("已保存了<span class='y_nums_now'>" + count+ "</span>条地址，还能保存<span class='y_nums_residue'>"+ otherCount + "</span>条地址");
		}
	})
function createSelect(select_container,options){
		
		//创建select容器，class为select_box，插入到select标签前
		var tag_select=$('<div></div>');//div相当于select标签
		tag_select.attr('class','select_box');
		tag_select.insertBefore(select_container);
		
		//显示框class为select_showbox,插入到创建的tag_select中
		var select_showbox=$('<div></div>');//显示框
		select_showbox.css('cursor','pointer').attr('class','select_showbox').appendTo(tag_select);
		//创建option容器，class为select_option，插入到创建的tag_select中
		var ul_option=$('<ul></ul>');//创建option列表
		ul_option.attr('class','select_option');
		ul_option.appendTo(tag_select);
		createOptions(options,ul_option);//创建option
		//点击显示框
		tag_select.toggle(function(){
			ul_option.show();
		},function(){
			ul_option.hide();
		});
		var li_option=ul_option.find('li');
		li_option.on('click',function(){
			var selectitem = $(this).parent().parent().next().find("option").eq($(this).index());
			selectitem.attr("selected","selected");
			selectitem.siblings().removeAttr('selected');
			//createSelect(select_container,10);
			//getCounty(5);
			//alert($("#city").html());
			//createSelect($("#city"),$("#city").index() + 1);
			$(this).addClass('selected').siblings().removeClass('selected');
			var selectId = $(this).parent().parent().next().attr("class");
			var thisitem = $(this).parent().parent().parent();
			var nextitem = $(this).parent().parent().parent().next();
			if(selectId == "province" ){
				if(selectitem.val() != "" && selectitem.val() != "请选择" && selectitem.val() != -1){
					$.ajax({
						type:"get",
						url:"/region/regionList.html?id="+Math.random(),
						dataType:"json",	        
						data:{
						pId:selectitem.val()
					},
					success:function(json){
						/*nextitem.find("select").html("<option value='-1'>请选择</option>");
						nextitem.next().find("select").html("<option value='-1'>请选择</option>");
						nextitem.find(".send").val(-1);
						nextitem.next().find(".send").val(-1);*/
							for(i=0;i<json.length;i++) {                                                                                                                                                                                        
								var city=json[i];
								//alert(city.name);
								nextitem.find("select").append("<option value="+city.id+">"+city.name+"</option>");
							nextitem.find(".select_box").remove();
							//var newitem = nextitem.find("select");
						}
						if(nextitem.html() != ""){
							createSelect(nextitem.find("select"),nextitem.find("select").index()+1);
							thisitem.find(".send").val(selectitem.val());
						}
					}
					});
				}else{
					nextitem.find("select").html("<option value='-1'>请选择</option>");
					nextitem.next().find("select").html("<option value='-1'>请选择</option>");
					nextitem.find(".select_box").remove();
					nextitem.next().find(".select_box").remove();
					if(nextitem.html() != ""){
						createSelect(nextitem.find("select"),nextitem.find("select option"));
						createSelect(nextitem.next().find("select"),nextitem.next().find("select option"));
						thisitem.find(".send").val(selectitem.val());
					}
				}
			}else if(selectId == "city"){//点击市之后加载时列表
				//alert(selectitem.val());
				if(selectitem.val() != "" && selectitem.val() != "请选择" && selectitem.val() != -1){
					$.ajax({
						type:"get",
						url:"/region/regionList.html?id="+Math.random(),
						dataType:"json",	        
						data:{
						pId:selectitem.val()
					},
					success:function(json){
						nextitem.find("select").html("<option value='-1'>请选择</option>");
						nextitem.next().find("select").html("<option value='-1'>请选择</option>");
						nextitem.find(".send").val(-1);
						nextitem.next().find(".send").val(-1);
							for(i=0;i<json.length;i++) {                                                                                                                                                                                        
								var city=json[i];
								//alert(city.name);
								nextitem.find("select").append("<option value="+city.id+">"+city.name+"</option>");
							}
							//var newitem = nextitem.find("select");
						if(nextitem.html() != ""){
							//JSDBET-817 gjh 2015-3-19 start
							nextitem.find(".select_box").remove();
							createSelect(nextitem.find("select"),nextitem.find("select option"));
							//JSDBET-817 gjh 2015-3-19 end
							thisitem.find(".send").val(selectitem.val());
						}
						var cityshowbox = $(".adds").find(".select_showbox").eq(1);
						
					}
					
					
					
					
					});
				}else{
					nextitem.find("select").html("<option value='-1'>请选择</option>");
					nextitem.next().find("select").html("<option value='-1'>请选择</option>");
					nextitem.find(".select_box").remove();
					if(nextitem.html() != ""){
						createSelect(nextitem.find("select"),nextitem.find("select option"));
						thisitem.find(".send").val(selectitem.val());
					}
				}
			}else{
				thisitem.find(".send").val(selectitem.val());
			}
			
			var value=$(this).text();
			select_showbox.text(value);
			ul_option.hide();
		});
		li_option.hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover');	
		},function(){
			li_option.removeClass('hover');
		});
	}
	function createOptions(options,ul_list){
		//获取被选中的元素并将其值赋值到显示框中
			selected_option=$(options).filter(':selected'),
			selected_index=selected_option.index(),
			showbox=ul_list.prev();
			showbox.text(selected_option.text());
		// Download by http://www.codefans.net
		//为每个option建立个li并赋值
			
		for(var n=0;n<options.length;n++){
			var tag_option=$('<li></li>'),//li相当于option
				txt_option=options.eq(n).text();
			tag_option.text(txt_option).css('cursor','pointer').appendTo(ul_list);
			//为被选中的元素添加class为selected
			if(n==selected_index){
				tag_option.attr('class','selected');
			}
		}
	}
});
