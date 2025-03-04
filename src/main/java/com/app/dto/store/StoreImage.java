package com.app.dto.store;

import lombok.Data;

@Data
public class StoreImage {
    private String fileName;
    private String originalFileName;
    private String filePath;
    private String urlFilePath;
    private int storeId;
}
