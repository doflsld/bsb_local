
    var clockFun = (function (){
    var clock = new Vue({
    el: '#clock',
    data: {
    time : '',
    date : ''
    }
    });

    var week = ['SUN','MON','TUE','WEN','THU','FRI','SAT'];

    function updateTime() {
    var cd = new Date();
    if(cd.getHours() < 12){
    clock.time = '오전 ' + zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2);
    }else{
        clock.time = '오후 ' +zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2);
        clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2);
    }
    }

    $(document).ready(updateTime());

    function zeroPadding(num, digit){
    var zero = '';
    for (var i = 0; i < digit; i++){
    zero += 0;
    }
    return (zero + num).slice(-digit);
    }
    return setInterval(updateTime, 1000);
    }());

