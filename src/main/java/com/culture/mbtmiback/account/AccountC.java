package com.culture.mbtmiback.account;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        AccountModel loginUser = accountService.login(user.getUsername(), user.getPassword());
        System.out.println("로그인 결과: " + loginUser);
        if (loginUser != null) {
            session.setAttribute("user", loginUser);
            System.out.println("세션 생성/저장 - sessionId: " + session.getId());
            return loginUser;
        }
        return null;
    }

    @GetMapping("/check-session")
    public Map<String, Object> checkSession(HttpSession session) {
        Map<String, Object> result = new HashMap<>();
        AccountModel user = (AccountModel) session.getAttribute("user");
        System.out.println("check-session called - sessionId: " + session.getId() + ", user: " + user);
        if (user != null) {
            result.put("loggedIn", true);
            result.put("user", user);
        } else {
            result.put("loggedIn", false);
        }
        return result;
    }

    @GetMapping("/logout")
    public Map<String, Object> logout(HttpSession session) {
        Map<String, Object> result = new HashMap<>();
        try {
            session.invalidate(); // 세션 제거
            result.put("loggedIn", false);
            result.put("message", "로그아웃 성공");
        } catch (IllegalStateException e) {
            // 세션이 이미 만료된 경우
            result.put("loggedIn", false);
            result.put("message", "세션 없음");
        }
        return result;
    }



}