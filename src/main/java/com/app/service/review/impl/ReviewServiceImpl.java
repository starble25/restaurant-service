package com.app.service.review.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.review.ReviewDAO;
import com.app.dto.review.Review;
import com.app.dto.review.ReviewImage;
import com.app.dto.users.Users;
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

	@Override
	public int saveFileInfo(ReviewImage reviewImage) {
		int result = reviewDAO.saveFileInfo(reviewImage);
		return result;
	}

	@Override
	public int saveReviewInfo(Review review) {
		int result = reviewDAO.saveReviewInfo(review);
		return result;
	}

	@Override
	public int updateStoreRate(HashMap<String, Object> params) {
		int result = reviewDAO.updateStoreRate(params);
		return result;
	}

	
	public List<Review> findReviewByUserId(Users user) {
		List<Review> reviewList = reviewDAO.findReviewByUserId(user.getId());
		return reviewList;
	}
	
}
