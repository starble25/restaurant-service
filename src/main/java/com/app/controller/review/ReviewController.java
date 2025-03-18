package com.app.controller.review;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.file.FileInfo;
import com.app.dto.review.Review;
import com.app.dto.review.ReviewData;
import com.app.dto.review.ReviewImage;
import com.app.dto.review.ReviewImgRequestForm;
import com.app.service.review.ReviewService;
import com.app.util.ReviewFileManager;

@RestController
public class ReviewController {

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
		
		System.out.println("userId : " + reviewImgRequestForm.getUserId());
		System.out.println("storeId : " + reviewImgRequestForm.getStoreId());
		System.out.println("Title: " + reviewImgRequestForm.getTitle());
		System.out.println("Content: " + reviewImgRequestForm.getContent());
	    System.out.println("Rate: " + reviewImgRequestForm.getRate());
	    System.out.println("File Name: " + reviewImgRequestForm.getImage());
		
	    
		MultipartFile file = reviewImgRequestForm.getImage();
		
		System.out.println("fileName: " + file.getName());
	    System.out.println("original Filename: " + file.getOriginalFilename());
	    System.out.println("Content: " + file.getContentType());
	    System.out.println("File Size: " + file.getSize());
	    
	    try {
	    	ReviewImage reviewImage = ReviewFileManager.storeFile(file);
	    	
	    	Review review = new Review();
	    	review.setUserId(reviewImgRequestForm.getUserId());
    		review.setStoreId(reviewImgRequestForm.getStoreId());
    		review.setTitle(reviewImgRequestForm.getTitle());
    		review.setContent(reviewImgRequestForm.getContent());
    		review.setRate(reviewImgRequestForm.getRate());
    		
    		int result = reviewService.saveReviewInfo(review);
    		
    		if(result > 0) {
    			
    			int reviewId = review.getId();
    			
    			reviewImage.setReviewId(reviewId);
    			
    			int result2 = reviewService.saveFileInfo(reviewImage);
    			
    			if(result2 > 0) {
    				return "Review & Image 저장완료";
    			}
    		}	    	
	    	
	    } catch (Exception e) {
	    	e.printStackTrace();
	    	return "Error 남";
	    }
		
		return "저장실패";
		
		
	}

}
