package com.culture.mbtmiback.account;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface AccountMapper {

    @Select("SELECT * FROM USERS WHERE USERNAME = #{username} AND PASSWORD = #{password}")
    AccountModel login(@Param("username") String username, @Param("password") String password);
}
