package com.app.service.users;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.users.Users;

public interface UsersService {
	
	public Users findUserById(int id);
	
	public boolean verifyPassword(Users user);
	
	public int modifyUser(Users user);
	
	public int deleteUser(Users user);
	
	public List<String> saveProfileImage(MultipartFile[] files, int id);
	
	public String findProfileImageByUserId(int id);
	
	public List<String> modifyProfileImageByUserId(MultipartFile[] files, int id);

}
