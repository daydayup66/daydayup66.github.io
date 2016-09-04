
function setScroll(num){
	var curScroll=document.documentElement.scrollTop||document.body.scrollTop;
	var dis=num-curScroll;
	var count=10;
	var n=0;
	clearInterval(document.timer);
	document.timer=setInterval(function(){
		n++;
		document.documentElement.scrollTop=curScroll+dis/count*n;
		document.body.scrollTop=curScroll+dis/count*n;
		if(n==count){
			clearInterval(document.timer);	
		}
	},30);
}