//这里总结js基础面试题以及答案，有兴趣的朋友可以继续添加
//1、js中使用typeof能得到哪些类型
console.log('1: 6种')
typeof true //boolean
typeof "zhangsan" //string
typeof 1 //number
typeof undefined //undefined
typeof

function name() {} //function
typeof null //object
typeof [0, 1, 2, 3] //object
typeof { "r": 1, "m", 2 } //object
//2、何时使用 "===" 何时使用 "=="
console.log("2: 基本长都是用“===”");
/*
	if(obj.a == null){
		这里相当于 obj.a ===null,obj.a === undefined
		jquery里就是这么写的
	}
*/
//3、window.onload 和 document
//4、用js创建10个<a>标签，点击的时候弹出对应的序号
console.log("4:考察作用域");

function adda() {
    var i = 0;
    for (var i = 0; i < 10; i++) {
        (function(i) {
            var a = document.createElement("a");
            a.innerHTML = i + "<br>";
            a.addEventListener("click", function() {
                alert(i)
            });
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(a);
        })(i)
    }

}
//5、简述如何实现一个模块加载器，实现类似require.js的基本功能

//6、实现数组的随机排序
//7、js中有哪些内置函数
console.log("7: 9种")
/*
	Number String Boolean Date Array Object Function RegExp Error
*/
//8、js变量按照存储方式区分有哪些类型，并描述其特点
console.log('8:值类型，引用类型')
//9、如何理解json
console.log('9:数据格式，js的一个对象，存在两个API')
JSON.stringify() //将json转换成字符串
JSON.parse() //将字符串转换成json
//10、如何准确判断一个变量数组类型
arr instanceof Array
//11、写一个原型链继承的例子
function Getid(id) {
    this.id = document.getElementById(id);
}
Getid.prototype.html = function(val) {
    var id = this.id;
    if (val) {
        id.innerHTML = val
        return this; //链式操作
    } else {
        return id.innerHTML
    }
}
Getid.prototype.on = function(type, fn) {
    var id = this.id;
    id.addEventListener(type, fn);
}
var getId = new Getid("footer");
getId.html("aaa").on("click", function() {
    alert("aaa");
});
//12、描述new一个对象的过程
console.log('12:1、创建一个新对象。2、this指向这个对象。3、对this赋值。4、返回this')
//13、zepto源码中如何使用原型链

//14、说一个对变量提升的理解
console.log('14:js会将定义的函数表达式和函数声明提前')
//15、说明this几种不同的使用场景
console.log('15:4种')
/*
1、作为构造函数执行
2、作为对象属性执行
3、作为普通函数执行
4、call,apply,bind改变this的值
*/
//16、如何理解作用域
//17、实际开发中闭包的作用
console.log('17:1、函数作为返回值。2、函数作为参数传递');
//实例，判断
function once() {
    var _list = [];
    return function(num) {
        if (_list.indexOf(num) >= 0) {
            return false;
        } else {
            _list.push(num);
            return true;
        }
    }
}
//18、同步和异步的区别是什么？分别举一个同步和异步的例子
console.log('18: 同步：会有卡顿的现象，异步：会一直走完程序,把需要等待的暂存起来，最后相应时在执行')
//19、前端使用异步的场景有哪些
console.log('19:3种');
/*
	1、setInterval 与 setTimeout
	2、jaxa
	3、事件绑定
*/
//20、获取2017-06-10格式的日期
function gitTime(gettime) {
    if (!gettime) {
        gettime = new Date();
    }
    var year = gettime.getFullYear();
    var month = gettime.getMonth() + 1;
    var date = gettime.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    var time = year + "-" + month + "-" + date
    return time
}
var gettime = new Date();
console.log(gitTime(gettime));
//21、一个关于setTimeout的笔试题
//22、获取随机数，要求是长度一致的字符串格式
function getNum() {
    var num10 = Math.random() + "0000000000";
    var newNum = num10.slice(2, 12);
    console.log(newNum)
}
//23、写一个能遍历对象和数组的通用forEach函数
function forEachAll() {
	var val = "输出"
    return function(arr) {
        if (arr instanceof Array) {
            for (var i = 0; i < arr.length; i++) {
            	console.log(arr[i]);
            }
        } else {
            for (var i in arr) {
            	console.log(arr[i]);
            }
        }
    }
}
var newArr = [1,2,3,4];
var newJsan = {"name":"zhangsan","age":12}
var puc = forEachAll();
puc(newArr)
//24、DOM是哪些基本的数据结构

//25、DOM操作的常用API有哪些

//26、DOM节点的attr和property有何区别
console.log('attr 可扩展的属性 ，property 是js内置的属性，是已经规定好的')
//27、如何检测浏览器的类型

//28、解析URL的各个部分
//29、编写一个通用的监听函数
function bindEvent(element,type,selector,fn){
	if(fn == null){
		fn = selector;
		selector = null;
	}
	element.addEventListener(type,function(e){
		var target = e.target;
		if(selector){
			if(target.matches(selector)){
				fn.call(target,e);
			}
		}
		else{
			fn(e)
		}
	})
}
//30、描述事件冒泡流程
//31、对于一个无限下拉加载图片的页面，如何给每一个图片绑定事件