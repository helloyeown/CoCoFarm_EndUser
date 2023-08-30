import { useEffect, useState } from "react";
import Modal from "./Modal";

const {kakao} = window

const KakaoMap = ({address}) => {

    useEffect(() => {
        const container = document.getElementById('map')
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 5
        }
        const map = new kakao.maps.Map(container, options)

        const geocoder = new kakao.maps.services.Geocoder();

        
        // 주소로 좌표를 검색합니다.
        geocoder.addressSearch(address ? address : '카카오 분당' , function (result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
    
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords
          });
    
          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: '<div id="infoBox" style="width:150px;color:red;text-align:center;padding:6px 0;"></div>',
            // disableAutoPan: true
          });

          infowindow.open(map, marker);
    
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);

          // 상위 요소 찾아서 display: none 적용
          var infoBox = document.getElementById('infoBox');
          if (infoBox) {
            var parentElement = infoBox.parentNode;
            if (parentElement) {
              parentElement.parentNode.style.display = 'none';
            }
          }

        }
      })




    } , [address])


    return (
        <div >
            <div id="map" className="border-2 w-[500px] h-[250px]"></div>
        </div>
    );
}
 
export default KakaoMap;