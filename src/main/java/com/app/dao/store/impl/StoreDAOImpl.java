package com.app.dao.store.impl;

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

}
