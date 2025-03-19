package com.app.dao.storeDetail.impl;



import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.storeDetail.StoreDetailDAO;
import com.app.dto.booking.Booking;
import com.app.dto.booking.BookingMenu;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;

@Repository
public class StoreDetailDAOImpl implements StoreDetailDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	@Override
	public List<Store> findStoreById(int storeIdInt) {
		List<Store> store = sqlSessionTemplate.selectList("storeDetail_mapper.findStoreById", storeIdInt);
		return store;
	}

	@Override
	public List<StoreDetail> findStoreDetailById(int storeIdInt) {
		List<StoreDetail> storeDetail = sqlSessionTemplate.selectList("storeDetail_mapper.findStoreDetailById", storeIdInt);
		return storeDetail;
	}

	@Override
	public List<Menu> findMenuById(int storeIdInt) {
		List<Menu> menu = sqlSessionTemplate.selectList("storeDetail_mapper.findMenuById", storeIdInt);
		return menu;
	}

	@Override
	public int saveBookingInfo(Booking booking) {
		
		int result = sqlSessionTemplate.insert("storeDetail_mapper.saveBookingInfo", booking);
		return result;
	}

	@Override
	public int saveBookingMenuInfo(BookingMenu bookingMenu) {
		int result = sqlSessionTemplate.insert("storeDetail_mapper.saveBookingMenuInfo", bookingMenu);
		return result;
	}

	@Override
	public int getBookingId() {
		int result = sqlSessionTemplate.selectOne("storeDetail_mapper.getBookingId");
		return result;
	}

	@Override
	public StoreDetail findStoreDetailByStoreId(int storeId) {
		StoreDetail storeDetail = sqlSessionTemplate.selectOne("storeDetail_mapper.findStoreDetailByStoreId", storeId);
		return storeDetail;
	}

	@Override
	public int modifyStoreDetailByStoreId(StoreDetail storeDetail) {
		int result = sqlSessionTemplate.update("storeDetail_mapper.modifyStoreDetailByStoreId", storeDetail);
		return result;
	}
	
	

}
