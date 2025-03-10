package com.app.service.board;

import java.util.List;

import com.app.dto.board.Board;

public interface BoardService {
	 List<Board> getBoardList();
	    Board getBoardById(int id);
	    void insertBoard(Board board);
	    void updateBoard(Board board);
	    void deleteBoard(int id);
	}