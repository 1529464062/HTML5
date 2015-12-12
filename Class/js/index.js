window.onload=function(){
	var dd=new load(document.getElementsByTagName("body")[0]);
	alert(dd.name);
}
function load(TagObject){
	this.name=TagObject.tagName;
}
