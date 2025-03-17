package com.app.service.review.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.review.ReviewDAO;
import com.app.dto.review.Review;
import com.app.dto.review.ReviewImage;
import com.app.service.review.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewDAO reviewDAO;

	@Override
	public List<Review> findReviewByStoreId(int storeIdInt) {
		List<Review> reviewList = reviewDAO.findReviewByStoreId(storeIdInt);
		return reviewList;
	}

	@Override
	public List<ReviewImage> findReviewImageByReviewId(int reviewId) {
		List<ReviewImage>reviewImgList = reviewDAO.findReviewImageByReviewId(reviewId);
		return reviewImgList;
	}

	

	
	
	
}
