/*考察作用域的问题*/
(function() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        var calc = function(){
        	return i*i 
        }
        arr.push(calc);
    }
    for (var i = 0; i < arr.length; i++) {
    	console.log(arr[i]()) //0 1 4
    }
})()
(function(){
	var arr = [];
	for (var i = 0; i < 3; i++) {
		var param = i;
		var calc = function(){
			return param*param
		}
		arr.push(calc);
	}
	for (var i = 0; i < arr.length; i++) {
    	console.log(arr[i]()) //4 4 4
    }
})()
