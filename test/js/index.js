window.onload=function(){
	
}
window.onclick=function(event){
	console.log("横坐标："+event.clientX+"纵坐标："+event.clientY);
}
window.onresize=function(){
//	console.log(document.body.width+":"+document.body.height);
//	console.log(document.body.clientHeight+":"+document.body.clientWidth);
//	console.log(window.screen.availHeight+":"+window.screen.availWidth);
//	console.log(document.body.offsetHeight+":"+document.body.offsetWidth);
	document.write(document.documentElement.clientHeight+":"+document.documentElement.clientWidth);
}
