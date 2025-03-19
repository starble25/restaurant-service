package com.app.controller.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.users.Users;
import com.app.service.users.UserProfileService;

@RestController
public class UserProfileController {
	
	@Autowired
	UserProfileService userProfileService;
	
	// 이미지 저장
	@PostMapping("api/users/save-profile")
	public ResponseEntity<?> saveProfileImage( 
			@RequestParam("files") MultipartFile[] files, 
			@RequestParam("id") int id ) {
		
		if ( files == null || files.length == 0 ) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("request file is empty");
		}
		
	    List<String> savedFilePaths = userProfileService.saveProfileImage(files, id);
	    
	    // 저장성공 : 이미지 urlpath 리스트 반환
	    if ( !savedFilePaths.isEmpty() ) {
	        return ResponseEntity.ok(savedFilePaths);
	    } else {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("이미지 저장 실패");
	    }
	}
	
	// 이미지 URL 가져오기
	@PostMapping("api/users/find-profile")
	public ResponseEntity<String> findProfileImage(@RequestBody Users user) {
		System.out.println("findProfileImage request");
	    if ( user == null ) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("users object is null");
	    }
	    
	    String result = userProfileService.findProfileImageByUserId(user.getId());
	    
	    return ResponseEntity.ok(result);
	}
}
