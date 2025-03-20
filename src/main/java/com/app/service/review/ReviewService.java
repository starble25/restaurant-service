package com.app.service.review;

import java.util.HashMap;
import java.util.List;

import com.app.dto.review.Review;
import com.app.dto.review.ReviewImage;

import com.app.dto.users.Users;

public interface ReviewService {

	List<Review>findReviewByStoreId(int storeIdInt);
	List<ReviewImage>findReviewImageByReviewId(int reviewId);
	
	int saveFileInfo(ReviewImage reviewImage);
	int saveReviewInfo(Review review);
	
	
	int updateStoreRate(HashMap<String, Object> params);

	public List<Review> findReviewByUserId(Users user);
}
