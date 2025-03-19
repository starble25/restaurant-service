package com.app.util;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.web.multipart.MultipartFile;
import com.app.dto.file.ImageFile;

public class ImageFileManager {

    static final String FILE_DIRECTORY_PATH = "e:/imageStorage";
    static final String FILE_URL_PATH = "/imageStorage";
    
    // FILE_DIRECTORY_PATH에 폴더 없으면 폴더생성
    static {
        File directory = new File(FILE_DIRECTORY_PATH);
        if (!directory.exists()) {
            directory.mkdirs();
        }
    }

    public static List<ImageFile> storeFiles(MultipartFile[] files) throws IllegalStateException, IOException {
        List<ImageFile> storedFiles = new ArrayList<>();

        for (MultipartFile file : files) {
            ImageFile imageFile = new ImageFile();
            
            imageFile.setOriginalFileName(file.getOriginalFilename());
            imageFile.setFilePath(FILE_DIRECTORY_PATH + "/");
            imageFile.setUrlFilePath(FILE_URL_PATH + "/");
            
            String extension = extractExtension(file.getOriginalFilename());
            String fileName = createFileName(extension);
                
            imageFile.setFileName(fileName);
            
            file.transferTo(new File(imageFile.getFilePath() + imageFile.getFileName()));
            
            storedFiles.add(imageFile);
        }

        return storedFiles;
    }
    
    // UUID 랜덤 생성
    private static String createFileName(String extension) {
        String fileName = UUID.randomUUID().toString();
        
        fileName += "." + extension;
        
        return fileName;
    }
    
    // 확장자 제외한 이름 추출
    private static String extractExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf(".") + 1);
    }
}
