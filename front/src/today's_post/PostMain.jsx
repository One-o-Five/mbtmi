import styled from "styled-components";
import AvatarImg from "../assets/img/postsample.jpeg";
import PostImg from "../assets/img/postsample.jpeg";

const PostMain = () => {
    const posts = [
        {
            id: 1,
            avatar: "../assets/img/postsample.jpeg",
            name: "곽여름",
            mbti: "INFJ",
            time: "3분전",
            image: "../assets/img/postsample.jpeg",
            text: "그래도 해야지",
            likes: 21,
        },
    ];

    return (
        <Post>
            {posts.map((p) => (
                <PostCard key={p.id}>
                    <Header>
                        <User>
                            <Avatar src={AvatarImg} alt="avatarimg" />
                            <Meta>
                                <div className="name">
                                    <strong>{p.name}</strong>{" "}
                                    <span className="mbti">({p.mbti})</span>
                                </div>
                                <span className="time">{p.time}</span>
                            </Meta>
                        </User>
                        <More aria-label="더 보기">⋯</More>
                    </Header>

                    {p.image && <Photo src={PostImg} alt="        " />}

                    {p.text && <Caption>{p.text}</Caption>}

                    <Actions>
                        <Heart>♡</Heart>
                        <span>좋아요 {p.likes}개</span>
                    </Actions>

                    <Divider />
                </PostCard>
            ))}
        </Post>
    );
};

/* ===== 스타일 ===== */

/* 스크롤 되는 메인 영역 (상단/하단바와 겹치지 않게 패딩) */
const Post = styled.main`
    flex: 1;
    overflow-y: auto;
    padding: -1px 12px calc(88px + env(safe-area-inset-bottom, 0));
    /* 상단 탭이 겹치면 padding-top 더 주기 */
`;

const PostCard = styled.article`
    background: #d5d5d5;
    border-radius: 16px;
    box-shadow: 2px 6px rgba(0, 0, 0, 0.05);
    padding: 16px 14px 12px;
    width: min(560px, 100% - 20px);
    margin: 0 auto 18px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

const User = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const Avatar = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`;

const Meta = styled.div`
    line-height: 1.2;
    .name {
        font-size: 18px;
        color: black;
    }
    .mbti {
        color: #4f5a60;
        font-weight: 600;
    }
    .time {
        display: block;
        margin-top: 4px;
        color: #646666;
        font-size: 14px;
    }
`;

const More = styled.button`
    appearance: none;
    border: 0;
    padding: 0;
    background: none;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
    color: black;
`;

const Photo = styled.img`
    width: 100%;
    display: block;
    border-radius: 12px;
    margin: 8px 0 12px;
    object-fit: cover;
`;

const Caption = styled.p`
    margin: 6px 0 12px;
    font-size: 18px;
    line-height: 1.45;
    color: black;
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 18px;
    color: #050505;
`;

const Heart = styled.span`
    font-size: 28px;
    line-height: 1;
    color: #f23737;
`;

const Divider = styled.hr`
    border: 0;
    border-top: 1px solid #cfe8ee;
    margin: 18px 0 6px;
`;

export default PostMain;
