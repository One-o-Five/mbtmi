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

//    @PostMapping("/login")
//    public AccountModel login(@RequestBody AccountModel user, HttpSession session) {
//        System.out.println("받은 user: " + user);
//        if (user == null || user.getUsername() == null || user.getPassword() == null) {
//            System.out.println("username 또는 password 없음");
//            return null;
//        }
//
//        AccountModel loginUser = accountService.login(user.getUsername(), user.getPassword());
//        System.out.println("로그인 결과: " + loginUser);
//        if (loginUser != null) {
//            session.setAttribute("user", loginUser);
//            return loginUser;
//        }
//        return null;
//    }
//
//    // ✅ 세션 확인 엔드포인트 추가
//    @GetMapping("/check-session")
//    public Map<String, Object> checkSession(HttpSession session) {
//        Map<String, Object> result = new HashMap<>();
//        AccountModel user = (AccountModel) session.getAttribute("user");
//
//        if (user != null) {
//            result.put("loggedIn", true);
//            result.put("user", user);
//        } else {
//            result.put("loggedIn", false);
//        }
//        return result;
//    }


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





}