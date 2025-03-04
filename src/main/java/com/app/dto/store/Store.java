package com.app.dto.store;

import lombok.Data;

@Data
public class Store {
    private int id;
    private int userId;
    private String storeName;
    private String address;
    private String ceoName;
    private int licenseNumber;
    private int spoon;
    private int rateTotal;
    private int rateCount;
}
