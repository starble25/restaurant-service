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
    private String menuDesc; //메뉴 상세설명
    private String note;
    private String mainImage;
    
    private String runtime; //전체 운영시간 컬럼 추가
}
