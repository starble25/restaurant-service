package com.app.service.store;

import java.util.List;
import java.util.Map;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.dto.store.StoreFilter;

public interface StoreService {

	//필터 기능 메소드
	List<Store>findStoreWithFilters(Map<String, Object> params);
	List<StoreDetail>findStoreDetailWithFilters(Map<String, Object> params);
	List<Menu>findMenuWithFilters(Map<String, Object> params);

	
	List<StoreFilter>findSpoonNum();
	int findTotalStore();
}
