function getStyle(obj,attr){
	return (obj.currentStyle||getComputedStyle(obj,false))[attr];	
}
function rnd(m,n){
	return Math.round(Math.random()*(n-m)+m);	
}
function d2a(deg){
	return deg*Math.PI/180;	
}
