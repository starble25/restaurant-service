package com.app.dao.users.impl;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.users.UserProfileDAO;
import com.app.dto.file.ImageFile;

@Repository
public class UserProfileDAOImpl implements UserProfileDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;
	
	@Override
	public int saveProfileImage(ImageFile file) {
		int result = sqlSessionTemplate.insert("user_profile_mapper.saveProfileImage", file);
		return result;
	}

	@Override
	public ImageFile findProfileImageByUserId(int id) {
		ImageFile file = sqlSessionTemplate.selectOne("user_profile_mapper.findProfileImageByUserId", id);
		return file;
	}

	@Override
	public int modifyProfileImageByUserId(ImageFile file) {
		int result = sqlSessionTemplate.update("user_profile_mapper.modifyProfileImageByUserId", file);
		return result;
	}
	
}
