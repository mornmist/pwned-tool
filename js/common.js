/*
**移动端dialog（自动消失）
**addClass:正确的提示信息为success,错误的提示信息为error
**msg:提示语句
*/ 
function mobileDialog(addClass,msg,callback){
    var _box = $('.dialog_box');
    _box.addClass(addClass);
    _box.find('.text').text(msg);
    _box.fadeIn(function(){
        setTimeout(closeDia,1000);
    })
    function closeDia(){
        _box.fadeOut(function(){
            if(callback){
                callback();
            }
        });
    }
}