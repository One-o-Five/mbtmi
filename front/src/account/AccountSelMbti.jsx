import { useState } from "react";
import styled from "styled-components";
// import AccountYear from "./AccountYear";
import { useNavigate } from "react-router-dom";

const AccountSelMbti = () => {
    const navigate = useNavigate();

    const [mbti, setMbti] = useState({
        EI: "", // E 또는 I
        SN: "", // S 또는 N
        TF: "", // T 또는 F
        JP: "", // J 또는 P
    });
    // MBTI 선택 핸들러
    const handleMbtiSelect = (category, value) => {
        setMbti((prev) => ({
            ...prev,
            [category]: prev[category] === value ? "" : value, // 이미 선택된 값이면 해제
        }));
    };

    const goToMbti = () => {
        (window.location = "https://www.16personalities.com/ko"), "_blank";
    };

    return (
        <Container>
            <div>
                <Title>MBIT를 입력하세요</Title>
                <Mbti>
                    <MbtiIn
                        selected={mbti.EI === "E"}
                        onClick={() => handleMbtiSelect("EI", "E")}>
                        E
                    </MbtiIn>
                    <MbtiIn
                        selected={mbti.EI === "I"}
                        onClick={() => handleMbtiSelect("EI", "I")}>
                        I
                    </MbtiIn>
                </Mbti>

                <Mbti>
                    <MbtiIn
                        selected={mbti.SN === "S"}
                        onClick={() => handleMbtiSelect("SN", "S")}>
                        S
                    </MbtiIn>
                    <MbtiIn
                        selected={mbti.SN === "N"}
                        onClick={() => handleMbtiSelect("SN", "N")}>
                        N
                    </MbtiIn>
                </Mbti>

                {/* T/F */}
                <Mbti>
                    <MbtiIn
                        selected={mbti.TF === "T"}
                        onClick={() => handleMbtiSelect("TF", "T")}>
                        T
                    </MbtiIn>
                    <MbtiIn
                        selected={mbti.TF === "F"}
                        onClick={() => handleMbtiSelect("TF", "F")}>
                        F
                    </MbtiIn>
                </Mbti>

                {/* J/P */}
                <Mbti>
                    <MbtiIn
                        selected={mbti.JP === "J"}
                        onClick={() => handleMbtiSelect("JP", "J")}>
                        J
                    </MbtiIn>
                    <MbtiIn
                        selected={mbti.JP === "P"}
                        onClick={() => handleMbtiSelect("JP", "P")}>
                        P
                    </MbtiIn>
                </Mbti>
            </div>
            <LineText>
                <hr />
                <div>당신의 MBTI</div>
                <hr />
            </LineText>
            <PersonMBTI>
                <Input
                    type="text"
                    value={`${mbti.EI}${mbti.SN}${mbti.TF}${mbti.JP}`} // 순서대로 합치기
                    readOnly // 사용자가 직접 수정하지 못하도록
                />
                <button onClick={() => navigate("/intro")}>다음으로</button>
            </PersonMBTI>
            <LineText>
                <hr />
                <div>MBTI를 모르시나요?</div>
                <hr />
            </LineText>
            <div
                style={{
                    marginBottom: "10px",
                    padding: "0 20px",
                    textAlign: "center",
                }}>
                계속을 클릭하면 당사의 서비스 이용 약관 및 개인정보 처리방침에
                동의하는 것으로 간주됩니다.
            </div>
            <LineText>
                <CheckMbtiButton onClick={() => navigate("/easymbti1")}>
                    간단한 MBTI 검사
                </CheckMbtiButton>
                <CheckMbtiButton onClick={goToMbti}>
                    실제 MBTI 검사
                </CheckMbtiButton>
            </LineText>
        </Container>
    );
};
//MBTI 검사 버튼 스타일
const CheckMbtiButton = styled.button`
    width: 160px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        /* 바깥쪽 그림자 */ -6px -6px 15px rgba(255, 255, 255, 0.1); /* 하이라이트 */
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;
`;
const Input = styled.input`
    text-align: center;
    width: 100px;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 20px;
    margin-right: 10px;
`;
const PersonMBTI = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    input,
    button {
        height: 50px; /* 높이를 동일하게 */
        font-size: 18px; /* 글자 크기 맞춤 */
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 0 15px; /* 내부 여백 */
        box-sizing: border-box;
    }

    button {
        margin-left: 10px;
        cursor: pointer;
        background-color: #a6c1ee;
        color: white;
        transition: background-color 0.3s;
        &:hover {
            background-color: #6b90d9;
        }
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px;
    font-size: 25px;
    font-weight: bold; /* 수정 */
`;

const Mbti = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
// MBTI 박스 스타일
const MbtiIn = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${(props) => (props.selected ? "#a6c1ee" : "#f0f0f0")};
    color: ${(props) => (props.selected ? "white" : "black")};

    &:hover {
        background-color: ${(props) =>
            props.selected ? "#a6c1ee" : "#e0e0e0"};
    }
`;

// 줄긋기
const LineText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    hr {
        flex: 1;
        border: none;
        border-bottom: 1px solid #ccc;
    }

    span {
        margin: 0 10px;
        color: #555;
    }
`;
//배경
const Container = styled.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    font-size: 10pt;
    padding-top: 20px;
`;

export default AccountSelMbti;
