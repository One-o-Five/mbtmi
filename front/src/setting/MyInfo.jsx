import styled from "styled-components";
import profileimage from "../assets/img/kar.jpg";

const MyInfo = () => {
    const myinfo = {
        page: "내 정보",
        name: "유지민",
        id: "ID : u_jimin",
        email: "e-mail : ujim@naver.com",
    };

    const editpage = {
        mbti: "나의 MBTI 수정하기",
        introduce: "나의 소개 수정하기",
        hobby: "나의 취미 수정하기",
        partner: "원하는 상대 정보 수정하기",
    };

    const btn = {
        edit: "프로필 수정",
        
    };

    return (
        <Container>
            <Info>
                <Page>{myinfo.page}</Page>
                <ProfileBlock>
                    <Me>
                        <ProfileImage
                            src={profileimage}
                            alt=""
                            style={{
                                userSelect: "none",
                                WebkitUserDrag: "none",
                            }}
                        />
                        <Name>{myinfo.name}</Name>
                        <Id>{myinfo.id}</Id>
                        <Mail>{myinfo.email}</Mail>
                        <Button>{btn.edit}</Button>
                    </Me>
                    <Edit>
                        <EditButton>{editpage.mbti}</EditButton>
                        <EditButton>{editpage.introduce}</EditButton>
                        <EditButton>{editpage.hobby}</EditButton>
                        <EditButton>{editpage.partner}</EditButton>
                    </Edit>
                </ProfileBlock>
            </Info>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; /* 화면 정가운데 */
    overflow-y: hidden;
    width: 100vw;
    /* 파스텔톤 배경 그라데이션 */
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`;

const Info = styled.div`
    display: flex;
    flex-direction: column; /* 세로 배치 */
    align-items: center;
    gap: 20px;
`;

const Page = styled.div`
    font-size: 20pt;
    font-weight: bold;
`;

const ProfileBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`;

const Name = styled.div`
    font-size: 12pt;
    font-weight: bold;
`;

const Me = styled.div`
    font-size: 10pt;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.3); /* 위 구분선 */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3); /* 아래 구분선 */
`;

const Id = styled.div`
    opacity: 0.8;
`;

const Mail = styled.div`
    font-size: 9pt;
`;

const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: #ffffffaa;
    cursor: pointer;
    font-size: 10pt;
    transition: all 0.2s ease;

    &:hover {
        background-color: #ffffff;
        transform: scale(1.05);
    }
`;

const Edit = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    font-size: 12pt;
    font-weight: bold;
`;

const EditButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background-color: #ffffffaa;
    cursor: pointer;
    font-size: 12pt;
    transition: all 0.2s ease;

    &:hover {
        background-color: #ffffff;
        transform: scale(1.05);
    }
`;

const ProfileImage = styled.img`
    padding: 0px 40px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    object-fit: cover;
`;

export default MyInfo;
