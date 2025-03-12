package com.app.service.users;

import com.app.dto.users.Users;
import com.app.dto.users.Users;

public interface UsersService {
	
	int saveUser(Users users);

	Users checkUserLogin(Users users);
	
	Users findUserByUserName(String UserName);
	
	int modifyUser(Users users);

	int removeUser(Users users);

}
