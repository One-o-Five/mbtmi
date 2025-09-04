package com.culture.mbtmiback.mypage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MyPageService {

    @Autowired
    private MyPageMapper myPageMapper;

    //유저 태그 검색
    public List<TagModel> getUserTags(Long userId, String type) {
        return myPageMapper.getUserTags(userId, type);
    }

    //유저 태그 변경
    @Transactional
    public void updateUserTags(Long userId, List<String> newTags) {
        // 1. 기존 SELF 태그 삭제
        myPageMapper.deleteUserTags(userId, "SELF");

        // 2. 새 태그 INSERT
        for (String tagName : newTags) {
            myPageMapper.insertUserTag(userId, tagName, "SELF");
        }
    }

    //유저 취미 검색
    public List<HobbyModel> getUserHobbys(Long userId, String type) {
        return myPageMapper.getUserHobbys(userId, type);
    }


    //유저 취미 변경
    @Transactional
    public void updateHobbies(Long userId, List<String> newTags) {
        // 1. 기존 SELF 태그 삭제
        myPageMapper.deleteUserHobbies(userId, "SELF");

        // 2. 새 태그 INSERT
        for (String tagName : newTags) {
            myPageMapper.insertUserHobbies(userId, tagName, "SELF");
        }
    }

}
