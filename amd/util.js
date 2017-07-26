/*
* @Author: 18599
* @Date:   2017-07-26 21:40:29
* @Last Modified by:   18599
* @Last Modified time: 2017-07-26 21:58:21
*/

'use strict';
define(function(){
	var util ={
		getFormateDate:function(date,type){
			if(type === 1){
				console.log(date)
				return '2017-06-20'
			}
			if(type === 2){
				console.log(date+"-----")
				return '2017年6月20日'
			}

		}
	}
	return util;
})