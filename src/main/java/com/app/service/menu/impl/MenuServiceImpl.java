package com.app.service.menu.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.menu.MenuDAO;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.service.menu.MenuService;

@Service
public class MenuServiceImpl implements MenuService {
	
	@Autowired
	MenuDAO menuDAO;

	@Override
	public List<Menu> findMenu(Store store) {
		
		List<Menu> menuList = menuDAO.findMenu(store.getId());
		
		return menuList;
	}

	@Override
	public int saveMenu(Menu menu) {
		int result = menuDAO.saveMenu(menu);
		return result;
	}

	@Override
	public int modifyMenu(Menu menu) {
		if(menu.getId() <= 0) {
			return 0;
		}
		
		int result = menuDAO.modifyMenu(menu);
		return result;
	}
	
	@Override
	public int deleteMenu(int id) {
		int result = menuDAO.deleteMenu(id);
		return result;
	}
	
}
