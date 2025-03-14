package com.app.service.store.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.store.StoreDAO;
import com.app.dto.store.Store;
import com.app.service.store.StoreService;

@Service
public class StoreServiceImpl implements StoreService {
	
	@Autowired
	StoreDAO storeDAO;

	@Override
	public Store findStoreById(int id) {
		Store store = storeDAO.findStoreById(id);
		return store;
	}
	
}
