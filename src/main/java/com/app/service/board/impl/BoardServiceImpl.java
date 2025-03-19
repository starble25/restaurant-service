package com.app.service.board.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.board.BoardDAO;
import com.app.dto.board.Board;
import com.app.service.board.BoardService;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardDAO boardDAO;

    @Override
    public List<Board> getBoardList() {
        return boardDAO.getBoardList();
    }

    @Override
    public Board getBoardById(int id) {
        return boardDAO.getBoardById(id);
    }

    @Override
    public void insertBoard(Board board) {
        boardDAO.insertBoard(board);
    }

    @Override
    public void updateBoard(Board board) {
        boardDAO.updateBoard(board);
    }

    @Override
    public void deleteBoard(int id) {
        boardDAO.deleteBoard(id);
    }
}
