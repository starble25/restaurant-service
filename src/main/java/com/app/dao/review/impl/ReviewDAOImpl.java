package com.app.dao.review.impl;

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
	
	
}
