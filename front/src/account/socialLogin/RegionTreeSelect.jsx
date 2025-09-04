// src/components/RegionTreeSelect.jsx
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Container from "../../globaltool/Container";
import { useSignup } from "../../SignupProvider";
import { useNavigate } from "react-router-dom";

export const REGION_GROUPS = {
    특별시: ["서울특별시"],
    광역시: [
        "부산광역시",
        "대구광역시",
        "인천광역시",
        "광주광역시",
        "대전광역시",
        "울산광역시",
    ],
    도: [
        "경기도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "강원도",
    ],
    특별자치도: ["제주특별자치도"],
    // 특별자치시: ["세종특별자치시"],
};

const RegionTreeSelect = ({
    value = undefined, // 부모가 주면 동기화, 안 주면 내부 상태로 동작
    onChange,
    onNext,
    nextLabel = "다음으로",
}) => {
    const allGroups = useMemo(() => Object.keys(REGION_GROUPS), []);
    const [expanded, setExpanded] = useState(new Set(allGroups)); // 처음부터 전부 펼침
    const [selected, setSelected] = useState(value ?? ""); // 내부 선택 상태

    // 부모가 value를 주면 selected 동기화
    useEffect(() => {
        if (value !== undefined) setSelected(value ?? "");
    }, [value]);

    const { formData, setFormData } = useSignup();

    const navigate = useNavigate();

    return (
        <Container>
            <Top>
                <h3>거주 지역을 선택해주세요!</h3>
            </Top>
            <Wrap>
                <Panel role="listbox" aria-label="지역 선택">
                    {Object.entries(REGION_GROUPS).map(([group, items]) => (
                        <Group key={group}>
                            <GroupHeader
                                type="button"
                                onClick={() =>
                                    setExpanded((prev) => {
                                        const next = new Set(prev);
                                        next.has(group)
                                            ? next.delete(group)
                                            : next.add(group);
                                        return next;
                                    })
                                }>
                                <Chevron $open={expanded.has(group)} />
                                <GroupTitle>{group}</GroupTitle>
                            </GroupHeader>

                            {expanded.has(group) && (
                                <ItemList>
                                    {items.map((name) => (
                                        <Item
                                            key={name}
                                            $active={selected === name}
                                            aria-selected={selected === name}
                                            role="option"
                                            onClick={() => {
                                                setSelected(name); // 내부 상태
                                                onChange?.(name); // 부모에 알림(선택)
                                            }}>
                                            <Dot aria-hidden>
                                                {selected === name ? "●" : "○"}
                                            </Dot>
                                            <span>{name}</span>
                                        </Item>
                                    ))}
                                </ItemList>
                            )}
                        </Group>
                    ))}

                    <Footer>
                        <Selected>{selected || "지역을 선택하세요"}</Selected>
                        <NextBtn
                            disabled={!selected}
                            onClick={() => {
                                if (!selected) return;
                                // ✅ 여기서 컨텍스트에 문자열로 저장
                                setFormData((prev) => ({
                                    ...prev,
                                    location: selected,
                                }));
                                navigate("/selmbti"); // ✅ 내부에서 바로 이동
                            }}>
                            {nextLabel}
                        </NextBtn>
                    </Footer>
                </Panel>
            </Wrap>
        </Container>
    );
};

export default RegionTreeSelect;

/* ===== styled ===== */
const Top = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;
const Wrap = styled.div`
    width: 360px;
    max-width: 92vw;
`;
const Panel = styled.div`
    width: 100%;
    border-radius: 16px;
    background: #fff;
    color: #000;
    box-shadow: 0 14px 38px rgba(0, 0, 0, 0.18);
    overflow: hidden;
`;
const Group = styled.div`
    border-bottom: 1px solid #eee;
    &:last-child {
        border-bottom: 0;
    }
`;
const GroupHeader = styled.button`
    width: 100%;
    background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
    border: 0;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    &:hover {
        background: #f8f8f8;
    }
`;
const GroupTitle = styled.span`
    font-weight: 700;
    color: #333;
`;
const Chevron = styled.span`
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #666;
    transform: rotate(${(p) => (p.$open ? "90deg" : "0deg")});
    transition: transform 0.15s ease;
`;
const ItemList = styled.ul`
    list-style: none;
    margin: 6px 0 10px 24px;
    padding: 0 12px 6px 0;
`;
const Item = styled.li`
    padding: 8px 6px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    background: ${(p) => (p.$active ? "rgba(166,193,238,.22)" : "transparent")};
    &:hover {
        background: rgba(166, 193, 238, 0.12);
    }
`;
const Dot = styled.span`
    width: 16px;
    text-align: center;
    color: #6b90d9;
`;
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border-top: 1px solid #eee;
`;
const Selected = styled.div`
    flex: 1;
    min-height: 24px;
    color: #555;
`;
const NextBtn = styled.button`
    min-width: 110px;
    height: 40px;
    padding: 0 14px;
    border: 0;
    border-radius: 10px;
    font-weight: 700;
    color: #fff;
    background: ${(p) =>
        p.disabled ? "rgba(166,193,238,.4)" : "rgba(166,193,238,.95)"};
    cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
    transition: 0.15s;
    &:hover {
        background: ${(p) =>
            p.disabled ? "rgba(166,193,238,.4)" : "rgba(107,144,217,1)"};
    }
`;
