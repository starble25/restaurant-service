package com.app.service.users;

import com.app.dto.users.Users;

public interface UsersService {
	
	public Users findUserById(int id);
	
	public boolean verifyPassword(Users users);

}
