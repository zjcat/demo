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
JSON.stringify()//将json转换成字符串
JSON.parse()//将字符串转换成json
//10、如何准确判断一个变量数组类型
arr instanceof Array
//11、写一个原型链继承的例子
function Getid(id){
	this.id = document.getElementById(id);
}
Getid.prototype.html = function(val){
	var id = this.id;
	if(val){
		id.innerHTML = val
		return this;//链式操作
	}else{
		return id.innerHTML
	}
}
Getid.prototype.on = function(type,fn){
	var id = this.id;
	id.addEventListener(type,fn);
}
var getId = new Getid("footer");
getId.html("aaa").on("click",function(){
	alert("aaa");
});
//12、描述new一个对象的过程
console.log('12:1、创建一个新对象。2、this指向这个对象。3、对this赋值。4、返回this')
//13、zepto源码中如何使用原型链

//14、说一个对变量提升的理解
console.log('js会将定义的函数表达式和函数声明提前')
//15、说明this几种不同的使用场景
//16、如何理解作用域
//17、实际开发中闭包的作用
//18、同步和异步的区别是什么？分别举一个同步和异步的例子
//19、前端使用异步的场景有哪些
//20、获取2017-06-10格式的日期
//21、一个关于setTimeout的笔试题
//22、获取随机数，要求是长度一致的字符串格式
//23、写一个能遍历对象和数组的通用forEach函数
//24、DOM是哪些基本的数据结构
//25、DOM操作的常用API有哪些
//26、DOM节点的attr和property有何区别
//27、如何检测浏览器的类型
//28、解析URL的各个部分
//29、编写一个通用的监听函数
//30、描述事件冒泡流程
//31、对于一个无限下拉加载图片的页面，如何给每一个图片绑定事件