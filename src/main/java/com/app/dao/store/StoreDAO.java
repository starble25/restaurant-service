package com.app.dao.store;

import java.util.List;
import java.util.Map;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;

public interface StoreDAO {

	int saveDaegufoodStores(Store store);
	int saveDaegufoodStoreDetail(StoreDetail storeDetail);
	int saveDaegufoodMenu(Menu menu);
	
	
	List<Store>findStoreList();
	List<StoreDetail>findStoreDetailList();
	List<Menu>findMenuList();
	
	List<Store>findStoreWithFilters(Map<String, Object> params);
	List<StoreDetail> findStoreDetailWithFilters(Map<String, Object> params);
	List<Menu>findMenuWithFilters(Map<String, Object> params);
	
	
	
	
	
	
}
