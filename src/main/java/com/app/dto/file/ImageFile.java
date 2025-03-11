package com.app.dto.file;

import lombok.Data;

@Data
public class ImageFile {

	int id;					// pk
	int refId;				// 참조할 pk
	String fileName;		// UUID 랜덤생성
	String originalFileName;// 
	String filePath;		// 저장된 경로
	String urlFilePath;		// url로 요청할 경로

}
