package com.app.dao.users.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.users.UsersDAO;
import com.app.dto.users.Users;

@Repository
public class UsersDAOImpl implements UsersDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;
	
	@Override
	public int saveUser(Users users) {

		int result = sqlSessionTemplate.insert("user_mapper.saveUser", users);

		return result;
	}

	@Override
	public List<Users> findUserList() {

		List<Users> userList = sqlSessionTemplate.selectList("user_mapper.findUserList");

		return userList;
	}

	@Override
	public Users findUserByUserName(String UserName) {
		Users users = sqlSessionTemplate.selectOne("user_mapper.findUserById", UserName);

		return users;
	}

	@Override
	public Users checkUserLogin(Users users) {
		Users loginUser = sqlSessionTemplate.selectOne("user_mapper.checkUserLogin", users);

		return loginUser;
	}
	
	@Override
	public int modifyUser(Users users) {
		
		int result = sqlSessionTemplate.update("user_mapper.modifyUser", users);
		
		return result;
	}
	
	@Override
	public int removeUser(Users users) {
		
		int removeUser = sqlSessionTemplate.delete("user_mapper.removeUser", users);
		
		return removeUser;
	}
	
	
}
