// src/pages/Complain.jsx
import styled from "styled-components";
import Container from "../globaltool/Container";

const reasons = [
    "스팸/광고",
    "부적절한 언어/혐오",
    "사칭/허위 정보",
    "개인정보 노출",
    "기타",
];

const Complain = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        // TODO: 전송 로직
    };

    return (
        <Container>
            <Page>
                <Header>
                    <Title>신고하기</Title>
                </Header>

                <Divider />

                <ProfileCard>
                    <Avatar src="https://placehold.co/96x96" alt="profile" />
                    <ProfileText>
                        <Nickname>곽아이디어뱅크</Nickname>
                        <Email>kmjangel123@gmail.com</Email>
                    </ProfileText>
                </ProfileCard>

                <Divider />

                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label htmlFor="reason">신고 사유</Label>
                        <Select id="reason" required defaultValue="">
                            <option value="" disabled>
                                신고 사유를 선택해 주세요.
                            </option>
                            {reasons.map((r) => (
                                <option key={r} value={r}>
                                    {r}
                                </option>
                            ))}
                        </Select>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="detail">
                            기타 사유를 입력해 주세요.
                        </Label>
                        <Textarea
                            id="detail"
                            rows={6}
                            placeholder="자세한 내용을 기입해 주시길 바랍니다."
                        />
                        <Help>증거 캡처/링크가 있다면 함께 적어 주세요.</Help>
                    </FormGroup>

                    <Actions>
                        <Submit type="submit">신고하기</Submit>
                    </Actions>
                </Form>
            </Page>
        </Container>
    );
};

export default Complain;

/* ============ styled ============ */

/* 화면 꽉 채우기 + iOS safe-area 보정 */
/* 화면 꽉 채우기 + iOS safe-area 보정 */
const Page = styled.div`
    width: 100%; /* 90% 제거 */
    max-width: 720px; /* 필요하면 상한만 지정 (선택) */
    margin: 0 auto; /* 중앙 정렬 */
    min-height: 100dvh;
    display: flex;
    flex-direction: column;

    /* 좌우 padding을 주고 싶으면 여기서만 관리 (선택) */
    padding: 0 24px;

    gap: 0;
    padding-top: env(safe-area-inset-top, 0);
    padding-bottom: env(safe-area-inset-bottom, 0);
    box-sizing: border-box; /* 중요 */
`;

const Header = styled.header`
    width: 100%;
    margin: 24px 0 8px;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 800;
    font-size: clamp(20px, 3.8vw, 28px); /* 기기별 가변 폰트 */
    line-height: 1.3;
`;

const Divider = styled.hr`
    width: 100%;
    height: 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin: 16px 0;
`;

const ProfileCard = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: clamp(56px, 16vw, 88px) 1fr;
    align-items: center;
    gap: clamp(12px, 3.5vw, 20px);
`;

const Avatar = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Nickname = styled.div`
    font-weight: 700;
    font-size: clamp(18px, 4.2vw, 22px);
`;

const Email = styled.div`
    font-size: clamp(12px, 3.4vw, 14px);
    opacity: 0.7;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 4.5vw, 28px);
    margin: 8px 0 24px;
`;

const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Label = styled.label`
    font-size: clamp(14px, 3.6vw, 16px);
    font-weight: 700;
`;

const baseField = `
  width: 100%;
  box-sizing: border-box;        /* ★ 추가: padding 포함 계산 */
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: clamp(14px, 3.6vw, 16px);
  outline: none;
  background: #fff;
  transition: box-shadow .15s ease, border-color .15s ease;
  &:focus {
    border-color: rgba(0,0,0,.3);
    box-shadow: 0 0 0 4px rgba(0,0,0,.06);
  }
`;

const Select = styled.select`
    ${baseField}
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
        linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position: calc(100% - 22px) calc(50% - 3px),
        calc(100% - 16px) calc(50% - 3px);
    background-size: 6px 6px, 6px 6px;
    background-repeat: no-repeat;
    color: black;
`;

const Textarea = styled.textarea`
    ${baseField}
    resize: vertical;
    min-height: clamp(120px, 28vh, 220px);
    color: black;
`;

const Help = styled.p`
    font-size: clamp(11px, 3.2vw, 12px);
    opacity: 0.6;
    margin: -4px 2px 0;
`;

const Actions = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 8px 0 env(safe-area-inset-bottom, 0); /* 하단 바와 간격 */
`;

const Submit = styled.button`
    border: none;
    border-radius: 14px;
    padding: 12px 20px;
    font-size: clamp(14px, 3.8vw, 16px);
    font-weight: 700;
    cursor: pointer;
    background: #e6f1ff; /* 임시 */
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.08);
    transition: transform 0.05s ease, box-shadow 0.05s ease;
    &:active {
        transform: translateY(2px);
        box-shadow: 0 4px 0 rgba(0, 0, 0, 0.06);
    }
`;
