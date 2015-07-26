define(function(require,exports,modlue){
	require('jquery');
	
	$(function(){
		
		function ZoomPic (){
			this.initialize.apply(this, arguments)	
		}
		function hides(){
			var index=$("#box ul li img").eq(1).attr("data");
			$(".dw-box-in").hide();
			$(".dw-box-in").eq(index).show();
		}
		
		ZoomPic.prototype = 
		{
			initialize : function (id)
			{
				var _this = this;
				this.wrap = typeof id === "string" ? document.getElementById(id) : id;
				this.oUl = this.wrap.getElementsByTagName("ul")[0];
				this.aLi = this.wrap.getElementsByTagName("li");
				this.prev = this.wrap.getElementsByTagName("pre")[0];
				this.next = this.wrap.getElementsByTagName("pre")[1];
				this.timer = null;
				this.aSort = [];
				this.iCenter = 1;
				this._doPrev = function () {return _this.doPrev.apply(_this)};
				this._doNext = function () {return _this.doNext.apply(_this)};
				this.options = [
					{width:275, height:424, top:0, left:20, zIndex:2},
					{width:275, height:424, top:37, left:210, zIndex:3},
					{width:275, height:424, top:0, left:400, zIndex:2}
				];
				for (var i = 0; i < this.aLi.length; i++) this.aSort[i] = this.aLi[i];
				this.aSort.unshift(this.aSort.pop());
				this.setUp();
				this.addEvent(this.prev, "click", this._doPrev);
				this.addEvent(this.next, "click", this._doNext);
				this.doImgClick();		
				this.timer = setInterval(function ()
				{
					_this.doNext()	
				}, 3000);		
				this.wrap.onmouseover = function ()
				{
					clearInterval(_this.timer)	
				};
				this.wrap.onmouseout = function ()
				{
					_this.timer = setInterval(function ()
					{
						_this.doNext()	
					}, 3000);	
				}
				$(".dw-box-in")[0].onmouseover = function ()
				{
					clearInterval(_this.timer)	
				};
				$(".dw-box-in")[0].onmouseout = function ()
				{
					_this.timer = setInterval(function ()
					{
						_this.doNext()	
					}, 3000);	
				}
				
			},
			doPrev : function ()
			{
				this.aSort.unshift(this.aSort.pop());
				this.setUp();
				hides();
			},
			doNext : function ()
			{
				this.aSort.push(this.aSort.shift());
				this.setUp();
				hides();
			},
			doImgClick : function ()
			{
				var _this = this;
				for (var i = 0; i < this.aSort.length; i++)
				{
					this.aSort[i].onclick = function ()
					{
						if (this.index > _this.iCenter)
						{
							for (var i = 0; i < this.index - _this.iCenter; i++) _this.aSort.push(_this.aSort.shift());
							_this.setUp()
						}
						else if(this.index < _this.iCenter)
						{
							for (var i = 0; i < _this.iCenter - this.index; i++) _this.aSort.unshift(_this.aSort.pop());
							_this.setUp()
						}
						hides();
					}
				}
			},
			setUp : function ()
			{
				var _this = this;
				var i = 0;
				for (i = 0; i < this.aSort.length; i++) this.oUl.appendChild(this.aSort[i]);
				for (i = 0; i < this.aSort.length; i++)
				{
					this.aSort[i].index = i;
					if (i < 5)
					{
						this.css(this.aSort[i], "display", "block");
						this.doMove(this.aSort[i], this.options[i], function ()
						{
							_this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {opacity:100}, function ()
							{
								_this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0], {opacity:100}, function ()
								{
									_this.aSort[_this.iCenter].onmouseover = function ()
									{
										_this.doMove(this.getElementsByTagName("div")[0], {bottom:0})
									};
									_this.aSort[_this.iCenter].onmouseout = function ()
									{
										_this.doMove(this.getElementsByTagName("div")[0], {bottom:-100})
									}
								})
							})
						});
					}
					else
					{
						this.css(this.aSort[i], "display", "none");
						this.css(this.aSort[i], "width", 0);
						this.css(this.aSort[i], "height", 0);
						this.css(this.aSort[i], "top", 61);
						this.css(this.aSort[i], "left", this.oUl.offsetWidth / 2)
					}
					if (i < this.iCenter || i > this.iCenter)
					{
						this.css(this.aSort[i].getElementsByTagName("img")[0], "opacity", 60)
						this.aSort[i].onmouseover = function ()
						{
							_this.doMove(this.getElementsByTagName("img")[0], {opacity:100})	
						};
						this.aSort[i].onmouseout = function ()
						{
							_this.doMove(this.getElementsByTagName("img")[0], {opacity:60})
						};
						this.aSort[i].onmouseout();
					}
					else
					{
						this.aSort[i].onmouseover = this.aSort[i].onmouseout = null
					}
				}		
			},
			addEvent : function (oElement, sEventType, fnHandler)
			{
				return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
			},
			css : function (oElement, attr, value)
			{
				if (arguments.length == 2)
				{
					return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
				}
				else if (arguments.length == 3)
				{
					switch (attr)
					{
						case "width":
						case "height":
						case "top":
						case "left":
						case "bottom":
							oElement.style[attr] = value + "px";
							break;
						case "opacity" :
							oElement.style.filter = "alpha(opacity=" + value + ")";
							oElement.style.opacity = value / 100;
							break;
						default :
							oElement.style[attr] = value;
							break
					}	
				}
			},
			doMove : function (oElement, oAttr, fnCallBack)
			{
				var _this = this;
				clearInterval(oElement.timer);
				oElement.timer = setInterval(function ()
				{
					var bStop = true;
					for (var property in oAttr)
					{
						var iCur = parseFloat(_this.css(oElement, property));
						property == "opacity" && (iCur = parseInt(iCur.toFixed(2) * 100));
						var iSpeed = (oAttr[property] - iCur) / 3;
						iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
						
						if (iCur != oAttr[property])
						{
							bStop = false;
							_this.css(oElement, property, iCur + iSpeed)
						}
					}
					if (bStop)
					{
						clearInterval(oElement.timer);
						fnCallBack && fnCallBack.apply(_this, arguments)	
					}
				}, 30)
			}
		};
		window.onload = function ()
		{
			new ZoomPic("box");
		};
	})
	
	var interval1;
	$.ajax({
			type:"post",
			url:"/subject/activityDragonBorrow.html",
			success: function(json){
				require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
			          require.async("/plugins/handlebars-v1.3.0/transFormatJson",function(){
			        	  var html = Handlebars.compile(require("../../media/tpl/activity/dragonActivity.tpl"))(json);
			        	  $(".dw-list-in ul").html(html);
			        	  var lengths1=$(".dw-list ul li").length;
			        	  if(lengths1 > 2){
			        		  var nums=0;
			        		  var firsts=$(".dw-list ul li").eq(0);
			        		  var firstsnext=$(".dw-list ul li").eq(1);
			        		  firsts.clone().appendTo(".dw-list ul");
			        		  firstsnext.clone().appendTo(".dw-list ul");
			        		  var lengths=$(".dw-list ul li").length;
			        		  interval1 = setInterval(function(){
			        			  nums++;
			        			  if(nums<lengths-2){
			        				  $(".dw-list ul").animate({top:-120*nums},1000);
			        			  }else if(nums=lengths-2){
			        				  $(".dw-list ul").animate({top:-120*nums},1000,function(){
			        					  $(".dw-list ul").css({top:0});	
			        				  });
			        				  nums=0;
			        			  };
			        		  },3000);
			        	  }
			          });
			    });
			},
			error:function(){
			}
		})
	
	setInterval(
			function(){
				$.ajax({
					type:"post",
					url:"/subject/activityDragonBorrow.html",
					success: function(json){
						require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
					          require.async("/plugins/handlebars-v1.3.0/transFormatJson",function(){
					        	  var html = Handlebars.compile(require("../../media/tpl/activity/dragonActivity.tpl"))(json);
					        	  $(".dw-list-in ul").html(html);
					        	  var lengths1=$(".dw-list ul li").length;
					        	  if(lengths1 > 2){
					        		  var nums=0;
					        		  var firsts=$(".dw-list ul li").eq(0);
					        		  var firstsnext=$(".dw-list ul li").eq(1);
					        		  firsts.clone().appendTo(".dw-list ul");
					        		  firstsnext.clone().appendTo(".dw-list ul");
					        		  var lengths=$(".dw-list ul li").length;
					        		  clearInterval(interval1);
					        		  interval1 = setInterval(function(){
					        			  nums++;
					        			  if(nums<lengths-2){
					        				  $(".dw-list ul").animate({top:-120*nums},1000);
					        			  }else if(nums=lengths-2){
					        				  $(".dw-list ul").animate({top:-120*nums},1000,function(){
					        					  $(".dw-list ul").css({top:0});	
					        				  });
					        				  nums=0;
					        			  };
					        		  },3000);
					        	  }
					          });
					    });
					},
					error:function(){
					}
				})
			}
			, 10000);

});