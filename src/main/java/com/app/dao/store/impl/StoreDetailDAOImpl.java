package com.app.dao.store.impl;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.store.StoreDetailDAO;
import com.app.dto.store.StoreDetail;

@Repository
public class StoreDetailDAOImpl implements StoreDetailDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	@Override
	public StoreDetail findStoreDetailByStoreId(int storeId) {
		StoreDetail storeDetail = sqlSessionTemplate.selectOne("storeDetail_mapper.findStoreDetailByStoreId", storeId);
		return storeDetail;
	}
	
}
