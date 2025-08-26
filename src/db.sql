CREATE TABLE USERS (
                       user_id       NUMBER PRIMARY KEY,                 -- PK
                       username      VARCHAR2(50) UNIQUE NOT NULL,       -- 아이디
                       password      VARCHAR2(100) NOT NULL,             -- 비밀번호
                       name          VARCHAR2(50) NOT NULL,              -- 이름
                       birth_date    DATE,                               -- 생년월일
                       created_at    DATE DEFAULT SYSDATE,               -- 생성일
                       mbti          VARCHAR2(4),                        -- 본인 MBTI
                       desired_mbti  VARCHAR2(4),                        -- 원하는 상대방 MBTI
                       self_intro    VARCHAR2(1000),                     -- 자기소개
                       photo_url     VARCHAR2(255)                       -- 프로필 사진 경로
);
SELECT * FROM users WHERE username='123' AND password='1234';

create sequence users_seq;

select * from USERS;

insert into users values (users_seq.nextval,'system',1234,'admin','1994-03-17',sysdate,'ESTP','INFP','안녕하세요 많은 이용 바랍니다','pig.png');
insert into users values (users_seq.nextval,'yjm',123,'유지민','2000-04-11',sysdate,'ENTP','INFP','안녕하세요 유지민입니다','karina.png');



insert into users values (users_seq.nextval,'123',123,'유지민','2000-04-11',sysdate,'ENTP','INFP','안녕하세요 유지민입니다','karina.png');