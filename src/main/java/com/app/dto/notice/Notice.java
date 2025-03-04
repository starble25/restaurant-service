package com.app.dto.notice;

import java.util.Date;

import lombok.Data;

@Data
public class Notice {
    private int id;
    private int userId;
    private String title;
    private String content;
    private Date creationDate;
    private Date updateDate;
}
