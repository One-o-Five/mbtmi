package com.culture.mbtmiback.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountMapper accountMapper;


    public AccountModel login(String username, String password) {
        return accountMapper.login(username, password);
    }

}
