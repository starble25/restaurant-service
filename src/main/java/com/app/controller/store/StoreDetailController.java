package com.app.controller.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.service.store.StoreDetailService;

@RestController
public class StoreDetailController {

	@Autowired
	StoreDetailService storeDetailService;
	
	@PostMapping("api/storeDetail/find-detail")
	public ResponseEntity<?> findStoreDetail(@RequestBody Store store) {
		if( store == null || store.getId() == 0 ) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid request : 파라미터 없음");
		}
		
		StoreDetail storeDetail = storeDetailService.findStoreDetailByStoreId(store);
	    if (storeDetail != null) {
	        return ResponseEntity.ok(storeDetail);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Store detail not Found");
	    }
	}
}
