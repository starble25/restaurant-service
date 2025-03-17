package com.app.service.users;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.users.Users;

public interface UserProfileService {
	
	public List<String> saveProfileImage(MultipartFile[] files, int id);
	
	public String findProfileImageByUserId(int id);
	
	public List<String> modifyProfileImageByUserId(MultipartFile[] files, int id);

}
