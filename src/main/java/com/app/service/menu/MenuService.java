package com.app.service.menu;

import java.util.List;

import com.app.dto.menu.Menu;
import com.app.dto.store.Store;

public interface MenuService {
	
	List<Menu> findMenu(Store store);
	
}
