// src/components/PreCardModal.jsx
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useSignup } from "../SignupProvider";
import logoimage from "../assets/img/mbtmi.jpg";

const PreCardModal = ({ onClose }) => {
    const { formData } = useSignup();
    const mbti = `${formData?.mbti?.EI ?? ""}${formData?.mbti?.SN ?? ""}${
        formData?.mbti?.TF ?? ""
    }${formData?.mbti?.JP ?? ""}`;

    // ESC로 닫기 + 바디 스크롤 잠금
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose?.();
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <Overlay onClick={onClose}>
            <Dialog onClick={(e) => e.stopPropagation()}>
                <CloseBtn onClick={onClose} aria-label="close">
                    ×
                </CloseBtn>

                <Card>
                    <ProfileImage
                        src={formData.profile?.preview || logoimage}
                        alt="profile"
                    />
                    <Name>
                        {formData.name}({formData.age}) / {mbti}
                    </Name>

                    <PreTagZone>
                        {(formData.hobby ?? []).map((h, i) => (
                            <Tag key={`h-${i}`}>{h}</Tag>
                        ))}
                        {(formData.introTags ?? []).map((t, i) => (
                            <Tag key={`t-${i}`}>{t}</Tag>
                        ))}
                    </PreTagZone>
                </Card>

                <Buttons>
                    <Btn onClick={onClose}>닫기</Btn>
                </Buttons>
            </Dialog>
        </Overlay>,
        document.body
    );
};

export default PreCardModal;

// ===== styled =====
const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

const Dialog = styled.div`
    width: 48vh;
    height: 92vh;
    overflow: auto;
    border-radius: 20px;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    padding: 18px 16px 16px;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 8px;
    right: 10px;
    border: 0;
    background: transparent;
    color: #fff;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
`;

const Card = styled.div`
    width: 85%;
    padding: 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
`;

const ProfileImage = styled.img`
    width: 85%;
    border-radius: 20px;
    object-fit: cover;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const PreTagZone = styled.div`
    /* 카드 안에서 줄바꿈되며 감싸지기 */
    align-self: stretch;
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* ⭐ 줄바꿈 */
    gap: 10px 8px;
    justify-content: center;
    margin-top: 4px;
`;

const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    background: #fbc2eb;
    color: #333;
    padding: 6px 10px;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
`;

const Buttons = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: center;
`;

const Btn = styled.button`
    min-width: 110px;
    height: 44px;
    padding: 0 16px;
    border-radius: 12px;
    border: none;
    background: rgba(255, 255, 255, 0.36);
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background: rgba(255, 255, 255, 0.5);
    }
`;
