package com.app.dao.review;

import java.util.List;

import com.app.dto.review.Review;

public interface ReviewDAO {

	List<Review> findReviewByUserId(int userId);
	
}
