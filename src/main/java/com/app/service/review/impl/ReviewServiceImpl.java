package com.app.service.review.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.review.ReviewDAO;
import com.app.dto.review.Review;
import com.app.dto.users.Users;
import com.app.service.review.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewDAO reviewDAO;

	@Override
	public List<Review> findReviewByUserId(Users user) {
		List<Review> reviewList = reviewDAO.findReviewByUserId(user.getId());
		return reviewList;
	}
	
}
