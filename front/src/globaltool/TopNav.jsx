import styled from "styled-components";
import TmiLogo from "../assets/img/tmi.png";

const TopNav = () => {
    return (
        <TopBar>
            <TopBow>
                <Button>오늘의 글</Button>
                <Button>
                    <TmiZone>
                        <div>오늘의</div>
                        <TmiImg src={TmiLogo} alt="tmilogo" />
                    </TmiZone>
                </Button>
            </TopBow>
            <hr />
        </TopBar>
    );
};

const TopBar = styled.nav`
    position: sticky; /* 화면 하단 고정 */
    left: 0;
    right: 0;
    top: 0;
    border-top: 1px solid #cfe8ee;
    padding: 10px 12px calc(env(safe-area-inset-bottom, 0) + 10px);
    z-index: 10;
    width: inherit;
`;

const TopBow = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const TmiZone = styled.div`
    display: flex;
    align-items: center;
`;

const TmiImg = styled.img`
    width: 35px;
    height: auto;
`;

const Button = styled.button`
    padding: 0;
    background: none;
    color: black;
`;

export default TopNav;
