package com.app.controller.menu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
			return ResponseEntity.ok(menuList);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("내부 서버 오류");
//			return ResponseEntity.ok("No Menu");
		}
		
	}
	
	@PostMapping("/api/menu/save-menu")
	public ResponseEntity<?> saveMenu(@RequestBody Menu menu) {
		System.out.println("save-menu request");
		int result = menuService.saveMenu(menu);
		
		if( result > 0 ) {
			return ResponseEntity.ok("ok");			
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("내부 서버 오류");
		}
		
	}
	
	@PostMapping("/api/menu/modify-menu")
	public ResponseEntity<?> modifyMenu(@RequestBody Menu menu) {
		System.out.println("modify-menu reqeust");
		System.out.println(menu.toString());
		
		int result = menuService.modifyMenu(menu);
		
		if( result > 0 ) {
			return ResponseEntity.ok("ok");
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("내부 서버 오류");
		}
	}
	
	@DeleteMapping("/api/menu/delete-menu")
	public ResponseEntity<?> deleteMenu(@RequestParam("menuId") int id) {
		System.out.println("delete-menu request");
		int result = menuService.deleteMenu(id);
		
		if( result > 0 ) {
			return ResponseEntity.ok("ok");			
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("내부 서버 오류");
		}
	}
	
//	@DeleteMapping("/api/menu/delete-menu")
//	public ResponseEntity<?> deleteMenu(@RequestBody Menu menu) {
//		System.out.println("delete-menu request");
//		System.out.println("menu Id : " + menu.getId());
//		System.out.println(menu);
//		
//		return ResponseEntity.ok("ok");	
//	}
	
}
