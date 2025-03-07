package com.app.dao.users.impl;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.users.UsersDAO;
import com.app.dto.users.Users;

@Repository
public class UsersDAOImpl implements UsersDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;
	
	public Users findUserById(int id) {
		Users user = sqlSessionTemplate.selectOne("users_mapper.findUserById", id);
		return user;
	}

	@Override
	public String findUserPasswordById(int id) {
		String dbPassword = sqlSessionTemplate.selectOne("users_mapper.findUserPasswordById", id);
		return dbPassword;
	}
	
}
