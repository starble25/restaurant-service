package com.app.service.store.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.store.StoreDAO;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.dto.store.StoreFilter;
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

	@Override
	public List<Store> findStoreWithFilters(Map<String, Object> params) {
		List<Store> storeList = storeDAO.findStoreWithFilters(params);
		return storeList;
	}

	@Override
	public List<StoreDetail> findStoreDetailWithFilters(Map<String, Object> params) {
		List<StoreDetail> storeDetailList = storeDAO.findStoreDetailWithFilters(params);
		return storeDetailList;
	}

	@Override
	public List<Menu> findMenuWithFilters(Map<String, Object> params) {
		List<Menu> menuList = storeDAO.findMenuWithFilters(params);
		return menuList;
	}
	

	@Override
	public List<StoreFilter> findSpoonNum() {
		List<StoreFilter> spoonList = storeDAO.findSpoonNum();
		return spoonList;
	}

	

	
	
	

}
