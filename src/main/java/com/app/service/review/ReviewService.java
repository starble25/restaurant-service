package com.app.service.review;

import java.util.List;

import com.app.dto.review.Review;
import com.app.dto.users.Users;

public interface ReviewService {

	public List<Review> findReviewByUserId(Users user);
	
}
