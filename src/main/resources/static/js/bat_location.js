function location(){

    var $key = '4g21e1e2dd567ws11kk274nbdd3e0s30';
    var $type = 'gps';

    $.ajax({
        url: 'http://121.178.2.4:9000/api?api_key='+$key+'&type='+$type,
        dataType: 'json',
        type: 'GET',
        success: function (data){
            var $lat = data.lat;
            var $lng = data.lng;

            $('.CurrTemp').prepend($lat);
            $('.CurrHumi').prepend($lng);
        }
    })

}