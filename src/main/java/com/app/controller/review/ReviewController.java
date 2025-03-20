package com.app.controller.review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.file.FileInfo;
import com.app.dto.review.Review;
import com.app.dto.review.ReviewData;
import com.app.dto.review.ReviewImage;
import com.app.dto.review.ReviewImgRequestForm;
import com.app.service.review.ReviewService;
import com.app.util.ReviewFileManager;

import com.app.dto.review.Review;
import com.app.dto.users.Users;
import com.app.service.review.ReviewService;

@RestController
public class ReviewController {
	
	@Autowired
	ReviewService reviewService;

	@Autowired
	ReviewService reviewService;

	@GetMapping("/main/store/review/{storeId}")
	public List<ReviewData> getReviewData(@PathVariable String storeId) {

		int storeIdInt = Integer.parseInt(storeId);

		List<Review> reviewList = reviewService.findReviewByStoreId(storeIdInt);

		List<ReviewData> reviewDataList = new ArrayList<>();

		for (Review review : reviewList) {
			int reviewId = review.getId();

			List<ReviewImage> reviewImages = reviewService.findReviewImageByReviewId(reviewId);

			reviewDataList.add(new ReviewData(review, reviewImages));
		}

		return reviewDataList;
	}

	
	
	@PostMapping("/main/store/review/{storeId}")
	public String storeImgAction(ReviewImgRequestForm reviewImgRequestForm, @PathVariable String storeId) {
		
		int storeIdInt = Integer.parseInt(storeId);
		
		if(reviewImgRequestForm == null) {
			return "review Data없음";
		}
	   
		MultipartFile file = reviewImgRequestForm.getImage();
	    
	    try {
	    	ReviewImage reviewImage = ReviewFileManager.storeFile(file);
	    	
	    	Review review = new Review();
	    	review.setUserId(reviewImgRequestForm.getUserId());
    		review.setStoreId(reviewImgRequestForm.getStoreId());
    		review.setTitle(reviewImgRequestForm.getTitle());
    		review.setContent(reviewImgRequestForm.getContent());
    		review.setRate(reviewImgRequestForm.getRate());
    		
    		//리뷰 정보 저장
    		int result = reviewService.saveReviewInfo(review);
    		
    		if(result > 0) {
    			
    			int reviewId = review.getId();
    			reviewImage.setReviewId(reviewId);
    			
    			//파일 경로 저장
    			int result2 = reviewService.saveFileInfo(reviewImage);
    			
    			if(result2 > 0) {
    				//store테이블 평점 컬럼 데이터 수정
        			HashMap<String, Object> params = new HashMap<>();
        			params.put("storeId", review.getStoreId());
        			params.put("rate", review.getRate());
        			
        			int result3 = reviewService.updateStoreRate(params);
        			
        			if(result3 > 0) {
        				return "Review & Image & rate 저장 완료";
        			}
        			
    				return "Review & Image 저장완료";
    			}
    		}	    	 	
	    } catch (Exception e) {
	    	e.printStackTrace();
	    	return "Error 남";
	    }
		return "저장실패";
	}

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
