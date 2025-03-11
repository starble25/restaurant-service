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

	//필터 기능 메소드

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
	
	@Override
	public List<StoreFilter> findRateCount() {
		List<StoreFilter> rateCountList = storeDAO.findRateCount();
		return rateCountList;
	}

	@Override
	public int findTotalStore() {
		int result = storeDAO.findTotalStore();
		return result;
	}

	@Override
	public List<StoreFilter> findMenu() {
		List<StoreFilter>menuList = storeDAO.findMenu();
		return menuList;
	}

	@Override
	public List<Store> findFilteredTotalStore(Map<String, Object> params) {
		List<Store> storeList = storeDAO.findFilteredTotalStore(params);
		return storeList;
	}

	

	
	
	

}
