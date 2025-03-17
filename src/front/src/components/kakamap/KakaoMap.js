import { useEffect } from "react";

export default function KakaoMap({ storeAddress, storeName }) {

    useEffect(() => {
        const loadKakaoMap = () => {
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);

            // Geocoder 사용 가능 (services 라이브러리 추가 후)
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.addressSearch(storeAddress, function (result, status) {
                if (status === window.kakao.maps.services.Status.OK) {
                    const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                    // 마커 추가
                    const marker = new window.kakao.maps.Marker({
                        position: coords,
                        map: map,
                    });

                    // 텍스트 오버레이 추가
                    const customOverlay = new window.kakao.maps.CustomOverlay({
                        position: coords,
                        content: `
                        <div style="position: absolute; top: -75px; left: -35px; background-color: white; padding: 5px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; color: black; text-align: center;">
                            ${storeName}
                        </div>
                    `,
                        map: map,
                    });

                    // 지도 중심 이동
                    map.setCenter(coords);
                } else {
                    console.error("주소 변환 실패:", status);
                }
            });
        };

        if (!window.kakao || !window.kakao.maps) {
            const script = document.createElement("script");
            script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=8e6dd6a628a678f5888cad9ecb94ccc7&libraries=services"; // services 추가
            script.async = true;
            script.onload = () => {
                window.kakao.maps.load(loadKakaoMap);
            };
            script.onerror = () => console.error("카카오맵 API 스크립트 로드 실패");
            document.head.appendChild(script);
        } else {
            loadKakaoMap();
        }
    }, [storeAddress]); // storeAddress 변경될 때 다시 실행

    return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
