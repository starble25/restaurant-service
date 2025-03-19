package com.app.controller.login;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.users.Users;
import com.app.service.users.UsersService;

@RestController
public class LoginController {

    @Autowired
    UsersService userService;

    // 로그인 페이지를 호출하는 GET 요청 (React에서 필요 없을 수도 있음)
    @GetMapping("/login")
    public ResponseEntity<String> login() {
        return new ResponseEntity<>("Login endpoint hit", HttpStatus.OK);
    }

    // 로그인 인증을 처리하는 POST 요청
    @PostMapping("/login")
    public ResponseEntity<?> loginAction(@RequestBody Users users, HttpSession session) {
        // 사용자 로그인 확인
        Users loginUser = userService.checkUserLogin(users);

        if (loginUser == null) { // 아이디 또는 비밀번호가 잘못된 경우
            return new ResponseEntity<>("아이디 또는 비밀번호가 잘못 되었습니다.", HttpStatus.UNAUTHORIZED);
        } else { // 로그인 성공
            // 세션에 로그인한 사용자 정보 저장
            session.setAttribute("loginUserId", loginUser.getUserName()); // loginUser 객체 전체를 세션에 저장

            // 세션에 저장된 데이터 확인 (디버깅용)
            System.out.println("세션에 저장된 사용자: " + session.getAttribute("loginUserId"));

            // 로그인 성공 시 사용자를 위한 응답 반환
            return new ResponseEntity<>(loginUser, HttpStatus.OK); // 로그인한 사용자 정보를 반환
        }
    }
}