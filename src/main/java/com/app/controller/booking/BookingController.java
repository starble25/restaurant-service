package com.app.controller.booking;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.booking.Booking;
import com.app.dto.store.Store;
import com.app.dto.users.Users;
import com.app.service.booking.BookingService;

@RestController
public class BookingController {
	
	@Autowired
	BookingService bookingService;
	
	@PostMapping("api/booking/find-booking")
	public List<Booking> findBookingByRefId(@RequestBody Users user) {
		System.out.println("find-booking request");
		System.out.println("booking request user : " + user.toString());
		
		List<Booking> bookingList = bookingService.findBookingByRefId(user);
		
		System.out.println("find-booking : " + bookingList.toString());
		
		return bookingList;
	}
	
	@PostMapping("api/booking/store-name")
	public Store findStoreNameById(@RequestBody Booking booking) {
		Store store = bookingService.findStoreNameById(booking.getStoreId());
		
		return store;
	}
}
