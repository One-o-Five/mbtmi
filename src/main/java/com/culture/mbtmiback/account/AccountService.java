package com.culture.mbtmiback.account;

import com.culture.mbtmiback.mypage.TagModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountMapper accountMapper;


    public AccountModel login(String username, String password) {
        return accountMapper.login(username, password);
    }


    public boolean updateUser(Long userId, String mbti) {
        return accountMapper.updateMbti(userId, mbti) > 0;
    }


}
