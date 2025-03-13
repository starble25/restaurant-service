package com.app.dao.store.impl;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.store.StoreDAO;
import com.app.dto.store.Store;

@Repository
public class StoreDAOImpl implements StoreDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	@Override
	public Store findStoreByUserId(int id) {
		Store store = sqlSessionTemplate.selectOne("store_mapper.getStoreByUserId", id);
		return store;
	}

	@Override
	public Store findStoreNameById(int id) {
		Store store = sqlSessionTemplate.selectOne("store_mapper.findStoreNameById", id);
		return store;
	}
	
	
}
