// MapSearch.jsx
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/* ---------- UI ---------- */
const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
const SearchBar = styled.form`
    display: flex;
    gap: 8px;
    padding: 0 12px;
    padding-top: 10px;
`;
const Input = styled.input`
    flex: 1;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 0 12px;
    font-size: 15px;
    outline: none;
    background: #fff;
    color: #111;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;
const Button = styled.button`
    height: 40px;
    padding: 0 14px;
    border-radius: 8px;
    border: none;
    background: #222;
    color: #fff;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;
const ControlsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    color: black;
`;
const Chips = styled.div`
    display: flex;
    gap: 10px;
    color: black;
`;
const Chip = styled.button`
    height: 40px;
    padding: 0 14px;
    border-radius: 12px;
    border: 1px solid #e6e6e6;
    background: #fff;
    font-weight: 600;
    color: #111;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;
const Count = styled.div`
    font-weight: 700;
    color: #111;
`;
const Dropdown = styled.div`
    position: absolute;
    margin-top: 6px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 5;
    color: black;
`;
const OptBtn = styled.button`
    display: block;
    padding: 12px 14px;
    width: 180px;
    text-align: left;
    background: #fff;
    border: 0;
    color: black;
    &:hover {
        background: #f7f7f7;
    }
`;

const Wrap = styled.div`
    width: 100%;
    height: clamp(480px, 60vh, 520px);
    border-radius: 12px;
    overflow: hidden;
`;
const MapDiv = styled.div`
    width: 100%;
    height: 100%;
`;

/* ---------- 카테고리 & 정렬 정의 ---------- */
// 카테고리 그룹코드: https://apis.map.kakao.com/web/documentation/#CategoryGroupCode
const CATEGORIES = [
    { label: "전체", code: "" },
    { label: "카페", code: "CE7" },
    { label: "음식점", code: "FD6" },
    { label: "편의점", code: "CS2" },
    { label: "대형마트", code: "MT1" },
    { label: "지하철역", code: "SW8" },
];

const SORTS = [
    { label: "정확도순", value: "accuracy" }, // 기본
    { label: "거리순", value: "distance" }, // 맵 중심 기준
    { label: "이름순", value: "name" }, // 클라이언트 정렬
];

