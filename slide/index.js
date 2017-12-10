/*
 * @Author: zjcat
 * @Date:   2017-12-09 21:43:59
 * @Last Modified by:   zjcat
 * @Last Modified time: 2017-12-10 22:53:15
 */
function Slide(ele) {
    this.ele = document.getElementsByClassName(ele);
    this.doc = document;

}

Slide.prototype.moveon = function(arg) {
    var ele = this.ele,
        doc = this.doc,
        modelEle = document.getElementsByClassName(arg),
        statIndex = '';
    var getOffsetLeft = function(obj) {
        var tmp = obj.offsetLeft;
        var val = obj.offsetParent;
        while (val != null) {
            tmp += val.offsetLeft;
            val = val.offsetParent;
        }
        return tmp;
    }
    var getOffsetTop = function(obj) {
        var tmp = obj.offsetTop;
        var val = obj.offsetParent;
        while (val != null) {
            tmp += val.offsetTop;
            val = val.offsetParent;
        }
        return tmp;
    }
    //鼠标移动
    for (var i = 0; i < ele.length; i++) {
        ele[i].addEventListener('mousedown', function(e) {
            if (this.getAttribute("data-sure") != 0) {
                return
            }
            var _this = this;
            textV = _this.innerHTML;
            idV = _this.getAttribute("data-id");
            //获取当前元素所在位置
            //获取鼠标所在的位置
            var e = e || window.event;
            var mouseT = e.clientY,
                mouseL = e.clientX,
                eleT = _this.offsetTop,
                eleL = _this.offsetLeft,
                pointT = mouseT - eleT,
                pointL = mouseL - eleL;
            doc.onmousemove = function(e) {
                mouseT = e.clientY,
                    mouseL = e.clientX;
                _this.style.zIndex = 3;
                _this.style.left = mouseL - pointL + "px";
                _this.style.top = mouseT - pointT + "px";
                return false
            }
            doc.onmouseup = function(e) {
                var t = false; //默认不可以入坐
                //鼠标松开查看元素是否在所在的区域内
                var y = e.clientY,
                    x = e.clientX,
                    w = modelEle[0].offsetWidth,
                    h = modelEle[0].offsetHeight;
                for (var i = 0; i < modelEle.length; i++) {
                    var elL = getOffsetLeft(modelEle[i]),
                        elT = getOffsetTop(modelEle[i]);
                    if (y - elT > 0 && x - elL > 0) {
                        if (w > (y - elT) && h > (x - elL)) {
                            if (modelEle[i].getAttribute("data-stat") == 0) {
                                //当data-stat为0，代表此作为没有人
                                modelEle[i].innerHTML = textV;
                                modelEle[i].setAttribute("class", "notText hastext")
                                modelEle[i].setAttribute("data-id", idV)
                                modelEle[i].setAttribute("data-stat", 1)
                                t = true;
                            } else {
                                alert("当前座位有人")
                            }

                        }

                    }
                }
                _this.style.left = 0;
                _this.style.top = 0;
                if (!t) {
                    _this.setAttribute("class", "slide")
                } else {
                    _this.setAttribute("class", "slide disable")
                    _this.setAttribute("data-sure", 1)
                }

                doc.onmousemove = null;
                doc.onmouseup = null;
            }
        })
    }
    //取消选中的人
    for(var i = 0;i<modelEle.length;i++){
    	modelEle[i].addEventListener('click',function(){
    		var _thism = this;
    		if(_thism.getAttribute('data-stat') ==0){
    			return
    		}
    		var getStatV = _thism.innerHTML,
    			getUserId = _thism.getAttribute('data-id');
    		_thism.setAttribute("class", "notText");
    		_thism.setAttribute("data-stat", 0)
    		_thism.innerHTML = '';
    		for (var i = 0; i < ele.length; i++) {
    			//console.log(ele[i])
    			if(ele[i].getAttribute("data-id") == getUserId){
    				ele[i].setAttribute("class","slide");
    				ele[i].setAttribute("data-sure", 0)
    				return
    			}
    		}
    	})
    }
};