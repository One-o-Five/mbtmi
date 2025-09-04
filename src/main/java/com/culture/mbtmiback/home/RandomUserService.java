package com.culture.mbtmiback.home;

import com.culture.mbtmiback.account.AccountModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RandomUserService {


    private final RandomUserMapper randomUserMapper;

    public RandomUserService(RandomUserMapper randomUserMapper) {
        this.randomUserMapper = randomUserMapper;
    }

    public List<RandomUserModel> getRandomUsersExceptMe(Long currentUserId) {
        // Mapper에서 50명의 유저 + 태그 row 가져오기
        List<RandomUserModel> rows = randomUserMapper.findRandomUserExcept(currentUserId);
        for (RandomUserModel row : rows) {
            row.setTags(randomUserMapper.findTagsByUser(row.getUser_id()));
        }
        if (rows.isEmpty()) return List.of();
        System.out.println(rows);

        return rows;
    }
}
