define(function(require,exports,module){
	require('jquery');
	require('/plugins/echarts/echarts-all');
	require('formatterFunction');
	
	//
	$.ajax({
		url:"/index/investIn.html",
		type:"post",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
				var tpl = require('/themes/theme_default/media/tpl/InvestIn.tpl');//载入tpl模板
				var template = Handlebars.compile(tpl);
				var html = template(data.showData.month_top);
				
				$(".y_contentTopRightIn").html(html);
				//alert(data.showData.invest_total.remark);
				if(data != null || data != undefined || data != ""){
					var num = 0;
				    $($(".y_contentTopRightIn li")[0]).clone(true).insertAfter($($(".y_contentTopRightIn li")[9]));
				    $($(".y_contentTopRightIn li")[1]).clone(true).insertAfter($($(".y_contentTopRightIn li")[10]));
				    $($(".y_contentTopRightIn li")[2]).clone(true).insertAfter($($(".y_contentTopRightIn li")[11]));
	
				    function move() {
				        num = num - 30;
				        if (num >= -270) {
				            $(".y_contentTopRightIn").animate({
				                marginTop: num
				            }, 3000);
				        } else {
				            $(".y_contentTopRightIn").animate({
				                marginTop: num
				            }, 3000, function() {
				                num = 0;
				                $(".y_contentTopRightIn").css({
				                    marginTop: 0
				                });
				            });
				        }
				    };
				    var t = setInterval(move, 6000);
				    $(".y_contentTopRightIn").hover(function() {
				        clearInterval(t);
				    }, function() {
				        t = setInterval(move, 6000);
				    })
				}
				})
			});
			
	$(".y_color-1 .y_a_1_d_value").html((data.showData.user_invest_total.value/100000000).toFixed(1) + "亿元");
	$(".y_color-2 .y_a_1_d_value").html((data.showData.user_income.value/100000000).toFixed(1) + "亿元");
	$(".y_color-3 .y_a_1_d_value").html((data.showData.pay_user_capital.value/100000000).toFixed(1) + "亿元");
	$(".y_color-4 .y_a_1_d_value").html((data.showData.pay_user_interest.value/100000000).toFixed(1) + "亿元");
	$(".y_color-1 .y_a_1_d_value_1").html(moneyFormat(data.showData.user_invest_total.value) + "元");
	$(".y_color-2 .y_a_1_d_value_1").html(moneyFormat(data.showData.user_income.value) + "元");
	$(".y_color-3 .y_a_1_d_value_1").html(moneyFormat(data.showData.pay_user_capital.value) + "元");
	$(".y_color-4 .y_a_1_d_value_1").html(moneyFormat(data.showData.pay_user_interest.value) + "元");
	
	$(".y_boxss0 .y_boxssli1 strong").html(moneyFormat(data.showData.person_highest_invest.value) + "<em>元</em>");
	$(".y_boxss0 .y_boxssli2 strong").html(moneyFormat(data.showData.jsd_avg_invest.value) + "<em>元</em>");
	
	
	$(".y_boxss1 .y_boxssli1 strong").html(numFormat(data.showData.person_highest_invest_times.value) + "<em>笔</em>");
	$(".y_boxss1 .y_boxssli2 strong").html(data.showData.jsd_reinvest_scale.value + "<em>%</em>");
	
	$(".y_boxss2 li span").eq(0).html(numFormat(data.showData.jsd_invest_distribute.total.value/10000) + "万人");
	$(".y_boxss2 li span").eq(1).html(numFormat(data.showData.jsd_invest_distribute.financing_company.value));
	
	$(".y_boxss2 li em").eq(0).html(numFormat(data.showData.jsd_invest_distribute.total.value));
	$(".y_boxss2 li em").eq(1).html(numFormat(data.showData.jsd_invest_distribute.financing_company.value));
	
	
	
	
	/*data*/
    $(".y_area_1_data a").hover(function() {
        var colors = $(this).css("color");
        $(this).css({
            background: colors
        });
        $(this).find(".y_a_1_d_title").css({
            color: "#fff"
        });
        $(this).find(".y_a_1_d_value").css({
            display: "none"
        });
        $(this).find(".y_a_1_d_value_1").css({
            color: "#fff",
            display: "block"
        });
    }, function() {
        $(this).css({
            background: "#fff"
        });
        $(this).find(".y_a_1_d_value").css({
            display: "block"
        });
        $(this).find(".y_a_1_d_value_1").css({
            display: "none"
        });
        $(this).find(".y_a_1_d_title").css({
            color: "#3c3c3c"
        });
    })
    
	
	//累计投资金额
		var myChart = echarts.init(document.getElementById('lineChart')); 
		//设置最近十月
		var myDate = new Date();
		var year = myDate.getFullYear();
		var month = myDate.getMonth() - 1;
		var myDates = new Array();
		/* 825  fgq  */
		for(var i = 11 ; i >= 0 ;i--){
			if(month < 0){
				month = 11;
				year = year - 1;
			}
			myDates[i] = year + "年" + (month+1) + "月";
			month = month - 1;
		}
	    var option = {
	    	    tooltip : {
			        trigger: 'item',
			        formatter : '截止到 :<br/>{b}底<br/>交易金额为:<br/>{c}元' 
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            magicType : {show: true, type: ['line', 'bar']}
			        }
			    },
			    grid :{show:false},
			    backgroundColor:'#FFF',
			    xAxis : [
			        {
			        	
			        	axisLine:{show:false},
			        	splitLine :{lineStyle:{type:'dashed'}},
			            type : 'category',
			            boundaryGap : false,
			            axisLabel:{textStyle:{color:'#989898',fontSize:12}},
			            data : myDates
			        }
			    ],
			    yAxis : [
			        {
			        	axisLine:{show:false},
			        	nameTextStyle:{color:'#ababab'},
			        	splitLine:{lineStyle:{type:'dashed'}},
			            type : 'axis',
			            areaStyle :{color:'#ababab'},
			            axisLabel:{textStyle:{color:'#989898',fontSize:16},
			            	formatter :function (value){
			            	return value/100000000 + "亿";
			        	}}
			        }
			    ],
			    series : [
			        {
			        	itemStyle:{normal:{lineStyle:{width:5,color:'#E35252'}}},
			        	//markPoint:{show:false},
			            name:'邮件营销',
			            type:'line',
			            smooth : true,
		                symbol: 'circle',  // 拐点图形类型
		                symbolSize: 8,           // 拐点图形大小
			            stack: '总量',
			            data:data.showData.invest_total.value
			        }
			    ],
			    color:['rgba(227,82,82,0.5)']
			};
	    myChart.setOption(option);
	    /*结束累计投资金额*/
        // 投资金额占比
        var myChart = echarts.init(document.getElementById('investProporMoney')); 
        var invest_scale = data.showData.invest_scale;
        var option = {
            tooltip: {
                show: false
            },
            xAxis : [
                {
                    type : 'category',
                    splitLine : {show : false},//将分割线隐藏
                    axisTick : {lineStyle : {width : 0}},//将分类线隐藏
                    axisLine : {lineStyle : {width : 1, color : '#ababab'}},//展示x轴标题
                    data : [invest_scale.v1.remark,
                            invest_scale.v2.remark,
                            invest_scale.v3.remark,
                            invest_scale.v4.remark,
                            invest_scale.v5.remark]
                }
            ],grid: {
                borderWidth: 0,
                y: 50,//设置长宽高
                y2: 40,
                x : 20,
                x2 : 40
            },
            yAxis : [
                {
                	type : 'value',
                	show : false
                }
            ],
            series : [
                {
                    "name":"销量",
                    "type":"bar",//类型（柱状图，饼状图）
                    itemStyle : {
                		normal:{
                			label : {show : true , position: 'top',formatter: '{c}%'}//显示在柱体头部的数据
                		}
                	},
                	barWidth : 50,//柱体宽度
                    "data":[invest_scale.v1.value,
                            invest_scale.v2.value,
                            invest_scale.v3.value,
                            invest_scale.v4.value,
                            invest_scale.v5.value]//柱体数据
                    
                }
            ],
            color : ["#87cefa"]
        };  
        // 为echarts对象加载数据 
        myChart.setOption(option); 

        //投资笔数占比
        var myChart = echarts.init(document.getElementById('investProporNumber')); 
        var invest_number_times = data.showData.invest_number_times;
        var option = {
	        tooltip : {
	            trigger: 'item',
	            show : false
	        },
	        series : [
	            {
	                name:'访问来源',
	                type:'pie',
	                radius : '80%',
	                center: ['50%', '60%'],
	                data:[
	                    {value:invest_number_times.v1.value, name:invest_number_times.v1.remark},
	                    {value:invest_number_times.v2.value, name:invest_number_times.v2.remark},
	                    {value:invest_number_times.v3.value, name:invest_number_times.v3.remark},
	                    {value:invest_number_times.v4.value, name:invest_number_times.v4.remark}
	                ],
	                itemStyle : {
	                	
                		normal:{
	            			borderColor : '#FFF',
	            			borderWidth : 3,
	            			labelLine :{show:false},
                			label : {show : false ,formatter: '{b} : {d}%'}//显示在柱体头部的数据
                		}
                	}
	                
	            }
	        ],
	        color:['#0697DA','#F3B139','#EF7189','#5DBD59']
	    };
        myChart.setOption(option); 
        $("#invest_number").find("svg").eq(0).find("text").eq(0).html(moneyFormat(invest_number_times.v1.value) + "%");
        $("#invest_number").find("svg").eq(1).find("text").eq(0).html(moneyFormat(invest_number_times.v2.value) + "%");
        $("#invest_number").find("svg").eq(2).find("text").eq(0).html(moneyFormat(invest_number_times.v3.value) + "%");
        $("#invest_number").find("svg").eq(3).find("text").eq(0).html(moneyFormat(invest_number_times.v4.value) + "%");
        
        //alert($("#invest_number").find("svg").eq(0).find("text").eq(1).html());
      
        
        //地图
        var mapTop5Val = new Array();
        var mapTop5Name = new Array();
        var myChart = echarts.init(document.getElementById('container')); 
        var person_map = data.showData.person_map;
        var c=0;
        for(i = 0; i < person_map.list.length;i++){
        	for (j = 0; j < person_map.list.length; j++) {
                if (person_map.list[i].value > person_map.list[j].value) {
                	var v = person_map.list[j].value;
                	var n = person_map.list[j].name;
                    person_map.list[j].value = person_map.list[i].value;
                    person_map.list[j].name = person_map.list[i].name;
                    person_map.list[i].value = v;
                    person_map.list[i].name = n;
                }
            }
        }
        var option = {
        tooltip : {
        	show : false,
            trigger: 'item'
        },
        legend: {
        	show : true,
            orient: 'vertical',
            x:'left',
            textStyle:{color:'#000'},
            data:['有效用户数（完成三项认证）']
        },
        backgroundColor : '#FFF',
        toolbox: {
            show : false,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name: '有效用户数（完成三项认证）',
                type: 'map',
                mapType: 'china',
                hoverable: false,
                tooltip : {show:true},
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true,color:'#E35252'}}
                },
                data : person_map.list,
               
                geoCoord: {
                    "西藏":[91.11,29.97],
                    "上海":[121.48,31.22],
                    "福建":[119.3,26.08],
                    "广西":[108.33,22.84],
                    "广东":[113.23,23.16],
                    "山西":[112.53,37.87],
                    "云南":[102.73,25.04],
                    "深圳":[114.07,22.62],
                    "海南":[110.35,20.02],
                    "辽宁":[123.38,41.8],
                    "宁夏":[106.27,38.47],
                    "江西":[115.89,28.68],
                   
                    "台湾":[120.3,22.66],
                    
                    "吉林":[126.57,43.87],
                    "青海":[101.74,36.56],
                    "内蒙古":[111.65,40.82],
                    "四川":[104.06,30.67],
                    "陕西":[108.95,34.27],
                    "重庆":[106.54,29.59],
                    "江苏":[118.78,32.04],
                    "北京":[116.46,39.92],
                    "新疆":[87.68,43.77],
                    "浙江":[120.19,30.26],
                    "山东":[117,36.65],
                    "甘肃":[103.73,36.03],
                    "天津":[117.2,39.13],
                    "河南":[113.65,34.76],
                    "黑龙江":[126.63,45.75],
                    "湖南":[113,28.21],
                    "河北":[116.7,39.53],
                    "安徽":[117.27,31.86],
                    "湖北":[114.31,30.52]

                }
            },
            {
                name: 'Top',
                type: 'map',
                mapType: 'china',
                tooltip : {show:true},
                data:[],
                markPoint : {
                    symbol:'emptyCircle',
                    symbolSize : function (v){
                        return 10 + v/100
                    },
                    effect : {
                        show: true,
                        color : '#0697DA',
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false}
                        }
                    },
                    data : [
                        {name: person_map.list[0].name, value: person_map.list[0].value},
                        {name: person_map.list[1].name, value: person_map.list[1].value},
                        {name: person_map.list[2].name, value: person_map.list[2].value},
                        {name: person_map.list[3].name, value: person_map.list[3].value},
                        {name: person_map.list[4].name, value: person_map.list[4].value},
                    ]
                }
            }
        ],
        color :["#E35252"]
    };
        myChart.setOption(option); 
        
        
	}
	});
	
	
	
	//年龄分布      
    var myChart = echarts.init(document.getElementById('ageDistribution')); 
    var option = {
        tooltip : {
            trigger: 'item',
            show : false
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '45%',
                center: ['50%', '50%'],
                radius:["42%", '50%'],
                data:[
                    {value:335, name:'60 岁以上'},
                    {value:310, name:'18-29岁'},
                    {value:335, name:'30-39岁'},
                    {value:310, name:'40-59岁'}
                ],
                itemStyle : {
                	
            		normal:{
            			borderColor : '#FFF',
	                	borderWidth : 3,
	                	labelLine :{show:false},
            			label : {show : false,textStyle: {align : 'center' } ,formatter: "{b}\n\n{d}%"}//显示在柱体头部的数据
            			
            		}
            	}
                
            }
        ],
        color:['#EF7189','#0697DA','#F3B139','#5DBD59']
    };
    myChart.setOption(option); 
    
    //性别分布 
    var myChart = echarts.init(document.getElementById('sexDistribution')); 
    var option = {
        tooltip : {
            trigger: 'item',
            show : false
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '50%',
                center: ['50%', '50%'],
                radius:["42%", '50%'],
                data:[
                    {value:335, name:'男'},
                    {value:310, name:'女'}
                ],
                itemStyle : {
                	
            		normal:{
            			borderColor : '#FFF',
	                	borderWidth : 3,
	                	labelLine :{show:false},
            			label : {show : false,textStyle: {align : 'center' } ,formatter: "{b}\n\n{d}%"}//显示在柱体头部的数据
            		}
            	},
            	markPoint: {
                    data: [
                        {xAxis:0, y: 90,x: 270,name:'男', symbol: 'image:///themes/theme_default/images/data/man.jpg'},
                        {xAxis:1, y: 250,x: 55,name:'女', symbol: 'image:///themes/theme_default/images/data/women.jpg'},
                    ]
                }
                
            }
        ],
        color:['#0697DA','#EF7189']
    };
    myChart.setOption(option); 
    
    //职业分布
    var myChart = echarts.init(document.getElementById('positionDistribution')); 
    var option = {
        tooltip : {
            trigger: 'item',
            show : false
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '50%',
                center: ['50%', '57%'],
                radius:["48%", '57%'],
                data:[
                    {value:335, name:'私营企业'},
                    {value:310, name:'企业雇员'},
                    {value:234, name:'政府/事业单位'},
                    {value:135, name:'学生、自由职业'}
                ],
                itemStyle : {
                	
            		normal:{
            			borderColor : '#FFF',
	                	borderWidth : 3,
	                	labelLine :{show:false},
            			label : {show : false,textStyle: {align : 'center' } ,formatter: "{b}\n{d}%"}//显示在柱体头部的数据
            		}
            	}
                
            }
        ],
        color:['#F3B139','#5DBD59','#EF7189','#0697DA']
    };
    myChart.setOption(option); 
   
    //收益对比
    var myChart = echarts.init(document.getElementById('earnings'));
    var option = {
    	    grid: { borderWidth: 0,y:30, y2:30,x : 10, x2:10},
    	    xAxis : [
    	        {
    	            type : 'category',
    	            splitLine : {show : false},//将分割线隐藏
                    axisTick : {lineStyle : {width : 0}},//将分类线隐藏
                    axisLine : {lineStyle : {width : 1, color : '#ababab'}},//展示x轴标题
    	            data : ['银行定期一年','宝宝们','晋商贷']
    	        },
    	        {
    	            type : 'category',
    	            axisLine: {show:false},
    	            axisTick: {show:false},
    	            axisLabel: {show:false},
    	            splitArea: {show:false},
    	            splitLine: {show:false},
    	            data : ['银行定期一年','宝宝们','晋商贷']
    	        }
    	    ],
    	    yAxis : [
    	        {
    	            type : 'value',
    	            show : false
    	        }
    	    ],
    	    series : [
    	        {
    	            name:'ECharts2 - 20w数据',
    	            type:'bar',
    	            xAxisIndex:0,
    	            itemStyle: {normal: {color:'rgba(6,151,218,1)', label:{show:true,formatter:function(a,b,c){return c>3 ? ('最低 ' + c +'%'):'';}}}},
    	            data:[3,4,8]
    	        },
    	        {
    	            name:'ECharts1 - 20w数据',
    	            type:'bar',
    	            xAxisIndex:1,
    	            itemStyle: {normal: {color:'rgba(6,151,218,0.5)', label:{show:true,formatter: ' 最高{c}% '}}},
    	            data:[3,6.5,18]
    	        }
    	    ]
    	};
    // 为echarts对象加载数据 
    myChart.setOption(option); 

    //项目期限
    var myChart = echarts.init(document.getElementById('projectDeadline')); 
    var option = {
        tooltip : {
            trigger: 'item',
            show : false
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '50%',
                center: ['50%', '46%'],
                radius:[0, '53%'],
                data:[
                    {value:335, name:'6-9个月'},
                    {value:310, name:'0-3个月'},
                    {value:234, name:'9-12个月'},
                    {value:135, name:'12个月以上'}
                ],
                itemStyle : {
                	
            		normal:{
            			borderColor : '#FFF',
	                	borderWidth : 3,
	                	labelLine :{show:false},
            			label : {show : false,textStyle: {align : 'center' } ,formatter: "{b}\n{d}%"}//显示在柱体头部的数据
            		}
            	}
                
            }
        ],
        color:['#EF7189','#F3B139','#6CB7E1','#5DBD59']
    };
    myChart.setOption(option); 
    
    //投资着经验值
    var myChart = echarts.init(document.getElementById('investExperienceValue')); 
    var option = {
        tooltip : {
            trigger: 'item',
            show : false
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '50%',
                center: ['50%', '50%'],
                radius:[0, '55%'],
                data:[
                    {value:23.79, name:'1年以下'},
                    {value:23.68, name:'1-3年'},
                    {value:26.08, name:'超过3年'},
                    {value:26.45, name:'无任何投资经验'}
                ],
                itemStyle : {
                	
            		normal:{
            			borderColor : '#FFF',
	                	borderWidth : 3,
	                	labelLine :{show:false,length:30,lineStyle: {width:1,color: '#ababab',shadowOffsetX:20,shadowBlur:5,shadowColor:'#FFF'}} ,
            			label : {show : false,textStyle: {align : 'center',color: '#ababab' },formatter: "{b}\n{d}%"}//显示在柱体头部的数据
            		}
            	}
                
            }
        ],
        color:['#EF7189','#F3B139','#0697DA','#5DBD59']
    };
    myChart.setOption(option);
    
});