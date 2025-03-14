package com.app.controller.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.store.Store;
import com.app.service.store.StoreService;

@RestController
public class StoreController {
	
	@Autowired
	StoreService storeService;

	@PostMapping("api/store/find-store")
	public Store findStoreById(@RequestBody Store store) {
		System.out.println("find-store request");
		Store str = storeService.findStoreById(store.getId());
		return str;
	}
}
