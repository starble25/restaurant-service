package com.app.dto.review;

import java.util.Date;

import lombok.Data;

@Data
public class Review {
    private int id;
    private int userId;
    private int storeId;
    private String title;
    private String content;
    private int rate;
    private Date creationDate;
    private String state;
}
