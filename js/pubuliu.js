window.onload=function(){
	waterFull("mine","li");
}
function waterFull(elem,tagname){
	var elemName = document.getElementById(elem);
	var getliAll = getTagname(elemName,tagname);//接收所有LI
	var getLiWidth = getliAll[0].offsetWidth;//获取li的宽度
	//获取页面宽度
	var getLi = changeWindow(getLiWidth,elemName)
	getHeight(getliAll,getLi,getLiWidth)
	window.onresize = function(){
		getLi = changeWindow(getLiWidth,elemName);
		getHeight(getliAll,getLi,getLiWidth)
	}
	window.onscroll=function(){
		var dataInt = {
            'data': [{
                'src': 'img/P_0.jpg'
            }, {
                'src': 'img/P_1.jpg'
            }, {
                'src': 'img/P_2.jpg'
            }, {
                'src': 'img/P_3.jpg'
            },{
                'src': 'img/P_4.jpg'
            },{
                'src': 'img/P_5.jpg'
            }]
        };
		if (getScroll) {
			for (var i = 0; i < dataInt.data.length; i++) {
				var getUl = elemName.getElementsByTagName("ul")[0];
				var createLi = document.createElement("li");
				var createImg = document.createElement("img")
				createImg.src = dataInt.data[i].src;
				createLi.appendChild(createImg)
				getUl.appendChild(createLi);
			}
			waterFull("mine","li");
		}
	};
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
	return getLiNum;
}

function getHeight(getliAll,getLi,getLiWidth){
	var lineHeight = [];
	for (var i = 0; i < getliAll.length; i++) {
		if(i<getLi){
			lineHeight.push(getliAll[i].offsetHeight);
		}else{
			var minH = Math.min.apply(null,lineHeight);
			var getIndex = lineHeight.indexOf(minH);//获取索引快速方法
			getliAll[i].style.position = "absolute";
			getliAll[i].style.left = getIndex*getLiWidth +"px";
			getliAll[i].style.top = minH + "px";
			lineHeight[getIndex] +=  getliAll[i].offsetHeight;
		}
	}
	return lineHeight ;
}

function getScroll(){
	var getAllLi = document.getElementById("mine").getElementsByTagName("li");
	var newAllliArr = [];
	for (var i = 0; i < getAllLi.length; i++) {
		newAllliArr.push(getAllLi[i]);
	}
	var lastLiHeight = getAllLi[getAllLi.length-1].offsetTop + Math.floor(getAllLi[getAllLi.length-1].offsetHeight/2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var windowHeight = document.body.clientHeight || document.documentElement.clientHeight;
	console.log((scrollTop + windowHeight) + "--" + lastLiHeight)
	return (lastLiHeight < scrollTop + windowHeight)?true:false;
}