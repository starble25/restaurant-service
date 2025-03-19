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
	public int saveUser(Users users) {

		int result = usersDAO.saveUser(users);
		
		System.out.println(users);

		return result;
	}

	@Override
	public Users findUserByUserName(String UserName) {

		Users users = usersDAO.findUserByUserName(UserName);

		return users;
	}

	@Override
	public Users checkUserLogin(Users users) {

		// 1) 서비스 자체에서 로직을 수행

		Users loginUser = usersDAO.checkUserLogin(users);

		return loginUser;

	}

	@Override
	public int modifyUser(Users users) {

		int result = usersDAO.modifyUser(users);

		return result;
	}

	@Override
	public int removeUser(Users users) {

		int result = usersDAO.removeUser(users);

		return result;

	}
}
