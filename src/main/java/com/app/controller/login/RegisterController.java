package com.app.controller.login;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.users.Users;
import com.app.service.users.UsersService;

@RestController
@RequestMapping("/login")
public class RegisterController {

	@Autowired
	UsersService usersService;

	// 회원가입

	@PostMapping("/register")
	public ResponseEntity<String> registerAction(@RequestBody Users users) {
		 System.out.println("회원가입 요청 받음: " + users); // 요청 확인용 로그 추가
        try {
            usersService.saveUser(users); // DB 저장 로직
            return ResponseEntity.ok("회원가입 성공!");
        } catch (Exception e) {
            e.printStackTrace();
        	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입 실패");
        }
		
	}
}
