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

@Repository
public class StoreDAOImpl implements StoreDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	// api관련 메소드
	@Override
	public int saveDaegufoodStores(Store store) {
		int result = sqlSessionTemplate.insert("subMain_mapper.saveStore", store);
		return result;
	}

	@Override
	public int saveDaegufoodStoreDetail(StoreDetail storeDetail) {
		int result = sqlSessionTemplate.insert("subMain_mapper.saveStoreDetail", storeDetail);
		return result;
	}

	@Override
	public int saveDaegufoodMenu(Menu menu) {
		int result = sqlSessionTemplate.insert("subMain_mapper.saveMenu", menu);
		return result;
	}

	
	
	//전체 업소 조회
	@Override
	public List<Store> findStoreList() {
		
		List<Store>storeList = sqlSessionTemplate.selectList("subMain_mapper.findStoreList");
		
		return storeList;
	}

	//전체 storeDetail 조회
	@Override
	public List<StoreDetail> findStoreDetailList() {
		
		List<StoreDetail>storeDetailList = sqlSessionTemplate.selectList("subMain_mapper.findStoreDetailList");
		
		return storeDetailList;
	}

	//전체 메뉴 조회
	@Override
	public List<Menu> findMenuList() {
		List<Menu>menuList = sqlSessionTemplate.selectList("subMain_mapper.findMenuList");
		return menuList;
	}

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

}
