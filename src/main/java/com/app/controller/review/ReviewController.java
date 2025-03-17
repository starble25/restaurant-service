package com.app.controller.review;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.review.Review;
import com.app.dto.review.ReviewData;
import com.app.dto.review.ReviewImage;
import com.app.service.review.ReviewService;

@RestController
public class ReviewController {

	
	@Autowired
	ReviewService reviewService;
	
	@GetMapping("/main/store/review/{storeId}")
	public List<ReviewData> getReviewData(@PathVariable String storeId) {
		
		int storeIdInt = Integer.parseInt(storeId);
		
		List<Review> reviewList = reviewService.findReviewByStoreId(storeIdInt);
		
		List<ReviewData>reviewDataList = new ArrayList<>();

		for(Review review : reviewList) {
			int reviewId = review.getId();
			
			List<ReviewImage> reviewImages = reviewService.findReviewImageByReviewId(reviewId);
			
			reviewDataList.add(new ReviewData(review, reviewImages));
		}
				
		return reviewDataList;
	}
}
