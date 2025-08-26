// KakaoMap.jsx
import { useEffect, useRef } from "react";
import styled from "styled-components";

const MapWrap = styled.div`
    width: 100%;
    height: 320px;
    border-radius: 12px;
    overflow: hidden;
`;

function loadKakaoSDK() {
    // document.getElementById("kakao-map-sdk")?.src;
    const src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_KEY
    }&autoload=false`; // 필요하면 &libraries=services 등 추가

    return new Promise((resolve, reject) => {
        // 이미 로드됨
        if (window.kakao?.maps) return resolve();

        const id = "kakao-map-sdk";
        const prev = document.getElementById(id);
        if (prev) {
            // 이전에 에러난 스크립트가 남아 있으면 제거 (중요!)
            prev.remove();
        }

        const s = document.createElement("script");
        s.id = id;
        s.src = src;
        s.async = true;

        s.onload = () => {
            if (window.kakao?.maps) resolve();
            else reject(new Error("SDK loaded but window.kakao.maps missing"));
        };
        s.onerror = (e) => {
            console.error("Kakao SDK load failed:", src, e);
            reject(e);
        };

        document.head.appendChild(s);
    });
}

export default function KakaoMap({ lat = 37.4979, lng = 127.0276, level = 3 }) {
    const ref = useRef(null);

    useEffect(() => {
        let destroyed = false;

        loadKakaoSDK()
            .then(() => {
                window.kakao.maps.load(() => {
                    if (destroyed || !ref.current) return;
                    const center = new window.kakao.maps.LatLng(lat, lng);
                    const map = new window.kakao.maps.Map(ref.current, {
                        center,
                        level,
                    });
                    new window.kakao.maps.Marker({ position: center }).setMap(
                        map
                    );
                });
            })
            .catch((e) => {
                // 여기까지 오면 네트워크/차단/도메인 문제
                console.error(e);
            });

        return () => {
            destroyed = true;
            if (ref.current) ref.current.innerHTML = "";
        };
    }, [lat, lng, level]);

    return <MapWrap ref={ref} />;
}
