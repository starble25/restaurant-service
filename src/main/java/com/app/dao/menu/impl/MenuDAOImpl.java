package com.app.dao.menu.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.menu.MenuDAO;
import com.app.dto.menu.Menu;

@Repository
public class MenuDAOImpl implements MenuDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	@Override
	public List<Menu> findMenu(int storeId) {
		List<Menu> menuList = sqlSessionTemplate.selectList("menu_mapper.findMenu", storeId);
		return menuList;
	}

	@Override
	public int saveMenu(Menu menu) {
		int result = sqlSessionTemplate.insert("menu_mapper.saveMenu", menu);
		return result;
	}

	@Override
	public int modifyMenu(Menu menu) {
		int result = sqlSessionTemplate.update("menu_mapper.modifyMenu", menu);
		return result;
	}
	
	@Override
	public int deleteMenu(int id) {
		int result = sqlSessionTemplate.delete("menu_mapper.deleteMenu", id);
		return result;
	}
	
}
