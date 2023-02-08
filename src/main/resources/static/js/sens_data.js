    function pulse() {
        $('#temp').load(location.href+' #temp');
        $('#humi').load(location.href+' #humi');
        $('#co').load(location.href+' #co');
        $('#h2').load(location.href+' #h2');
    }

    var change1 = setInterval(pulse, 5000);
