package com.app.controller.store;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreData;
import com.app.dto.store.StoreDetail;
import com.app.service.api.DaegufoodService;
import com.app.service.store.StoreService;

@RestController
public class StoreController {

	@Autowired
	DaegufoodService daegufoodService;
	
	@Autowired
	StoreService storeService;
	
	@GetMapping("/main/store")
	public StoreData getStoreData() {
		
		//공공데이터 api호출
		daegufoodService.saveDaegufoodStores();
		
		
		//전체 업소 조회
		List<Store>storeList = storeService.findStoreList();
		List<StoreDetail>storeDetailList = storeService.findStoreDetailList();
		List<Menu>menuList = storeService.findMenuList();
		
		// storeData객체에 대입
		StoreData storeData = new StoreData();
		storeData.setStoreList(storeList);
		storeData.setStoreDetailList(storeDetailList);
		storeData.setMenuList(menuList);
		
		return storeData;
	}
	
}
