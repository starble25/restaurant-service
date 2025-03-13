import { useEffect } from "react";

export default function KakaoMap( {storeAddress} ) {

    useEffect(() => {
        // 카카오맵 API 로드 여부 확인
        if (!window.kakao) {
            const script = document.createElement("script");
            script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=8e6dd6a628a678f5888cad9ecb94ccc7";
            script.onload = () => {
                // API 로드 후에 카카오 맵 초기화
                const container = document.getElementById("map");
                const option = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 레벨
                };
                new window.kakao.maps.Map(container, option);
            };
            script.onerror = () => console.error("카카오맵 API 로드 실패");
            document.head.appendChild(script);
        } else {
            // 이미 로드되어 있으면 바로 카카오 맵 초기화
            const container = document.getElementById("map");
            const option = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            new window.kakao.maps.Map(container, option);
        }
    }, []);

    console.log(storeAddress);

    return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
