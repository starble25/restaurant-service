package com.app.service.store;

import java.util.List;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;

public interface StoreService {

	
	List<Store>findStoreList();
	List<StoreDetail>findStoreDetailList();
	List<Menu>findMenuList();

}
