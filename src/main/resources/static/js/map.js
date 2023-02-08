
// var lat = 35.146887; lng = 126.840188; // 김대중컨벤션센터 좌표
// var lat = 35.059141; lng = 126.543418; // 함평공장 좌표

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
        level: 12 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc1 = '../asset/images/s-images/marker_test.png', // 마커이미지의 주소입니다
    imageSize1 = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
    imageOption1 = {offset: new kakao.maps.Point(20, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
    markerPosition1 = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

/*
    var imageSrc2 = '../asset/images/s-images/marker_a.png', // 마커이미지의 주소입니다
        imageSize2 = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
        imageOption2 = {offset: new kakao.maps.Point(20, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
*/

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
/*
    var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
        markerPosition2 = new kakao.maps.LatLng(36.629109, 127.322151); // 마커가 표시될 위치입니다
*/


// 마커를 생성합니다
var marker1 = new kakao.maps.Marker({
    position: markerPosition1,
    image: markerImage1, // 마커이미지 설정
    clickable: true
});

/*    var marker2 = new kakao.maps.Marker({
        position: markerPosition2,
        image: markerImage2, // 마커이미지 설정
        clickable: true
    });*/

// 마커가 지도 위에 표시되도록 설정합니다
marker1.setMap(map);
/*
    marker2.setMap(map);
*/

kakao.maps.event.addListener(marker1, 'click', function() {
    location.href="info";
});
/*
    kakao.maps.event.addListener(marker2, 'click', function() {
        location.href="info";
    });*/
