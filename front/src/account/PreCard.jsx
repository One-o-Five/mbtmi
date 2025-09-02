import styled from "styled-components";
import logoimage from "../assets/img/mbtmi.jpg";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../SignupProvider";

const PreCard = () => {
    const navigate = useNavigate();
    const { formData, setFormData } = useSignup();

    const profile = {
        name: "유지민",
        age: 26,
        mbti: "ENFP",
        tags: [
            "집순이_집돌이",
            "여행_좋아함",
            "반려동물",
            "책읽기_취미",
            "운동하는_사람",
            "아침형인간",
        ],
    };

    const handleEditIntroduce = () => {
        setReturnToSummary(true);
        navigate("/introduce");
    };

    return (
        <Container>
            <LogoImage
                src={logoimage}
                alt=""
                style={{ userSelect: "none", WebkitUserDrag: "none" }}
            />
            <Card>
                <ProfileImage
                    src={formData.profile?.preview || logoimage} // 미리보기 없으면 로고로 대체
                    alt="profile"
                />
                <Name>
                    {profile.name} ({profile.age}) / {profile.mbti}
                </Name>
                <TagList>
                    {profile.tags.map((tag, index) => (
                        <Tag key={index}>#{tag}</Tag>
                    ))}
                </TagList>
            </Card>
            <Btn onClick={history.back}>완료</Btn>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */

    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative; /* 🔥 하단 네비 절대위치 기준 */
    padding-top: 60px;
`;

const LogoImage = styled.img`
    position: absolute;
    top: 0px;
    left: 30px;
    object-fit: cover;
    width: 150px;
`;

const Card = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 24px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`;

const ProfileImage = styled.img`
    width: 80%;
    border-radius: 20px;
    object-fit: cover;
`;

const Name = styled.h2`
    font-size: 1.5rem;
`;

const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

const Tag = styled.span`
    background: #fbc2eb;
    color: #333;
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 0.85rem;
`;

const Btn = styled.button`
    width: 110px;
    height: 50px;
    padding: 12px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.36);
    color: #fff;

    backdrop-filter: blur(6px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;

export default PreCard;
