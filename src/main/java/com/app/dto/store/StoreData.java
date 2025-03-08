package com.app.dto.store;

import java.util.List;

import com.app.dto.menu.Menu;

import lombok.Data;

@Data
public class StoreData {

	private List<Store> storeList;
    private List<StoreDetail> storeDetailList;
    private List<Menu> menuList;
    private List<StoreFilter>storeFilterList;
    private int totalStore;
}
