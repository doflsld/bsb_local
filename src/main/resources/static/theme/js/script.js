
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

    function zeroPadding(num, digit){
    var zero = '';
    for (var i = 0; i < digit; i++){
    zero += 0;
}
    return (zero + num).slice(-digit);
}
    return setInterval(updateTime, 1000);
}());

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Date', 'Percent'],
    ['03.29',  85],
    ['03.30',  91],
    ['03.31',  95],
    ['04.01',  88],
    ['04.02',  90],
    ['04.03',  87],
    ['04.04',  97],
    ['04.05',  90],
    ['04.06',  87],
    ['04.07',  98]
    ]);

    var options = {
    vAxis: {minValue: 0},
    legend : 'none',
    series: {0:{lineWidth: 1, pointSize:4, color: '#EF7B00', pointShape:'circle'}},
    width: 800, height: 300
};

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}


    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
    center: new kakao.maps.LatLng(36.055079, 125.871189), // 지도의 중심좌표
    level: 12 // 지도의 확대 레벨
};

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc1 = '../static/asset/images/s-images/marker_d.png', // 마커이미지의 주소입니다
    imageSize1 = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
    imageOption1 = {offset: new kakao.maps.Point(20, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
    markerPosition1 = new kakao.maps.LatLng(35.159467, 126.851691); // 마커가 표시될 위치입니다

    var imageSrc2 = '../static/asset/images/s-images/marker_a.png', // 마커이미지의 주소입니다
    imageSize2 = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
    imageOption2 = {offset: new kakao.maps.Point(20, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
    markerPosition2 = new kakao.maps.LatLng(36.629109, 127.322151); // 마커가 표시될 위치입니다


    // 마커를 생성합니다
    var marker1 = new kakao.maps.Marker({
    position: markerPosition1,
    image: markerImage1, // 마커이미지 설정
    clickable: true
});

    var marker2 = new kakao.maps.Marker({
    position: markerPosition2,
    image: markerImage2, // 마커이미지 설정
    clickable: true
});

    // 마커가 지도 위에 표시되도록 설정합니다
    marker1.setMap(map);
    marker2.setMap(map);

    // 마커 클릭 시 페이지 이동
    // kakao.maps.event.addListener(marker1, 'click', function() {
    //     location.href="";
    // });
    // kakao.maps.event.addListener(marker2, 'click', function() {
    //     location.href="";
    // });
    
    
    var delay = 5000; // 1000ms = 1 second

    function hum(){
    var humidity = Math.floor((Math.random() * (60-40)) + 40);
    return humidity+"%";
}
    function temp(){
    var temp = (Math.random() * (29-27)) + 27;
    temp = temp.toFixed(1);
    return temp+"℃";
}

    function pulse(){
    $(".hum").each(function(){
    var color = hum();
    $(this).text(color);
});
    $(".temp").each(function(){
    var color = temp();
    $(this).text(color);
});
}


    var fire = setInterval(pulse, delay);
    