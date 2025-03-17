package com.app.controller.store;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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
import com.app.service.store.StoreDetailService;


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

		if (booking.getStoreId() != storeIdInt) {
			return "Store ID 불일치";
		}

		System.out.println("Id : " + booking.getId());
		System.out.println("storeId : " + booking.getStoreId());
		System.out.println("Total People : " + booking.getTotalPeople());
		System.out.println("Booking Time : " + booking.getBookingTime());
		System.out.println("BookingRegTime : " + booking.getBookingRegTime());

		int result = storeDetailService.saveBookingInfo(booking);

		if (result > 0) {
			int generatedId = storeDetailService.getBookingId();
			booking.setId(generatedId);
			System.out.println("After Insert - 예약된 booking ID: " + generatedId);

			
			for (BookingMenu bm : booking.getMenuItems()) {
				bm.setBookingId(generatedId);
				System.out.println("BookingId: " + bm.getBookingId() + ", Menu Id : " + bm.getMenuId() + ", Quantity : " + bm.getQuantity());
			}

			for (BookingMenu bm : booking.getMenuItems()) {
				int resultBm = storeDetailService.saveBookingMenuInfo(bm);
				if (resultBm <= 0) {
					return "예약메뉴 저장 실패";
				}
			}
			return "Booking created successfully!";
			
		} else {
			return "예약 저장 실패";
		}
	}
	
	@PostMapping("api/storeDetail/find-detail")
	public ResponseEntity<?> findStoreDetail(@RequestBody Store store) {
		if( store == null || store.getId() == 0 ) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid request : 파라미터 없음");
		}
		
		StoreDetail storeDetail = storeDetailService.findStoreDetailByStoreId(store);
	    if (storeDetail != null) {
	        return ResponseEntity.ok(storeDetail);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Store detail not Found");
	    }
	}
}
