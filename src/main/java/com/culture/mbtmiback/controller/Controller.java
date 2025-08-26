package com.culture.mbtmiback.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController

public class Controller {

    @GetMapping("/api/data/hello")
    public Map<String, String> hello() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "연결 성공");
        System.out.println(11);

        return response;
    }
}