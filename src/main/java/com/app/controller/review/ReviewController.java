package com.app.controller.review;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.review.Review;
import com.app.dto.users.Users;
import com.app.service.review.ReviewService;

@RestController
public class ReviewController {
	
	@Autowired
	ReviewService reviewService;

	@PostMapping("/api/review/find-review")
	public ResponseEntity<?> findReviewByUserId(@RequestBody Users user) {
		System.out.println("find-review request");
		
		if( user == null || user.getId() <= 0 ) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("잘못된 요청 : user is null");
		}
		
		List<Review> reviewList = reviewService.findReviewByUserId(user);
		if( reviewList!= null ) {
			return ResponseEntity.ok(reviewList);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("내부 서버 오류");
		}
		
	}
}
