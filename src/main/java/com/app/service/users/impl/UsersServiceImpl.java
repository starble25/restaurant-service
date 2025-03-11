package com.app.service.users.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.users.UsersDAO;
import com.app.dto.file.ImageFile;
import com.app.dto.users.Users;
import com.app.service.users.UsersService;
import com.app.util.ImageFileManager;

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

	@Override
	public int saveProfileImage(MultipartFile[] files, int id) {
		int result = 0;
		
		try {
			List<ImageFile> storedFiles = ImageFileManager.storeFiles(files);
			
			for(ImageFile imageFile : storedFiles) {
				imageFile.setRefId(id);
				result += usersDAO.saveProfileImage(imageFile);
			}
		} catch (Exception e) {
			System.out.println("UsersService - saveProfileImage() ERROR");
			e.printStackTrace();
		}
		
		return result;
	}

	@Override
	public String findProfileImageById(int id) {
		
		
		return null;
	}

}
