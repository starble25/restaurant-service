package com.app.controller.menu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.service.menu.MenuService;

@RestController
public class MenuController {
	
	@Autowired
	MenuService menuService;

	@PostMapping("api/menu/find-menu")
	public ResponseEntity<?> findMenu(@RequestBody Store store) {
		System.out.println("find-menu request");
		List<Menu> menuList = menuService.findMenu(store);
		
		if( menuList!= null ) {
			System.out.println(menuList.toString());
			return ResponseEntity.ok(menuList);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("내부 서버 오류");
//			return ResponseEntity.ok("No Menu");
		}
		
	}
	
}
