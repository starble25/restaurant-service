package com.app.dto.store;

import java.util.List;
import java.util.Map;

import com.app.dto.menu.Menu;

import lombok.Data;

@Data
public class StoreData {

	private List<Store> storeList;
    private List<StoreDetail> storeDetailList;
    private List<Menu> menuList;
    private Map<String, Object>storeFilterList;
    private int totalStore;
    private int totalPages;
    private int currentPage;
}
