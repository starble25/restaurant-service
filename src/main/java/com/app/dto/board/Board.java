package com.app.dto.board;

import java.util.Date;

import lombok.Data;

@Data	
public class Board {
	 private int id;
	    private String title;
	    private String content;
	    private String writer;
	    private Date regDate;

	    // Getter & Setter
//	    public int getId() { return id; }
//	    public void setId(int id) { this.id = id; }
//
//	    public String getTitle() { return title; }
//	    public void setTitle(String title) { this.title = title; }
//
//	    public String getContent() { return content; }
//	    public void setContent(String content) { this.content = content; }
//
//	    public String getWriter() { return writer; }
//	    public void setWriter(String writer) { this.writer = writer; }
//
//	    public Date getRegDate() { return regDate; }
//	    public void setRegDate(Date regDate) { this.regDate = regDate; }
	}