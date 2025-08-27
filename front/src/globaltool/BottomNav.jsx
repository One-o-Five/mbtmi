import styled from "styled-components";

const Bar = styled.nav`
    position: sticky; /* 화면 하단 고정 */
    left: 0;
    right: 0;
    bottom: 0;
    background: #d7f1fa;
    border-top: 1px solid #cfe8ee;
    padding: 10px 12px calc(env(safe-area-inset-bottom, 0) + 10px);
    z-index: 10;
    width: inherit;
`;

const Row = styled.div`
    max-width: 560px;
    margin: 0 auto;
    display: grid;
    display: flex;
    justify-content: space-evenly;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 8px;
`;

const Btn = styled.button`
    appearance: none;
    border: 0;
    background: none;
    font-size: 24px;
    padding: 8px 0;
    cursor: pointer;
`;

const BottomNav = () => {
    return (
        <Bar>
            <Row>
                <Btn>🏠</Btn>
                <Btn>🔍</Btn>
                <Btn>❤️</Btn>
                <Btn>➕</Btn>
                <Btn>🔔</Btn>
            </Row>
        </Bar>
    );
};
export default BottomNav;
