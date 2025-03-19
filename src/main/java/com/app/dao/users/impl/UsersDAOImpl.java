package com.app.dao.users.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.users.UsersDAO;
import com.app.dto.file.ImageFile;
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

	@Override
	public int modifyUser(Users user) {
		int result = sqlSessionTemplate.update("users_mapper.modifyUser", user);
		return result;
	}

	@Override
	public int saveUser(Users users) {

		int result = sqlSessionTemplate.insert("user_mapper.saveUser", users);

		return result;
	}

	@Override
	public int deleteUser(Users user) {
		int result = sqlSessionTemplate.delete("users_mapper.deleteUser", user);
		return result;
	}

	@Override
	public int saveProfileImage(ImageFile file) {
		int result = sqlSessionTemplate.insert("users_mapper.saveProfileImage", file);
		return result;
	}

	@Override
	public ImageFile findProfileImageByUserId(int id) {
		ImageFile file = sqlSessionTemplate.selectOne("users_mapper.findProfileImageByUserId", id);
		return file;
	}

	@Override
	public int modifyProfileImageByUserId(ImageFile file) {
		int result = sqlSessionTemplate.update("users_mapper.modifyProfileImageByUserId", file);
		return result;
	}
	
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
	public int removeUser(Users users) {
		
		int removeUser = sqlSessionTemplate.delete("user_mapper.removeUser", users);
		
		return removeUser;
	}

	
}
