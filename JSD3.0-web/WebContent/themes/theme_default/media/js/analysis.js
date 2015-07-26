//define(function(require,exports,module){
	//require('jquery');
//处理直接访问地址无法加载到js的问题修复
//	var scripts=document.getElementsByTagName("script");
//    var src = '';
//    if(scripts && scripts.length>0) {
//        for(var i in scripts) {
//            if(scripts[i].src && scripts[i].src.match("analysis.js")) {
//                src = scripts[i].src;
//            }
//        }
//    }
//	$.ajax({
//		type:"post",
//		url:"/analysis/urlCollection.html?urlPara="+(src.match(new RegExp("(?:\\?|&)urlPara=(.*?)(?=&|$)"))||['',null])[1],
//		success: function(data){
//
//		},
//		error:function(){
//		}
//	});
	//处理直接访问地址无法加载到js的问题修复
//})