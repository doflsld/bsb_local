function test(){

/*    $.getJSON('http://121.178.2.4/api/batsens_api.php?modem=srcb00004_t&callback=?',
        function (data){
                $('.sensTemp').prepend(data.temp);
                $('.sensHumi').prepend(data.humi);
            });
    $.getJSON('http://121.178.2.4/api/batsens_api.php?modem=srcb00005_t&callback=?',
        function (data){
                $('.sensCO').prepend(data.co);
                $('.sensH2').prepend(data.h2);
            });*/

    $.ajax({
        type : 'GET',
        url: 'http://121.178.2.4/api/batsens_api.php?modem=srcb00004_t',
        dataType: 'jsonp',
        jsonpCallback: 'callback',
        success: function (data){
            $.each(data, function(k, v){
                $("#sensTemp").append(k+":"+v);
            })
/*            var $Temp = (data.temp).toFixed(2);
            var $Humi = (data.humi).toFixed(2);
            $('.sensTemp').prepend($Temp);
            $('.sensHumi').prepend($Humi);*/
        },
        error: function(status, msg){
            console.log(status, msg);
        }
    });

/*    $.ajax({
        type : 'GET',
        url: 'http://121.178.2.4/api/batsens_api.php?modem=srcb00005_t',
        dataType: 'jsonp',
        success: function (data){
            $.each(data,function (sens){
                $('.sensCO').prepend(this[0].co);
                $('.sensH2').prepend(this[0].h2);
        });
        }});*/

    $('.sensTemp').empty()
    $('.sensHumi').empty()
    $('.sensCO').empty()
    $('.sensH2').empty()
}

$(document).ready(test());

/*    var delay = 5000;
    var fire = setInterval(test, delay);*/
