package com.app.controller.login;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.users.Users;
import com.app.service.users.UsersService;

@RestController
public class LoginController {

    @Autowired
    UsersService userService;

    @GetMapping("/login")
    public String login() {
        return "login/login";
    }

    @PostMapping("/login")
    public String loginAction(Users users, HttpSession session, Model model) {

        // user id pw 화면으로부터 전달
        // name userType : null

        // user 로그인 할 수 있게 정보가 들어있는지! 확인!
        Users loginUser = userService.checkUserLogin(users);

        if (loginUser == null) { // 아이디X? 아이디O&비번X null

            model.addAttribute("loginError", "아이디 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.");

            return "login/login";

        } else { // 아이디&비번이 맞으면 loginUser
            // 로그인 정보가 맞아서 로그인 성공

            session.setAttribute("loginUserId", loginUser);

            return "redirect:/main";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/main";
    }
}
