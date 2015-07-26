﻿(function($){
	var selects=$('select');//获取select
	for(var i=0;i<selects.length;i++){
		createSelect(selects[i],i);
	}
	function createSelect(select_container,index){
		
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
		createOptions(index,ul_option);//创建option
		//点击显示框
		tag_select.toggle(function(){
			ul_option.show();
		},function(){
			ul_option.hide();
		});
		$(".select_box ul").mouseleave(function(){
			$(this).hide();
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
						nextitem.find("select").html("<option value='-1'>请选择</option>");
						nextitem.next().find("select").html("<option value='-1'>请选择</option>");
						nextitem.find(".send").val(-1);
						nextitem.next().find(".send").val(-1);
							for(i=0;i<json.length;i++) {                                                                                                                                                                                        
								var city=json[i];
								//alert(city.name);
								nextitem.find("select").append("<option value="+city.id+">"+city.name+"</option>");
							nextitem.find(".select_box").remove();
							nextitem.next().find(".select_box").remove();
							//var newitem = nextitem.find("select");
						}
						if(nextitem.html() != ""){
							createSelect(nextitem.find("select"),index+1);
							createSelect(nextitem.next().find("select"),index+2);
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
						createSelect(nextitem.find("select"),index+1);
						createSelect(nextitem.next().find("select"),index+1);
						thisitem.find(".send").val(selectitem.val());
					}
				}
			}else if(selectId == "city"){
				if(selectitem.val() != "" && selectitem.val() != "请选择" && selectitem.val() != -1){
					$.ajax({
						type:"get",
						url:"/school/getSchool.html?id="+Math.random(),
						dataType:"json",	        
						data:{
						parentCode:selectitem.val()
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
							nextitem.find(".select_box").remove();
							//var newitem = nextitem.find("select");
						
						if(nextitem.html() != ""){
							createSelect(nextitem.find("select"),index+1);
							thisitem.find(".send").val(selectitem.val());
						}
					}
					});
				}else{
					nextitem.find("select").html("<option value='-1'>请选择</option>");
					nextitem.next().find("select").html("<option value='-1'>请选择</option>");
					nextitem.find(".select_box").remove();
					if(nextitem.html() != ""){
						createSelect(nextitem.find("select"),index+1);
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
	function createOptions(index,ul_list){
		//获取被选中的元素并将其值赋值到显示框中
		var options=selects.eq(index).find('option'),
			selected_option=options.filter(':selected'),
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
})(jQuery)