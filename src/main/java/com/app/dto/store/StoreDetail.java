package com.app.dto.store;

import lombok.Data;

@Data
public class StoreDetail {
    private int id;
    private int storeId;
    private String tel;
    private String addressInfo;
    private int openTime;
    private int closeTime;
    private String menuDesc;
    private String note;
    private String mainImage;
}
