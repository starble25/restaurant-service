package com.app.dao.review.impl;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.review.ReviewDAO;
import com.app.dto.review.Review;
import com.app.dto.review.ReviewImage;


@Repository
public class ReviewDAOImpl implements ReviewDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	@Override
	public List<Review> findReviewByStoreId(int storeIdInt) {
		List<Review> reviewList = sqlSessionTemplate.selectList("review_mapper.findReviewByStoreId", storeIdInt);
		return reviewList;
	}

	@Override
	public List<ReviewImage> findReviewImageByReviewId(int reviewId) {
		List<ReviewImage> reviewImgList = sqlSessionTemplate.selectList("review_mapper.findReviewImageByReviewId", reviewId);
		return reviewImgList;
	}

	@Override
	public int saveFileInfo(ReviewImage reviewImage) {
		int result = sqlSessionTemplate.insert("file_mapper.saveFileInfo", reviewImage);
		return result;
	}

	@Override
	public int saveReviewInfo(Review review) {
		int result = sqlSessionTemplate.insert("file_mapper.saveReviewInfo", review);
		return result;
	}

	@Override
	public int updateStoreRate(HashMap<String, Object> params) {
		int result = sqlSessionTemplate.update("review_mapper.updateStoreRate", params);
		return result;
	}
	
	
}
