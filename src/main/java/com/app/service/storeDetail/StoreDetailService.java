package com.app.service.storeDetail;



import java.util.List;

import com.app.dto.booking.Booking;
import com.app.dto.booking.BookingMenu;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;

public interface StoreDetailService {

	List<Store> findStoreById(int storeIdInt);
	List<StoreDetail> findStoreDetailById(int storeIdInt);
	List<Menu> findMenuById(int storeIdInt);
	
	int saveBookingInfo(Booking booking);
	int saveBookingMenuInfo(BookingMenu bookingMenu);
	int getBookingId();
	
	public StoreDetail findStoreDetailByStoreId(Store store);
	
	public StoreDetail modifyStoreDetailByStoreId(StoreDetail storeDetail);
}
