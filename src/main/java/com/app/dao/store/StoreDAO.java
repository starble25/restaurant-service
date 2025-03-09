package com.app.dao.store;

import java.util.List;
import java.util.Map;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.dto.store.StoreFilter;

public interface StoreDAO {

	//api 더미데이터 삽입
	int saveDaegufoodStores(Store store);
	int saveDaegufoodStoreDetail(StoreDetail storeDetail);
	int saveDaegufoodMenu(Menu menu);
	
	//필터 기능 구현 관련 메소드
	List<Store>findStoreWithFilters(Map<String, Object> params);
	List<StoreDetail> findStoreDetailWithFilters(Map<String, Object> params);
	List<Menu>findMenuWithFilters(Map<String, Object> params);
	
	
	List<StoreFilter>findSpoonNum();
	List<StoreFilter>findRateCount();
	int findTotalStore();
	
	
	
}
