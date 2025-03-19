package com.app.util;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.file.FileInfo;
import com.app.dto.review.ReviewData;
import com.app.dto.review.ReviewImage;

public class ReviewFileManager {

	static final String FILE_DIRECTORY_PATH = "d:/fileStorage/";
	static final String FILE_URL_PATH = "/fileStorage";
	
	public static ReviewImage storeFile(MultipartFile file) throws IllegalStateException, IOException {
		
		//파일 폴더 저장 -> 파일에 대한 정보를 기반 -> DB 저장
		ReviewImage reviewImage = new ReviewImage();
		
		reviewImage.setOriginalFileName(file.getOriginalFilename());
		reviewImage.setFilePath(FILE_DIRECTORY_PATH);
		reviewImage.setUrlFilePath(FILE_URL_PATH);
		
		String extension = extractExtension(file.getOriginalFilename());
		String fileName = createFileName(extension);
			
		reviewImage.setFileName(fileName);
		
		file.transferTo( new File(reviewImage.getFilePath() + reviewImage.getFileName()) );
		
		return reviewImage;
	}
	
	//png	dasfiauhfiowehr.png
	//jpg	aeoiptaetoiqetr.jpg
	private static String createFileName(String extension) {
		String fileName = UUID.randomUUID().toString();
		
		fileName += "." + extension;
		
		return fileName;
	}
	
	private static String extractExtension(String fileName) {
		//tree.jpg
		fileName.substring( fileName.lastIndexOf(".") + 1 );
		return fileName;
	}
	
}
