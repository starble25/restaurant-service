package com.app.dto.review;

import lombok.Data;

@Data
public class ReviewImage {
	private int id;
    private String fileName;
    private String originalFileName;
    private String filePath;
    private String urlFilePath;
    private int reviewId;
}
