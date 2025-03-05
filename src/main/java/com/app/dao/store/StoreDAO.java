package com.app.dao.store;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;

public interface StoreDAO {

	int saveDaegufoodStores(Store store);
	int saveDaegufoodStoreDetail(StoreDetail storeDetail);
	int saveDaegufoodMenu(Menu menu);
	
}
