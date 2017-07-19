var eventALL = {
    //取消事件冒泡
    stopPropagation: function(e) {
        var e = e || window.event;
        if (e.stopPropagation) {
            e.stoppropagation();
        } else {
            e.cancelBubble = true;
        }
    },
    //取消默认事件
    preventdefault: function(e) {
        var e = e || window.event;
        if (e.preventDefault) {
            e.preventdefault();
        } else {
            e.returnValue = false;
        }
    },
    //添加监听事件
    addHandler: function(element, type, selector, fn) {
        if (fn == null) {
            fn = selector,
                selector = null;
        }
        if (element.addEventListener) {
            element.addEventListener(type, function(e) {
                var e = e || window.event;
                var target;
                if (selector) {
                    target = e.target;
                    if (target.matches(selector)) {
                        fn.call(target, e)
                    }
                } else {
                    fn(e);
                }
            }, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function(e) {
                var e = e || window.event;
                var target;
                if (selector) {
                    target = e.target;
                    if (target.matches(selector)) {
                        fn.call(target, e)
                    }
                } else {
                    fn(e);
                }
            })
        } else {
            element['on' + type] = function(e) {
                var e = e || window.event;
                var target;
                if (selector) {
                    target = e.target;
                    if (target.matches(selector)) {
                        fn.call(target, e)
                    }
                } else {
                    fn(e);
                }
            };
        }
    },
    //删除监听事件
    removeHandler: function(element, type, selector, fn) {
        if (fn == null) {
            fn = selector,
                selector = null;
        }
        if (element.removeEventListener) {
            element.removeEventListener(type, function(e) {
                var e = e || window.event;
                var target;
                if (selector) {
                    target = e.target;
                    if (target.matches(selector)) {
                        fn.call(target, e)
                    }
                } else {
                    fn(e);
                }
            }, false);
        } else if (element.deatachEvent) {
            element.deatachEvent('on' + type, function(e) {
                var e = e || window.event;
                var target;
                if (selector) {
                    target = e.target;
                    if (target.matches(selector)) {
                        fn.call(target, e)
                    }
                } else {
                    fn(e);
                }
            })
        } else {
            element['on' + type] = null;
        }

    },
    //获取事件类型
    getType:function(e){
    	var e = e || window.event;
    	return e.type;
    },
    getTarget:function(e){
    	var e = e || window.event;
    	return e.target || e.srcElement;
    }
}