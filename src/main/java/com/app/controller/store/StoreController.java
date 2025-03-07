package com.app.controller.store;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public StoreData getStoreData(@RequestParam(required = false) Integer spoon) {

		//공공데이터 api호출
//		daegufoodService.saveDaegufoodStores();		
		
		
		Map<String, Object> params = new HashMap<>();
		Map<Integer, Object> totalCount = new HashMap<>(); 
		
		
		if(spoon != null) {
			params.put("spoon", spoon);
			System.out.println("spoon개수 : " + spoon);
		} else {
			System.out.println("스푼값이 없음");
		}
		
		List<Store>storeList = storeService.findStoreWithFilters(params);
		System.out.println(storeList.size());
		List<StoreDetail>storeDetailList = storeService.findStoreDetailWithFilters(params);
		List<Menu>menuList = storeService.findMenuWithFilters(params);
		
		// storeData객체에 대입
		StoreData storeData = new StoreData();
		storeData.setStoreList(storeList);
		storeData.setStoreDetailList(storeDetailList);
		storeData.setMenuList(menuList);
		
		return storeData;
	}
	
}
