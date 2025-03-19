package com.app.dao.review.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.review.ReviewDAO;
import com.app.dto.review.Review;

@Repository
public class ReviewDAOImpl implements ReviewDAO {

	@Autowired
	SqlSessionTemplate sqlSessionTemplate;

	@Override
	public List<Review> findReviewByUserId(int userId) {
		List<Review> reviewList = sqlSessionTemplate.selectList("review_mapper.findReviewByUserId", userId);
		return reviewList;
	}
	
}
