package com.app.dto.board;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

@Data	
public class Board {
    private int id;
    private String title;
    private String content;
    private String writer;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Date regDate; // 작성일 (날짜 변환 적용)
}
