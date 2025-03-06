package com.app.service.store.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.store.StoreDAO;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.service.store.StoreService;

@Service
public class StoreServiceImpl implements StoreService {

	@Autowired
	StoreDAO storeDAO;

	//전체 업소 조회
	@Override
	public List<Store> findStoreList() {
		
		List<Store> storeList = storeDAO.findStoreList();
		
		return storeList;
	}

	//전체 storeDetail 조회
	@Override
	public List<StoreDetail> findStoreDetailList() {
		
		List<StoreDetail> storeDetailList = storeDAO.findStoreDetailList();
		
		return storeDetailList;
	}

	//전체 메뉴 조회
	@Override
	public List<Menu> findMenuList() {
		
		List<Menu> menuList = storeDAO.findMenuList();
		
		return menuList;
	}
	

}
