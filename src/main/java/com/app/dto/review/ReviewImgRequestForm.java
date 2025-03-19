package com.app.dto.review;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ReviewImgRequestForm {

	int userId;
	int storeId;
	String title;
	String content;
	int rate;
	MultipartFile image;
}
