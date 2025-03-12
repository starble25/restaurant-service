package com.app.controller.store;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.dto.store.StoreInfo;
import com.app.service.storeDetail.StoreDetailService;


@RestController
public class StoreDetailController {
	
	@Autowired
	StoreDetailService storeDetailService;

	@GetMapping("/main/store/{storeId}")
	public StoreInfo getStoreDetail(@PathVariable String storeId) {
		
		int storeIdInt = Integer.parseInt(storeId);
		
		List<Store> store = storeDetailService.findStoreById(storeIdInt);
		List<StoreDetail> storeDetail = storeDetailService.findStoreDetailById(storeIdInt);
		List<Menu> menu = storeDetailService.findMenuById(storeIdInt);
		
		StoreInfo storeInfo = new StoreInfo();
		storeInfo.setStore(store);
		storeInfo.setStoreDetail(storeDetail);
		storeInfo.setMenu(menu);
		
		System.out.println(storeInfo.getStore());
		System.out.println(storeInfo.getStoreDetail());
		System.out.println(storeInfo.getMenu());
		
		return storeInfo;
	}
}