/* ---------- SDK 로더 ---------- */
function loadKakaoSDK() {
    return new Promise((resolve, reject) => {
        const ready = () => {
            // autoload=false 로 붙였으므로 여기서 반드시 초기화
            window.kakao.maps.load(resolve);
        };

        // 이미 SDK가 로드된 경우에도 초기화 절차는 동일하게
        if (window.kakao?.maps?.services) {
            ready();
            return;
        }

        const id = "kakao-map-sdk";
        const exist = document.getElementById(id);

        if (exist) {
            exist.addEventListener("load", ready, { once: true });
            exist.addEventListener("error", reject, { once: true });
            return;
        }

        const s = document.createElement("script");
        s.id = id;
        s.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
            import.meta.env.VITE_KAKAO_KEY
        }&autoload=false&libraries=services`;
        s.onload = ready;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

/* ---------- 메인 컴포넌트 ---------- */
export default function MapSearch({ lat = 37.5665, lng = 126.978, level = 5 }) {
    const mapRef = useRef(null);
    const mapObj = useRef(null);
    const markersRef = useRef([]);
    const infoRef = useRef(null);

    // UI 상태
    const [keyword, setKeyword] = useState("");
    const [openFilter, setOpenFilter] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const [category, setCategory] = useState(CATEGORIES[0]); // {label, code}
    const [sortBy, setSortBy] = useState(SORTS[0]); // {label, value}
    const [resultCount, setResultCount] = useState(0);

    /* 지도 초기화 */
    useEffect(() => {
        let destroyed = false;
        loadKakaoSDK()
            .then(() => {
                window.kakao.maps.load(() => {
                    if (destroyed || !mapRef.current) return;
                    const center = new window.kakao.maps.LatLng(lat, lng);
                    const map = new window.kakao.maps.Map(mapRef.current, {
                        center,
                        level,
                    });
                    mapObj.current = map;
                    infoRef.current = new window.kakao.maps.InfoWindow({
                        zIndex: 2,
                    });
                });
            })
            .catch((e) => console.error("Kakao SDK load failed:", e));
        return () => {
            destroyed = true;
            if (mapRef.current) mapRef.current.innerHTML = "";
            markersRef.current.forEach((m) => m.setMap(null));
            markersRef.current = [];
            infoRef.current?.close();
        };
    }, [lat, lng, level]);

    const clearMarkers = () => {
        markersRef.current.forEach((m) => m.setMap(null));
        markersRef.current = [];
        infoRef.current?.close();
    };

    const addMarker = (place) => {
        const kakao = window.kakao;
        const pos = new kakao.maps.LatLng(place.y, place.x);
        const marker = new kakao.maps.Marker({ position: pos });
        marker.setMap(mapObj.current);
        markersRef.current.push(marker);
        kakao.maps.event.addListener(marker, "click", () => {
            infoRef.current.setContent(`
        <div style="padding:6px 10px">
          <strong>${place.place_name}</strong><br/>
          <small>${place.road_address_name || place.address_name || ""}</small>
        </div>
      `);
            infoRef.current.open(mapObj.current, marker);
        });
        return pos;
    };

    const runKeywordSearch = () => {
        const kakao = window.kakao;
        const ps = new kakao.maps.services.Places(mapObj.current);
        const options = { size: 15 };

        if (sortBy.value === "distance") {
            options.sort = "distance";
            options.location = mapObj.current.getCenter(); // 중심 기준 거리순
        } else {
            options.sort = "accuracy";
        }

        ps.keywordSearch(
            keyword,
            (data, status) => {
                if (status !== kakao.maps.services.Status.OK) {
                    setResultCount(0);
                    alert("검색 결과가 없습니다.");
                    return;
                }

                // 카테고리 필터 (선택된 code가 있을 때만)
                const filtered = category.code
                    ? data.filter(
                          (d) => d.category_group_code === category.code
                      )
                    : data;

                const list =
                    sortBy.value === "name"
                        ? [...filtered].sort((a, b) =>
                              a.place_name.localeCompare(b.place_name, "ko")
                          )
                        : filtered;

                drawResults(list);
            },
            options
        );
    };

    const runCategoryOnlySearch = () => {
        const kakao = window.kakao;
        const ps = new kakao.maps.services.Places(mapObj.current);
        const options = {
            location: mapObj.current.getCenter(),
            radius: 2000, // 2km 내
            size: 15,
        };
        if (sortBy.value === "distance") options.sort = "distance";

        ps.categorySearch(
            category.code,
            (data, status) => {
                if (status !== kakao.maps.services.Status.OK) {
                    setResultCount(0);
                    alert("검색 결과가 없습니다.");
                    return;
                }
                const list =
                    sortBy.value === "name"
                        ? [...data].sort((a, b) =>
                              a.place_name.localeCompare(b.place_name, "ko")
                          )
                        : data;

                drawResults(list);
            },
            options
        );
    };

    const drawResults = (list) => {
        clearMarkers();
        const kakao = window.kakao;
        const bounds = new kakao.maps.LatLngBounds();
        list.forEach((place) => bounds.extend(addMarker(place)));
        if (!bounds.isEmpty()) mapObj.current.setBounds(bounds);
        setResultCount(list.length);
    };

    /* 검색 실행 */
    const doSearch = (e) => {
        e?.preventDefault();
        if (!mapObj.current) return;

        if (keyword.trim()) {
            runKeywordSearch();
        } else if (category.code) {
            // 키워드가 없고 카테고리만 선택한 경우
            runCategoryOnlySearch();
        } else {
            alert("검색어를 입력하거나 카테고리를 선택하세요.");
        }

        // 드롭다운 닫기
        setOpenFilter(false);
        setOpenSort(false);
    };

    /* UI */
    return (
        <Section>
            <SearchBar onSubmit={doSearch} autoComplete="off">
                <Input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="장소, 카페, 전시…"
                />
                <Button type="submit">검색</Button>
            </SearchBar>

            <ControlsRow>
                <div style={{ position: "relative" }}>
                    <Chips>
                        <Chip
                            type="button"
                            onClick={() => {
                                setOpenFilter((v) => !v);
                                setOpenSort(false);
                            }}>
                            {category.label || "필터"} ▾
                        </Chip>
                        <Chip
                            type="button"
                            onClick={() => {
                                setOpenSort((v) => !v);
                                setOpenFilter(false);
                            }}>
                            {sortBy.label} ▾
                        </Chip>
                    </Chips>

                    {/* 필터 드롭다운 */}
                    {openFilter && (
                        <Dropdown>
                            {CATEGORIES.map((c) => (
                                <OptBtn
                                    key={c.code || "ALL"}
                                    onClick={() => {
                                        setCategory(c);
                                        setOpenFilter(false);
                                    }}>
                                    {c.label}
                                </OptBtn>
                            ))}
                        </Dropdown>
                    )}

                    {/* 정렬 드롭다운 */}
                    {openSort && (
                        <Dropdown style={{ left: 110 }}>
                            {SORTS.map((s) => (
                                <OptBtn
                                    key={s.value}
                                    onClick={() => {
                                        setSortBy(s);
                                        setOpenSort(false);
                                    }}>
                                    {s.label}
                                </OptBtn>
                            ))}
                        </Dropdown>
                    )}
                </div>

                <Count>결과 {resultCount}개</Count>
            </ControlsRow>

            <Wrap>
                <MapDiv ref={mapRef} />
            </Wrap>
        </Section>
    );
}
