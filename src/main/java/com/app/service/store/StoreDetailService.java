package com.app.service.store;

import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;

public interface StoreDetailService {
	
	public StoreDetail findStoreDetailByStoreId(Store store);
	
}
