package com.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	@GetMapping("/main")
	public String main() {
		System.out.println(" \"/main\" get request ");
		return "message from java";
	}
}
