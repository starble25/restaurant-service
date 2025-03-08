package com.app.controller.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.users.Users;
import com.app.service.users.UsersService;

@RestController
public class UsersController {

	@Autowired
	UsersService usersService;
	
	@PostMapping("api/users/find-user")
	public Users findUserById(@RequestBody Users users) {
		Users user = usersService.findUserById(users.getId());
		return user;
	}
	
	// 비밀번호 검증
	@PostMapping("api/users/verify-password")
	public ResponseEntity<String> verifyPassword(@RequestBody Users users) {
		if( users == null || users.getPassword() == null || users.getPassword().trim().isEmpty() ) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid request");
		}
		
		boolean result = usersService.verifyPassword(users);
		System.out.println("비밀번호 검증 result : " + result);
		
		if( result ) {
			return ResponseEntity.ok("verified password!");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Password verification failed");
		}

	}
	
	// 회원정보 수정
	@PutMapping("api/users/modify-user")
	public ResponseEntity<String> modifyUser(@RequestBody Users user) {
		int result = usersService.modifyUser(user);
		
		if( result > 0 ) {
			return ResponseEntity.ok("updated user info!");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("update failed");
		}

	}
	
	// 회원 탈퇴
	@DeleteMapping("api/users/delete-user")
	public ResponseEntity<String> deleteUser(@RequestBody Users user) {
		int result = usersService.deleteUser(user);
		
		// 삭제 전 비밀번호 한번 더 검증
		if( result == -99 ) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("delete failed");
		}
		if( !(result > 0) ) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("delete failed");
		}
		
		return ResponseEntity.ok("deleted user!");
	}
	
}
