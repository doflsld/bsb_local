    var delay = 1000; // 1000ms = 1 second

    function hum(){
    var humidity = Math.floor((Math.random() * (74-73)) + 73);
    return humidity+"%";
}
    function temp(){
    var temp = (Math.random() * (11-10)) + 10;
    temp = temp.toFixed(1);
    return temp+"℃";
}

    function pulse(){
    $("#humi").each(function(){
        var color = hum();
        $(this).text(color);
    });
    $("#temp").each(function(){
        var color = temp();
        $(this).text(color);
    });
}

    var fire = setInterval(pulse, delay);