package com.app.dao.store;

import com.app.dto.store.StoreDetail;

public interface StoreDetailDAO {

	public StoreDetail findStoreDetailByStoreId(int storeId);
}
