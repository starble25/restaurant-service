package com.app.dto.news;

import java.util.Date;

import lombok.Data;

@Data
public class News {
    private int id;
    private int userId;
    private String imageUrl;
    private String title;
    private String content;
    private Date creationDate;
    private Date updateDate;
}