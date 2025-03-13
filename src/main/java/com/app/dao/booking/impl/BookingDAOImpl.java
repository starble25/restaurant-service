package com.app.dao.booking.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.booking.BookingDAO;
import com.app.dto.booking.Booking;

@Repository
public class BookingDAOImpl implements BookingDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	@Override
	public List<Booking> findBookingByUserId(int id) {
		List<Booking> bookingList = sqlSessionTemplate.selectList("booking_mapper.findBookingByUserId", id);
		
		return bookingList;
	}

	@Override
	public List<Booking> findBookingByStoreId(int id) {
		List<Booking> bookingList = sqlSessionTemplate.selectList("booking_mapper.findBookingByStoreId", id);
		return bookingList;
	}

	
	
}
