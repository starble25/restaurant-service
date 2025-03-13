package com.app.dao.store;

import com.app.dto.store.Store;

public interface StoreDAO {

	public Store findStoreByUserId(int id);
	
	public Store findStoreNameById(int id);
}
