package com.app.dao.store.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.store.StoreDAO;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.dto.store.StoreFilter;


@Repository
public class StoreDAOImpl implements StoreDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	// api관련 메소드
	@Override
	public int saveDaegufoodStores(Store store) {
		int result = sqlSessionTemplate.insert("getApiData_mapper.saveStore", store);
		return result;
	}

	@Override
	public int saveDaegufoodStoreDetail(StoreDetail storeDetail) {
		int result = sqlSessionTemplate.insert("getApiData_mapper.saveStoreDetail", storeDetail);
		return result;
	}

	@Override
	public int saveDaegufoodMenu(Menu menu) {
		int result = sqlSessionTemplate.insert("getApiData_mapper.saveMenu", menu);
		return result;
	}


	//필터 기능 구현 관련 메소드
	@Override
	public List<Store> findStoreWithFilters(Map<String, Object> params) {
		
		List<Store> storeList = sqlSessionTemplate.selectList("subMain_mapper.findStoreWithFilters", params);
		return storeList;
	}

	@Override
	public List<StoreDetail> findStoreDetailWithFilters(Map<String, Object> params) {
		List<StoreDetail> storeDetailList = sqlSessionTemplate.selectList("subMain_mapper.findStoreDetailWithFilters", params);
		return storeDetailList;
	}

	@Override
	public List<Menu> findMenuWithFilters(Map<String, Object> params) {
		List<Menu> menuList = sqlSessionTemplate.selectList("subMain_mapper.findMenuWithFilters", params);
		return menuList;
	}

	
	@Override
	public List<StoreFilter> findSpoonNum() {
		List<StoreFilter> spoonList = sqlSessionTemplate.selectList("subMain_mapper.findSpoonNum"); 
		return spoonList;
	}
	
	@Override
	public List<StoreFilter> findRateCount() {
		List<StoreFilter> rateCountList = sqlSessionTemplate.selectList("subMain_mapper.findRateCount"); 
		return rateCountList;
	}
	

	@Override
	public int findTotalStore() {
		int result = sqlSessionTemplate.selectOne("subMain_mapper.findTotalStore"); 
		return result;
	}

	@Override
	public List<StoreFilter> findMenu() {
		List<StoreFilter> menuList = sqlSessionTemplate.selectList("subMain_mapper.findMenu");
		return menuList;
	}

	@Override
	public List<Store> findFilteredTotalStore(Map<String, Object> params) {
		List<Store> storeList = sqlSessionTemplate.selectList("subMain_mapper.findFilteredTotalStore", params); 
		return storeList;
	}

	@Override
	public Store findStoreByUserId(int id) {
		Store store = sqlSessionTemplate.selectOne("store_mapper.findStoreByUserId", id);
		return store;
	}

	@Override
	public Store findStoreNameById(int id) {
		Store store = sqlSessionTemplate.selectOne("store_mapper.findStoreNameById", id);
		return store;
	}

	@Override
	public Store findStoreById(int id) {
		Store store = sqlSessionTemplate.selectOne("store_mapper.findStoreById", id);
		return store;
	}

	@Override
	public int modifyStoreByUserId(Store store) {
		int result = sqlSessionTemplate.update("store_mapper.modifyStoreByUserId", store);
		return result;
	}
	
	
}
