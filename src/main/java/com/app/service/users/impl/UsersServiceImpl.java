package com.app.service.users.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.users.UsersDAO;
import com.app.dto.users.Users;
import com.app.service.users.UsersService;

@Service
public class UsersServiceImpl implements UsersService {

	@Autowired
	UsersDAO usersDAO;

	@Override
	public Users findUserById(int id) {
		Users user = usersDAO.findUserById(id);
		return user;
	}

	@Override
	public boolean verifyPassword(Users user) {
		int id = user.getId();
		String userInputPassword = user.getPassword();
		String dbPassword = usersDAO.findUserPasswordById(id);
		
		if( userInputPassword.equals(dbPassword) ) {
			return true;
		}
		
		return false;
	}

	@Override
	public int modifyUser(Users user) {
		int result = usersDAO.modifyUser(user);
		return result;
	}

	@Override
	public int deleteUser(Users user) {
	    // 삭제 전 비밀번호 한번 더 검증
	    if ( !verifyPassword(user) ) {
	    	return -99;
	    }
		
		int result = usersDAO.deleteUser(user);
		System.out.println("delete result : " + result);
		return result;
	}
}
