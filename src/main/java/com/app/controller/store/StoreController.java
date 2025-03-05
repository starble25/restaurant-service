package com.app.controller.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.api.DaegufoodService;

@RestController
public class StoreController {

	@Autowired
	DaegufoodService daegufoodService;
	
	@GetMapping("/main/store")
	public String main() {
		
		daegufoodService.saveDaegufoodStores();
		
		return "Stores Saved Successfully ";
	}
	
}
