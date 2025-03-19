package com.app.dto.store;

import java.util.List;

import com.app.dto.menu.Menu;

import lombok.Data;

@Data
public class StoreInfo {

	List<Store> store;
	List<StoreDetail> storeDetail;
	List<Menu> menu;
}
