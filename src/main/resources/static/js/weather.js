
function weather(){
    var $APP_KEY = 'c43686a612316db9fd2bf145c19acee2';
    var $lat = 35.059273;
    var $lon = 126.543426;

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?lat='+$lat+'&lon='+$lon+'&appid='+$APP_KEY+'&units=metric',
        dataType: 'json',
        type: 'GET',
        success: function (data){
            var $Temp = (data.main.temp).toFixed(2) + '℃';
            var $Humi = data.main.humidity + '％';
            var $city = data.name;

            $('.CurrTemp').prepend($Temp);
            $('.CurrHumi').prepend($Humi);
            $('.City').append($city);
        }
    })

    $('.CurrTemp').empty()
    $('.CurrHumi').empty()

}

$(document).ready(weather());
/*
var delay = 10000;
var fire = setInterval(weather, delay);
*/

