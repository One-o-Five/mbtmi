package com.culture.mbtmiback.home;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class RandomUserModel {

    private Long user_id;
    private String username;
    private String name;
    private String mbti;
    private String desired_mbti;
    private String self_intro;
    private String photo_url;


    private List<TagModel> tags;
}
