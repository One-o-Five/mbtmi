import styled from "styled-components";

const Container = styled.div`
    min-height: 100dvh; /* 최신 브라우저에서 안전하게 화면 높이 */
    width: 100vw; /* 기기 가로 꽉 채우기 */
    overflow-x: hidden; /* 혹시 가로 스크롤 생기는 것 방지 */
    display: flex;
    justify-content: center;
    align-items: center;

    /* 파스텔톤 배경 그라데이션 */
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    // background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
`;

const TodayPost = () => {
    return <Container>a</Container>;
};
export default TodayPost;
