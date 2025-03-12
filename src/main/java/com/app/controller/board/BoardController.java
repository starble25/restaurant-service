package com.app.controller.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.board.Board;
import com.app.service.board.BoardService;

@RestController
public class BoardController {
	  @Autowired
	    private BoardService boardService;

	    @GetMapping("/list")
	    public List<Board> boardList(Model model) {
	    	System.out.println("/list request");
	        List<Board> boardList = boardService.getBoardList();
	        model.addAttribute("boardList", boardList);
	        return boardList;
	    }

	    @GetMapping("/detail/{id}")
	    public String boardDetail(@PathVariable int id, Model model) {
	        Board board = boardService.getBoardById(id);
	        model.addAttribute("board", board);
	        return "boardDetail";
	    }

	    @GetMapping("/write")
	    public String writeForm() {
	        return "boardForm";
	    }
	    
	    @PostMapping("/write")
	    public ResponseEntity<?> write(@RequestBody Board board) {
	    	System.out.println("/write request");
	    	
	        try {
	            boardService.insertBoard(board);
	            return ResponseEntity.ok(board); // 저장된 board 객체 반환
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"게시글 저장 실패\"}");
	        }
	    }
	    
	    @GetMapping("/edit/{id}")
	    public String editForm(@PathVariable int id, Model model) {
	        Board board = boardService.getBoardById(id);
	        model.addAttribute("board", board);
	        return "boardForm";
	    }

	    @PostMapping("/edit")
	    public String edit(@ModelAttribute Board board) {
	        boardService.updateBoard(board);
	        return "redirect:/board/list";
	    }

	    @GetMapping("/delete/{id}")
	    public String delete(@PathVariable int id) {
	        boardService.deleteBoard(id);
	        return "redirect:/board/list";
	    }
	}