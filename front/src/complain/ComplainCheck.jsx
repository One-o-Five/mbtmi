// src/pages/Complain.jsx
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
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
    const location = useLocation();
    const qs = useMemo(
        () => new URLSearchParams(location.search),
        [location.search]
    );

    // 잠금 여부: ?readonly=1 또는 state.readonly === true
    const readonly =
        qs.get("readonly") === "1" ||
        (typeof location.state?.readonly === "boolean" &&
            location.state.readonly);

    // 초기값: 쿼리 > state > 기본값
    const initReason = qs.get("reason") ?? location.state?.reason ?? "";
    const initDetail = qs.get("detail") ?? location.state?.detail ?? "";

    const [form, setForm] = useState({
        reason: initReason,
        detail: initDetail,
    });

    useEffect(() => {
        setForm({ reason: initReason, detail: initDetail });
    }, [initReason, initDetail]);

    const onChange = (e) => {
        const { id, value } = e.target;
        setForm((p) => ({ ...p, [id]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const action =
            e.nativeEvent?.submitter?.dataset?.action || "REPORT_ONLY"; // BAN_1W|BAN_1M|BAN_PERM
        const fd = new FormData(e.currentTarget);
        const payload = Object.fromEntries(fd.entries());
        const body = { ...payload, action };

        console.log("신고/제재 전송:", body);
        // TODO:
        // fetch("/api/complain/decision", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(body),
        // })
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

                        {/* 🔒 select는 disabled면 전송에서 빠짐 → hidden으로 실제 값 전송 보장 */}
                        {readonly && (
                            <input
                                type="hidden"
                                name="reason"
                                value={form.reason}
                            />
                        )}

                        <Select
                            id="reason"
                            name={readonly ? "reason_display" : "reason"}
                            required
                            value={form.reason}
                            onChange={onChange}
                            disabled={readonly}
                            aria-readonly={readonly}>
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
                            name="detail"
                            rows={6}
                            placeholder="자세한 내용을 기입해 주시길 바랍니다."
                            value={form.detail}
                            onChange={onChange}
                            readOnly={readonly}
                            aria-readonly={readonly}
                        />
                        <Help>증거 캡처/링크가 있다면 함께 적어 주세요.</Help>
                    </FormGroup>

                    {/* 🔘 제재 버튼 3종 */}
                    <SubmitZone>
                        <Submit type="submit" data-action="BAN_1W">
                            1주일 정지
                        </Submit>
                        <Submit type="submit" data-action="BAN_1M">
                            한달 정지
                        </Submit>
                        <Submit type="submit" data-action="BAN_PERM">
                            영구 정지
                        </Submit>
                    </SubmitZone>
                </Form>
            </Page>
        </Container>
    );
};

export default Complain;

/* ============ styled ============ */

const Page = styled.div`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    gap: 0;
    padding-top: env(safe-area-inset-top, 0);
    padding-bottom: env(safe-area-inset-bottom, 0);
    box-sizing: border-box;
`;

const Header = styled.header`
    width: 100%;
    margin: 24px 0 8px;
`;

const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 800;
    font-size: clamp(20px, 3.8vw, 28px);
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
  box-sizing: border-box;
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

    /* disabled여도 기존 룩 유지 */
    &:disabled {
        opacity: 1;
        color: black;
        background: #fff;
        border-color: rgba(0, 0, 0, 0.15);
        cursor: default;
    }
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

const SubmitZone = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding: 8px 0 env(safe-area-inset-bottom, 0);
`;

const Submit = styled.button`
    border: none;
    border-radius: 14px;
    padding: 12px 16px;
    font-size: clamp(14px, 3.8vw, 16px);
    font-weight: 700;
    cursor: pointer;
    background: #e6f1ff;
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.08);
    transition: transform 0.05s ease, box-shadow 0.05s ease;
    &:active {
        transform: translateY(2px);
        box-shadow: 0 4px 0 rgba(0, 0, 0, 0.06);
    }
`;
