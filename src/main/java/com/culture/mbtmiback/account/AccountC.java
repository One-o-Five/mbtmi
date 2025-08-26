package com.culture.mbtmiback.account;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AccountC {

    @Autowired
    private AccountService accountService;


    @PostMapping("/login")
    public AccountModel login(@RequestBody AccountModel user, HttpSession session) {
        System.out.println("받은 user: " + user);
        if (user == null || user.getUsername() == null || user.getPassword() == null) {
            System.out.println("username 또는 password 없음");
            return null;
        }

        AccountModel loginUser = accountService.login(user.getUsername(), user.getPassword());
        System.out.println("로그인 결과: " + loginUser);
        if (loginUser != null) {
            session.setAttribute("user", loginUser);
            return loginUser;
        }
        return null;
    }

}