//日期范围控件
var start = {
            elem: '#startTime',
            min: '1990-04-10 23:59:59', //设定最小日期为当前日期
            max: '2099-06-16 23:59:59', //最大日期
            istoday: false, //是否显示今天
            istime:true,
            choose: function(datas){
                 end.min = datas; //开始日选好后，重置结束日的最小日期
                 end.start = datas //将结束日的初始值设定为开始日
            }
        };
var end = {
            elem: '#endTime',
            min: '1990-04-10 23:59:59',
            max: '2099-06-16 23:59:59',
            istoday: false,
            istime:true,
            choose: function(datas){
                start.max = datas; //结束日选好后，轮转图上线日的最大日期
            }
};

laydate(start);
laydate(end);

//设置默认值
var time = new Date();
var year = time.getFullYear();
var startmonth = time.getMonth();

var day = time.getDate();
if(parseInt(startmonth) < 10)
{
    startmonth = '0' + startmonth;
}
if(parseInt(day) < 10)
{
    day = '0' + day;
}


//格式化日期，月、日、时、分、秒不足两位补0。如：2012-1-11 2:5:50 转换为：2012-01-11 02：05：50
function dateformat(date) {
	
	var datetime = date.split(" ");
	var date = datetime[0].split("-");
	var time = datetime[1].split(":");
	
	if (date[1] < 10 && date[1].length != 2) {
		date[1] = '0' + date[1];
	}
	if (date[2] < 10 && date[2].length != 2) {
		date[2] = '0' + date[2];
	}
	if (time[0] < 10 && time[0].length != 2) {
		time[0] = '0' + time[0];
	}
	if (time[1] < 10 && time[1].length != 2) {
		time[1] = '0' + time[1];
	}
	if (time[2] < 10 && time[2].length != 2) {
		time[2] = '0' + time[2];
	}

	return date[0] + '-' + date[1] + '-' + date[2] + ' ' + time[0] + ':'+ time[1] + ':' + time[2]
	
}




