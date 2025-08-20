import styled from "styled-components";
import mainLogo from "../assets/img/mainLogo.jpg";

const Container = styled.div`
  min-height: 100dvh; /* 최신 브라우저에서 안전하게 화면 높이 */
  width: 100vw; /* 기기 가로 꽉 채우기 */
  overflow-x: hidden; /* 혹시 가로 스크롤 생기는 것 방지 */
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Logo = styled.img`
  width: 200px; /* 원하는 가로 크기 */
  height: auto; /* 세로 비율은 자동 유지 */
  margin-bottom: 20px;
`;

const Account = () => {
  return (
    <Container>
      {/* <Logo src={mainLogo} alt="" />
    <div>
        <button>로그인</button>
        <button>회원가입</button>
    </div> */}
      asdasd
    </Container>
  );
};

export default Account;
