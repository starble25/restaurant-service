package com.app.service.storeDetail.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.storeDetail.StoreDetailDAO;
import com.app.dto.booking.Booking;
import com.app.dto.booking.BookingMenu;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.service.storeDetail.StoreDetailService;

@Service
public class StoreDetailServiceImpl implements StoreDetailService {

	@Autowired
	StoreDetailDAO storeDetailDAO;

	@Override
	public List<Store> findStoreById(int storeIdInt) {
		List<Store> store = storeDetailDAO.findStoreById(storeIdInt);
		return store;
	}

	@Override
	public List<StoreDetail> findStoreDetailById(int storeIdInt) {
		List<StoreDetail> storeDetail = storeDetailDAO.findStoreDetailById(storeIdInt);
		return storeDetail;
	}

	@Override
	public List<Menu> findMenuById(int storeIdInt) {
		List<Menu> menu = storeDetailDAO.findMenuById(storeIdInt);
		return menu;
	}

	@Override
	public int saveBookingInfo(Booking booking) {
		int result = storeDetailDAO.saveBookingInfo(booking);
		return result;
	}

	@Override
	public int saveBookingMenuInfo(BookingMenu bookingMenu) {
		int result = storeDetailDAO.saveBookingMenuInfo(bookingMenu);
		return result;
	}

	@Override
	public int getBookingId() {
		int result = storeDetailDAO.getBookingId();
		return result;
	}

	@Override
	public StoreDetail findStoreDetailByStoreId(Store store) {
		int storeId = store.getId();
		StoreDetail storeDetail = storeDetailDAO.findStoreDetailByStoreId(storeId);
		return storeDetail;
	}

	@Override
	public StoreDetail modifyStoreDetailByStoreId(StoreDetail storeDetail) {
		int result = storeDetailDAO.modifyStoreDetailByStoreId(storeDetail);
		
		if( result > 0 ) {
			Store store = new Store();
			store.setId(storeDetail.getStoreId());
			
			StoreDetail updatedStoreDetail = findStoreDetailByStoreId(store);
			return updatedStoreDetail;			
		} else {
			System.out.println("modifyStoreDetailByStoreId 업데이트 실패");
			return null;
		}
	}

}
