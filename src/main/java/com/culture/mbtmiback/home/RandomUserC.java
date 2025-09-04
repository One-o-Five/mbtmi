package com.culture.mbtmiback.home;

import com.culture.mbtmiback.account.AccountModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class RandomUserC {

    private final RandomUserService randomUserService;

    public RandomUserC(RandomUserService randomUserService) {
        this.randomUserService = randomUserService;
    }

    @GetMapping("/random/{currentUserId}")
    public ResponseEntity<List<RandomUserModel>> getRandomUsers(@PathVariable Long currentUserId) {
        System.out.println("===== /random 호출 =====");
        System.out.println("현재 로그인한 userId: " + currentUserId);

        List<RandomUserModel> randomUsers = randomUserService.getRandomUsersExceptMe(currentUserId);

        if (randomUsers == null) {
            System.out.println("랜덤 유저가 존재하지 않음");
            return ResponseEntity.noContent().build();
        }

        System.out.println("랜덤 유저 반환: " + randomUsers);
        return ResponseEntity.ok(randomUsers);
    }
}
