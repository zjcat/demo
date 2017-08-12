/*
 * @Author: 18599
 * @Date:   2017-08-13 00:01:45
 * @Last Modified by:   18599
 * @Last Modified time: 2017-08-13 00:58:29
 */

'use strict';

function Select(ele) {
    this.ele = $(ele);
    (function() {
        var num = 0;
        $("#selectStyle >button >span").click(function(event) {
            if (num % 2 === 0) {
                $("#selectStyle >.optionList").show();
                num++
            } else {
                $("#selectStyle >.optionList").hide();
                num++
            }
            event.preventDefault();
            return false;
        });
        $("#selectStyle >.optionList").on("click", "ul >li >a", function(event) {
        	var _this = $(this);
            var textV = _this.text();
            _this.parent().addClass('action').siblings().removeClass('action');
            $("#selectStyle >button >span").text(textV);
            $("#selectStyle >.optionList").hide();
            var cV = _this.attr('data-listv');
            changeOption(cV)
            num++
            event.preventDefault();
            return false;
        });
        $("body").click(function() {
            if ($("#selectStyle >.optionList").css("display") === "block") {
                $("#selectStyle >.optionList").hide();
                num++;
            } else {
                return false;
            }

        })
    })();
    var changeOption = function(value){
    	$(ele).val(value);
    }
    
}
Select.prototype.style = function(ele) {
    var ele = this.ele;
    var option = ele.children("option");
    option.each(function() {
        var _this = $(this);
        var thisX = _this.text();
        var thisV = _this.val();
        if (_this.index() === 0) {
            $("#selectStyle >.optionList >ul").append('<li class="action"><a href="" title="" data-listv="' + thisV + '">' + thisX + '</a></li>')
        } else {
            $("#selectStyle >.optionList >ul").append('<li><a href="" title="" data-listv="' + thisV + '">' + thisX + '</a></li>')
        }

    });

}