package com.app.controller.store;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.booking.Booking;
import com.app.dto.booking.BookingMenu;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.dto.store.StoreInfo;
import com.app.service.storeDetail.StoreDetailService;


@RestController
public class StoreDetailController {
	
	@Autowired
	StoreDetailService storeDetailService;

	@GetMapping("/main/store/{storeId}")
	public StoreInfo getStoreDetail(@PathVariable String storeId) {
		
		int storeIdInt = Integer.parseInt(storeId);
		
		List<Store> store = storeDetailService.findStoreById(storeIdInt);
		List<StoreDetail> storeDetail = storeDetailService.findStoreDetailById(storeIdInt);
		List<Menu> menu = storeDetailService.findMenuById(storeIdInt);
		
		StoreInfo storeInfo = new StoreInfo();
		storeInfo.setStore(store);
		storeInfo.setStoreDetail(storeDetail);
		storeInfo.setMenu(menu);
		
		System.out.println(storeInfo.getStore());
		System.out.println(storeInfo.getStoreDetail());
		System.out.println(storeInfo.getMenu());
		
		return storeInfo;
	}
	
	
	
	@PostMapping("/main/store/{storeId}")
	public String createBooking(@RequestBody Booking booking, @PathVariable String storeId) {
		
		int storeIdInt = Integer.parseInt(storeId);
		
		if(booking.getStoreId() != storeIdInt) {
			return "Store ID 불일치";
		}
		
		System.out.println("storeId : " + booking.getStoreId());
		System.out.println("Total People : " + booking.getTotalPeople());
		System.out.println("Booking Time : " + booking.getBookingTime());
		System.out.println("BookingRegTime : " + booking.getBookingRegTime());
		
		for(BookingMenu bm : booking.getMenuItems()) {
			bm.setBookingId(booking.getId());
			System.out.println("Menu Id : " + bm.getMenuId() + ", Quantity : " + bm.getQuantity());
		}
		
		int result = storeDetailService.saveBookingInfo(booking);
		
		if(result > 0) {
			for(BookingMenu menuItem : booking.getMenuItems()) {
				int resultBm = storeDetailService.saveBookingMenuInfo(menuItem);
				if(resultBm <= 0) {
					return "예약메뉴 저장 실패";
				}
			}
		} else {
			return "예약 저장 실패";
		}
		
		return "Booking created successfully!";
	}
}
