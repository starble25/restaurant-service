package com.app.service.store.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.store.StoreDetailDAO;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.service.store.StoreDetailService;

@Service
public class StoreDetailServiceImpl implements StoreDetailService {

	@Autowired
	StoreDetailDAO storeDetailDAO;
	
	public StoreDetail findStoreDetailByStoreId(Store store) {
		int storeId = store.getId();
		StoreDetail storeDetail = storeDetailDAO.findStoreDetailByStoreId(storeId);
		return storeDetail;
	}
}
