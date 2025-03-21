package com.app.controller.store;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	StoreService storeService;
	
//	@Autowired
//	DaegufoodService daegufoodService;
	
	@GetMapping("/main/store")
	public StoreData getStoreData(@RequestParam(required = false) Integer spoon,
									@RequestParam(required = false) Integer rateValue,
									@RequestParam(required = false) String location,
									@RequestParam(required = false) String foodType,
									@RequestParam(defaultValue = "1") Integer page,
									@RequestParam(defaultValue = "5") Integer pageSize) {	
		
//		daegufoodService.saveDaegufoodStores();
				
		//db에서 spoon개수별 총 튜플개수 조회
		List<StoreFilter>spoonList = storeService.findSpoonNum();
		//db에서 평점 별 개수 조회
		List<StoreFilter>rateCountList = storeService.findRateCount();
		//db에서 메뉴, 메뉴별 데이터개수 조회
		List<StoreFilter>menuFilterList = storeService.findMenu();
		
		Map<String, Object> filterData = new HashMap<>();
		filterData.put("spoonList", spoonList);
		filterData.put("rateCountList", rateCountList);
		filterData.put("menuFilterList", menuFilterList);
		
		
		Map<String, Object> params = new HashMap<>();
		
		params.put("offset", (page - 1) * pageSize);
		params.put("limit", pageSize);
		
		// 웹에서 필터값 get후 해쉬맵 변환
		if(spoon != null) {
			params.put("spoon", spoon);
		}
		
		if(rateValue != null) {
			params.put("rateValue", rateValue);
		}
		
		if(location != null) {
			params.put("location", location);
		}
		
		if(foodType != null) {
			params.put("foodType", foodType);
		}
		
		//필터값 해쉬맵으로 넘겨서 받아옴
		List<Store>storeList = storeService.findStoreWithFilters(params);
		List<StoreDetail>storeDetailList = storeService.findStoreDetailWithFilters(params);
		List<Menu>menuList = storeService.findMenuWithFilters(params);
		
		
		List<Store> totalStoreList = storeService.findFilteredTotalStore(params);
		int totalStores = totalStoreList.size();
		int totalPages = (int) Math.ceil( (double) totalStores / pageSize);
		
		System.out.println("totalStores : " + totalStores);
		
		
		// storeData객체에 대입
		StoreData storeData = new StoreData();
		
		storeData.setStoreList(storeList);
		storeData.setStoreDetailList(storeDetailList);
		storeData.setMenuList(menuList);
		storeData.setStoreFilterList(filterData);
		storeData.setTotalStore(storeService.findTotalStore());
		storeData.setCurrentPage(page); // 현재 페이지
		storeData.setTotalPages(totalPages); //총 페이지
		
		return storeData;
	}
	

	@PostMapping("api/store/find-store")
	public Store findStoreById(@RequestBody Store store) {
		System.out.println("find-store request");
		Store str = storeService.findStoreById(store.getId());
		return str;
	}
	
	@PostMapping("api/store/modify-store")
	public ResponseEntity<?> modifyStore(@RequestBody Store store) {
		System.out.println("modify-store request");
		System.out.println(store.toString());
		int result = storeService.modifyStoreByUserId(store);
		
		if( result > 0 ) {
			return ResponseEntity.ok("modify store!");			
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("modify-store update failed");
		}
	}
}
