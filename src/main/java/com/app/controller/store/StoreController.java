package com.app.controller.store;

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
import com.app.dto.store.StoreFilter;
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
		
		Map<String, Object> params = new HashMap<>();
		
		//db에서 spoon개수별 총 튜플개수 조회
		List<StoreFilter>spoonList = storeService.findSpoonNum();
		
		for(StoreFilter data : spoonList) {
			System.out.println("스푼 " + data.getSpoon() + "개 -> " + data.getCount() + "개");
		}		
		
		// 웹에서 필터값 get후 해쉬맵 변환
		if(spoon != null) {
			params.put("spoon", spoon);
			System.out.println("spoon개수 : " + spoon);
		} else {
			System.out.println("스푼값이 없음");
		}
		
		//필터값 해쉬맵으로 넘겨서 받아옴
		List<Store>storeList = storeService.findStoreWithFilters(params);
		List<StoreDetail>storeDetailList = storeService.findStoreDetailWithFilters(params);
		List<Menu>menuList = storeService.findMenuWithFilters(params);
		
		// storeData객체에 대입
		StoreData storeData = new StoreData();
		
		storeData.setStoreList(storeList);
		storeData.setStoreDetailList(storeDetailList);
		storeData.setMenuList(menuList);
		storeData.setStoreFilterList(spoonList);
		
		storeData.setTotalStore(storeService.findTotalStore());
		System.out.println("total store : " + storeData.getTotalStore()); //토탈 store 디버깅
		
		return storeData;
	}
	
}
