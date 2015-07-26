Handlebars.registerHelper("getCreditCos",function(total,cosp){
	var t1=0,t2=0,r1,r2;   
	try{t1=total.toString().split(".")[1].length}catch(e){}   
	try{t2=cosp.toString().split(".")[1].length}catch(e){}   
	with(Math){   
		r1=Number(total.toString().replace(".",""))   
		r2=Number(cosp.toString().replace(".",""))   
		return ((r1/r2)*pow(10,t2-t1)).toFixed(2);   
	}   
});

Handlebars.registerHelper("getCreditSub",function(arg1,arg2){
	var r1,r2,m,n;  
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
    m=Math.pow(10,Math.max(r1,r2));  
    //last modify by deeka  
    //动态控制精度长度  
    n=(r1>=r2)?r1:r2;  
    return ((arg1*m-arg2*m)/m).toFixed(2);  
});

Handlebars.registerHelper("getCreditMoneyFormat",function(arg1){
    return (arg1/1).toFixed(2);  
});

