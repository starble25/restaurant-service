package com.app.dao.users;

import com.app.dto.file.ImageFile;
import com.app.dto.users.Users;

public interface UserProfileDAO {

	public int saveProfileImage(ImageFile file);
	
	public ImageFile findProfileImageByUserId(int id);
	
	public int modifyProfileImageByUserId(ImageFile file);

}
