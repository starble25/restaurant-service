package com.app.service.review;

import java.util.List;

import com.app.dto.review.Review;
import com.app.dto.review.ReviewImage;

public interface ReviewService {

	List<Review>findReviewByStoreId(int storeIdInt);
	List<ReviewImage>findReviewImageByReviewId(int reviewId);
	
	int saveFileInfo(ReviewImage reviewImage);
	int saveReviewInfo(Review review);
	
}
