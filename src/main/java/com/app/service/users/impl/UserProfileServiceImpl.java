package com.app.service.users.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.users.UserProfileDAO;
import com.app.dto.file.ImageFile;
import com.app.service.users.UserProfileService;
import com.app.util.ImageFileManager;

@Service
public class UserProfileServiceImpl implements UserProfileService {

	@Autowired
	UserProfileDAO userProfileDAO;

	@Override
	public List<String> saveProfileImage(MultipartFile[] files, int id) {
		List<String> savedFilePaths = new ArrayList<>();
		
		// 프로필사진 1개만 존재, 이미 있으면 교체
		if( !(findProfileImageByUserId(id).equals("/profile/profileImage.jpg")) ) {
			savedFilePaths = modifyProfileImageByUserId(files, id);
			return savedFilePaths;
		}
		
		try {
			List<ImageFile> storedFiles = ImageFileManager.storeFiles(files);
			
			for(ImageFile imageFile : storedFiles) {
				imageFile.setRefId(id);
				int result = userProfileDAO.saveProfileImage(imageFile);
				
				if( result > 0 ) {
					savedFilePaths.add(imageFile.getUrlFilePath() + imageFile.getFileName()); // 저장 성공 시 파일 경로 추가
				}
			}
		} catch (Exception e) {
			System.out.println("UsersService - saveProfileImage() ERROR");
			e.printStackTrace();
		}
		
		return savedFilePaths;
	}

	@Override
	public String findProfileImageByUserId(int id) {
		ImageFile file = userProfileDAO.findProfileImageByUserId(id);
		
		// 프로필사진 없으면 기본 이미지 return
		if ( file == null ) {
			return "/profile/profileImage.jpg";
		}
		
		String result = file.getUrlFilePath() + file.getFileName();
		return result;
	}

	@Override
	public List<String> modifyProfileImageByUserId(MultipartFile[] files, int id) {
		List<String> modifiedFilePaths = new ArrayList<>();
		
		try {
			List<ImageFile> storedFiles = ImageFileManager.storeFiles(files);
			
			for(ImageFile imageFile : storedFiles) {
				imageFile.setRefId(id);
				int result = userProfileDAO.modifyProfileImageByUserId(imageFile);
				
				if( result > 0 ) {
					modifiedFilePaths.add(imageFile.getUrlFilePath() + imageFile.getFileName());
				}
			}
		} catch (Exception e) {
			System.out.println("UsersService - modifyProfileImageByUserId() ERROR");
			e.printStackTrace();
		}
		
		return modifiedFilePaths;
	}

}
