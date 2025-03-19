package com.app.dao.booking;

import java.util.List;

import com.app.dto.booking.Booking;

public interface BookingDAO {

	public List<Booking> findBookingByUserId(int id);
	
	public List<Booking> findBookingByStoreId(int id);
	
}
