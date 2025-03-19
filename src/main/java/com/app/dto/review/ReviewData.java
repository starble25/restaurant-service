package com.app.dto.review;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewData {

	private Review review;
	private List<ReviewImage> reviewImages;
}
