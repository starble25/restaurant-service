package com.app.dao.users;

import com.app.dto.users.Users;

public interface UsersDAO {
	
	public Users findUserById(int id);
	
	public String findUserPasswordById(int id);
	
	public int modifyUser(Users user);
	
	public int deleteUser(Users user);

}
