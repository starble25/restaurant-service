package com.app.service.booking.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.common.CommonCode;
import com.app.dao.booking.BookingDAO;
import com.app.dao.store.StoreDAO;
import com.app.dto.booking.Booking;
import com.app.dto.store.Store;
import com.app.dto.users.Users;
import com.app.service.booking.BookingService;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	BookingDAO bookingDAO;
	
	@Autowired
	StoreDAO storeDAO;

	@Override
	public List<Booking> findBookingByRefId(Users user) {
		List<Booking> bookingList = new ArrayList<>();
		
		if( user.getUserType().equals(CommonCode.USERS_USERTYPE_CUSTOMER) ) {
			int refId = user.getId();
			bookingList = bookingDAO.findBookingByUserId(refId);
			
		} else if( user.getUserType().equals(CommonCode.USERS_USERTYPE_STORE) ) {
			int userId = user.getId();
			int refId = storeDAO.findStoreByUserId(userId).getId();
			bookingList = bookingDAO.findBookingByStoreId(refId);
		}
		
		convertCommonCode(bookingList);
		
		return bookingList;
	}

	@Override
	public Store findStoreNameById(int id) {
		Store store = storeDAO.findStoreNameById(id);
		return store;
	}
	
	
	private List<Booking> convertCommonCode(List<Booking> bookingList) {
		for( Booking booking : bookingList ) {
			if( booking.getState().equals(CommonCode.BOOKING_FINISH) ) {
				booking.setState("정상종료");
			} else if ( booking.getState().equals(CommonCode.BOOKING_CONFIRM )) {
				booking.setState("예약됨");
			}
		}
		
		return bookingList;
	}

}
