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
}
