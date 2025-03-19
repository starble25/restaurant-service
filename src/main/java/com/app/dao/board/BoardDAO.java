package com.app.dao.board;

import java.util.List;

import com.app.dto.board.Board;

public interface BoardDAO {
	 List<Board> getBoardList(); // 게시글 목록 조회
	    Board getBoardById(int id); // 게시글 상세 조회
	    void insertBoard(Board board); // 게시글 등록
	    void updateBoard(Board board); // 게시글 수정
	    void deleteBoard(int id); // 게시글 삭제
	}