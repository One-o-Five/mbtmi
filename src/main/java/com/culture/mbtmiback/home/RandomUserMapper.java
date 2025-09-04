package com.culture.mbtmiback.home;

import com.culture.mbtmiback.account.AccountModel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RandomUserMapper {

    @Select("""
                  SELECT *
                  FROM (
                      SELECT USER_ID, USERNAME, NAME, MBTI, DESIRED_MBTI, SELF_INTRO, PHOTO_URL
                      FROM USERS
                      WHERE USER_ID != #{currentUserId} AND USER_ID != 1
                      ORDER BY DBMS_RANDOM.VALUE
                  )
                  WHERE ROWNUM <= 5
            """)
    List<RandomUserModel> findRandomUserExcept(@Param("currentUserId") Long currentUserId);

    @Select("SELECT *\n" +
            "FROM USER_TAGS ut, tags t\n" +
            "WHERE ut.TAG_ID = t.TAG_ID and  ut.USER_ID = #{userId} and ut.type = 'SELF'")
    List<TagModel> findTagsByUser(Long userId);

}