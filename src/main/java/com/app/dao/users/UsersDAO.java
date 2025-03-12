package com.app.dao.users;

import java.util.List;

import com.app.dto.users.Users;

public interface UsersDAO {
	
	int saveUser(Users users);

	List<Users> findUserList();

	Users findUserByUserName(String UserName);
	
	public Users checkUserLogin(Users users);
	
	public int modifyUser(Users users);

	public int removeUser(Users users);

}
