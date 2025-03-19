package com.app.service.booking;

import java.util.List;

import com.app.dto.booking.Booking;
import com.app.dto.store.Store;
import com.app.dto.users.Users;

public interface BookingService {

	public List<Booking> findBookingByRefId(Users user);
	
	public Store findStoreNameById(int id);
	
}
