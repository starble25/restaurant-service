package com.app.dao.users.impl;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.users.UsersDAO;

@Repository
public class UsersDAOImpl implements UsersDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;
}
