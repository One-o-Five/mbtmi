package com.culture.mbtmiback.account;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;


@Mapper
public interface AccountMapper {

    @Select("SELECT * FROM USERS WHERE USERNAME = #{username} AND PASSWORD = #{password}")
    AccountModel login(@Param("username") String username, @Param("password") String password);



    @Update("UPDATE USERS SET MBTI = #{mbti} WHERE USER_ID = #{userId}")
    int updateMbti(@Param("userId") Long userId, @Param("mbti") String mbti);
}
