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
	public StoreData getStoreData(@RequestParam(required = false) Integer spoon,
									@RequestParam(required = false) Integer rateValue,
									@RequestParam(required = false) String location) {	
		
		System.out.println("location : " + location);
		
		Map<String, Object> params = new HashMap<>();
		
		//db에서 spoon개수별 총 튜플개수 조회
		List<StoreFilter>spoonList = storeService.findSpoonNum();
		//db에서 평점 별 개수 조회
		List<StoreFilter>rateCountList = storeService.findRateCount();
		
		for(StoreFilter data : spoonList) {
			System.out.println("스푼 " + data.getSpoon() + "개 -> " + data.getCount() + "개");
		}
		
		for(StoreFilter data : rateCountList) {
			System.out.println("평점 "+ data.getRate() + "개 -> " + data.getRateCount() + "개");
		}
		
		Map<String, Object> filterData = new HashMap<>();
		filterData.put("spoonList", spoonList);
		filterData.put("rateCountList", rateCountList);
		
		
		// 웹에서 필터값 get후 해쉬맵 변환
		if(spoon != null) {
			params.put("spoon", spoon);
			System.out.println("spoon개수 : " + spoon);
		}
		
		if(rateValue != null) {
			params.put("rateValue", rateValue);
			System.out.println("rateValue : " + rateValue);
		}
		
		if(location != null) {
			params.put("location", location);
			System.out.println("params : " + params);
//			System.out.println("location : " + rateValue);
		}
		
		
		//필터값 해쉬맵으로 넘겨서 받아옴
		List<Store>storeList = storeService.findStoreWithFilters(params);
		List<StoreDetail>storeDetailList = storeService.findStoreDetailWithFilters(params);
		List<Menu>menuList = storeService.findMenuWithFilters(params);
		
		System.out.println(storeList.size());
		
		
		// storeData객체에 대입
		StoreData storeData = new StoreData();
		
		storeData.setStoreList(storeList);
		storeData.setStoreDetailList(storeDetailList);
		storeData.setMenuList(menuList);
		storeData.setStoreFilterList(filterData);
		
		storeData.setTotalStore(storeService.findTotalStore());
		System.out.println("total store : " + storeData.getTotalStore()); //토탈 store 디버깅
		
		return storeData;
	}
	
}
