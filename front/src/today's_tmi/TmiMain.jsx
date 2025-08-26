const TmiMain = () => {
    return (
        <TmiCard>
            <TmiTitle>
                <h2>INFJ가 좋아하는 대화주제</h2>
            </TmiTitle>
            <TmiContents>
                <p>
                    INFJ는 깊이 있는 대화를 선호하지만, 첫 단계에서는 너무
                    무겁지 않게 시작하는 게 좋아요.
                </p>
                <ul>
                    <li>
                        <strong>감정 공유형</strong> — “최근에 제일 행복했던
                        순간은 뭐였어?”, “힘들 때는 어떻게 풀어?”
                    </li>
                    <li>
                        <strong>취향 탐색형</strong> — 좋아하는 음악/영화/책,
                        가고 싶은 여행지
                    </li>
                    <li>
                        <strong>미래 상상형</strong> — “5년 뒤 너를 상상하면?”,
                        “진짜 해보고 싶은 일은?”
                    </li>
                </ul>
                <p className="tip">
                    💡 팁: 공감 리액션(“그랬구나”) + 관련 경험 나누기를 반복하면
                    친밀감이 빨리 생겨요.
                </p>
            </TmiContents>
        </TmiCard>
    );
};

// styles for TmiMain
import styled from "styled-components";

export const TmiCard = styled.section`
    width: min(560px, 100% - 24px);
    margin: 18px auto;
    padding: 16px 14px 18px;
    border-radius: 16px;
    /* background: rgba(255, 255, 255, 0.55); */
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
`;

export const TmiTitle = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    /* background: #f7feff; */
    margin-bottom: 12px;

    h2 {
        margin: 0;
        font-size: clamp(18px, 4.5vw, 22px);
        letter-spacing: -0.2px;
    }
`;

export const TmiContents = styled.div`
    border: 2px dashed #7ab6da; /* 본문 점선 박스 */
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    padding: 14px 16px;
    color: #0f172a;
    line-height: 1.7;

    p {
        margin: 0 0 10px;
    }
    ul {
        margin: 0 0 6px 1.2em;
        padding: 0;
    }
    li {
        margin: 4px 0;
    }
    strong {
        font-weight: 800;
    }

    /* 팁 박스가 필요하면 클래스만 붙여서 사용 */
    .tip {
        margin-top: 10px;
        background: #fffaf0;
        border: 1px solid #fde68a;
        padding: 10px 12px;
        border-radius: 8px;
        font-weight: 600;
    }
`;

export default TmiMain;
