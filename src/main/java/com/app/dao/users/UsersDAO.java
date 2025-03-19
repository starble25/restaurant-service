package com.app.dao.users;

import com.app.dto.file.ImageFile;
import java.util.List;

import com.app.dto.users.Users;

public interface UsersDAO {
	
	public Users findUserById(int id);
	
	public String findUserPasswordById(int id);
	
	public int modifyUser(Users user);
	
	public int deleteUser(Users user);
	
	public int saveProfileImage(ImageFile file);
	
	public ImageFile findProfileImageByUserId(int id);
	
	public int modifyProfileImageByUserId(ImageFile file);
	int saveUser(Users users);

	List<Users> findUserList();

	Users findUserByUserName(String UserName);
	
	public Users checkUserLogin(Users users);

	public int removeUser(Users users);

}
