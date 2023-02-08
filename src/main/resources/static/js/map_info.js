
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(lat, lng-0.003636), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc1 = '../asset/images/s-images/marker_test.png', // 마커이미지의 주소입니다
    imageSize1 = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
    imageOption1 = {offset: new kakao.maps.Point(20, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
    markerPosition1 = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker1 = new kakao.maps.Marker({
    position: markerPosition1,
    image: markerImage1, // 마커이미지 설정
    clickable: true
});

// 마커가 지도 위에 표시되도록 설정합니다

marker1.setMap(map);