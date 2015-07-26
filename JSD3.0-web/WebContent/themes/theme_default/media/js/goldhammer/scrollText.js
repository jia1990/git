function ScrollText(content,btnPrevious,btnNext,autoStart,timeout,isSmoothScroll)
{
    this.Speed = 10;
    this.Timeout = timeout;
	this.stopscroll =false;
	this.isSmoothScroll= isSmoothScroll;
    this.LineHeight = 20;
    this.NextButton = this.$(btnNext);
    this.PreviousButton = this.$(btnPrevious);
    this.ScrollContent = this.$(content);
    //this.ScrollContent.innerHTML += this.ScrollContent.innerHTML;
	if(this.PreviousButton)
	{
		this.PreviousButton.onclick = this.GetFunction(this,"Previous"); 
	}
	if(this.NextButton){
		this.NextButton.onclick = this.GetFunction(this,"Next");
    }
}
ScrollText.prototype = {

	$:function(element)
	{
		return document.getElementById(element);
	},
	Previous:function()
	{
		this.stopscroll = true;
		this.Scroll("up");
	},
	Next:function()
	{
		this.stopscroll = true;
		this.Scroll("down");
	},
	Start:function()
	{
		if(this.isSmoothScroll)
		{
			this.AutoScrollTimer = setInterval(this.GetFunction(this,"SmoothScroll"), this.Timeout);
		}
		else
		{		
			this.AutoScrollTimer = setInterval(this.GetFunction(this,"AutoScroll"), this.Timeout);
		}
	},
	Stop:function()
	{
		clearTimeout(this.AutoScrollTimer);
		this.DelayTimerStop = 0;
	},
	SmoothScroll:function()
	{
		if(this.stopscroll) 
		{
			return;
		}
		this.ScrollContent.scrollTop++;
	},
	Scroll:function(direction)
	{

		if(direction=="up")
		{
			this.ScrollContent.scrollTop--;
		}
		else
		{
			this.ScrollContent.scrollTop++;
		}
		if(parseInt(this.ScrollContent.scrollTop) % this.LineHeight != 0)
		{
			this.ScrollTimer = setTimeout(this.GetFunction(this,"Scroll",direction), this.Speed);
		}
	},
	GetFunction:function(variable,method,param)
	{
		return function()
		{
			variable[method](param);
		}
	}
}

function ignoreError() {
  return true;
}
window.onerror = ignoreError; 