window.onload=function(){
	waterFull("mine","li");
}
function waterFull(elem,tagname){
	var elemName = document.getElementById(elem);
	var getliAll = getTagname(elemName,tagname);
	var getLiWidth = getliAll[0].offsetWidth;
	//获取页面宽度
	changeWindow(getLiWidth,elemName)
	window.onresize = function(){
		changeWindow(getLiWidth,elemName)
	}
	//console.log(elemName.offsetWidth)
}
function getTagname(elem,tagname){
	var allTagname = elem.getElementsByTagName(tagname);
	var arr = [] //用来存储为所有li
	for (var i = 0; i < allTagname.length; i++) {
		arr.push(allTagname[i]);
	}
	return arr;
}
//获取窗口改变
function changeWindow(getLiWidth,elemName){
	var getWindoW = document.documentElement.clientWidth;
		//获得列数
	var getLiNum =parseInt( getWindoW/getLiWidth)//Math.floor()取整
	elemName.style.width = getLiNum*getLiWidth+"px";
}