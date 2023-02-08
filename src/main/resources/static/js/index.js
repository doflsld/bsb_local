$(document).ready(function(){
    bsb_device1()
    bsb_device2()
    bsb_device3()
    bsb_device4()
    bsb_device5()
});

var timer = 5000
function printUpdate() {

    setInterval('bsb_device1()', timer);
    setInterval('bsb_device2()', timer);
    setInterval('bsb_device3()', timer);
    setInterval('bsb_device4()', timer);
    setInterval('bsb_device5()', timer);

}

function bsb_device1(){
    $.ajax({
        type: 'GET',
        url:'http://devba.kr/bsb/getData.php',
        data :{
            'modem' : 'SRCb00001_T',
            'bar'   : '0',
        },
        dataType:'json',
        success: function (data){
            document.getElementById('temp-1').innerHTML = data.sd1+"℃";
            document.getElementById('humi-1').innerHTML = data.sd2+"%";
        }
    })
}
function bsb_device2(){
    $.ajax({
        type: 'GET',
        url:'http://devba.kr/bsb/getData.php',
        data :{
            'modem' : 'SRCb00002_T',
            'bar'   : '0',
        },
        dataType:'json',
        success: function (data){
            document.getElementById('temp-2').innerHTML = data.sd1+"℃";
            document.getElementById('humi-2').innerHTML = data.sd2+"%";
        }
    })
}
function bsb_device3(){
    $.ajax({
        type: 'GET',
        url:'http://devba.kr/bsb/getData.php',
        data :{
            'modem' : 'SRCb00003_T',
            'bar'   : '0',
        },
        dataType:'json',
        success: function (data){
            document.getElementById('temp-3').innerHTML = data.sd1+"℃";
            document.getElementById('humi-3').innerHTML = data.sd2+"%";
        }
    })
}
function bsb_device4(){
    $.ajax({
        type: 'GET',
        url:'http://devba.kr/bsb/getData.php',
        data :{
            'modem' : 'SRCb00004_T',
            'bar'   : '0',
        },
        dataType:'json',
        success: function (data){
            document.getElementById('temp-4').innerHTML = data.sd1+"℃";
            document.getElementById('humi-4').innerHTML = data.sd2+"%";
        }
    })
}
function bsb_device5(){
    $.ajax({
        type: 'GET',
        url:'http://devba.kr/bsb/getData.php',
        data :{
            'modem' : 'SRCb00005_T',
            'bar'   : '0',
        },
        dataType:'json',
        success: function (data){
            document.getElementById('co2_val').innerHTML = data.sd1+"ppm";
            document.getElementById('h2_val').innerHTML = data.sd2+"ppm";
        }
    })
}
