package com.app.dao.board.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.board.BoardDAO;
import com.app.dto.board.Board;

@Repository
public class BoardDAOImpl implements BoardDAO{
	  @Autowired
	    private SqlSessionTemplate sqlSessionTemplate;

	    @Override
	    public List<Board> getBoardList() {
	        return sqlSessionTemplate.selectList("board_mapper.getBoardList");
	    }

	    @Override
	    public Board getBoardById(int id) {
	        return sqlSessionTemplate.selectOne("board_mapper.getBoardById", id);
	    }

	    @Override
	    public void insertBoard(Board board) {
	        sqlSessionTemplate.insert("board_mapper.insertBoard", board);
	    }

	    @Override
	    public void updateBoard(Board board) {
	        sqlSessionTemplate.update("board_mapper.updateBoard", board);
	    }

	    @Override
	    public void deleteBoard(int id) {
	        sqlSessionTemplate.delete("board_mapper.deleteBoard", id);
	    }
	}