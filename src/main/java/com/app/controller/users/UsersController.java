package com.app.controller.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.users.Users;
import com.app.service.users.UsersService;

@RestController
public class UsersController {

	@Autowired
	UsersService usersService;
	
	@PostMapping("api/users")
	public Users user(@RequestBody Users users) {
		System.out.println(users.getId());
		Users user = usersService.findUserById(users.getId());
		return user;
	}
	
	@GetMapping("api/users")
	public Users test() {
		System.out.println("api/users test()");
		int id = 1;
		
		Users user = usersService.findUserById(id);
		System.out.println(user.toString());
		return user;
	}
}
