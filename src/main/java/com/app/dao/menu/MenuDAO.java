package com.app.dao.menu;

import java.util.List;

import com.app.dto.menu.Menu;

public interface MenuDAO {

	List<Menu> findMenu(int storeId);
	
	int saveMenu(Menu menu);
	
	int modifyMenu(Menu menu);
	
	int deleteMenu(int id);
	
}
