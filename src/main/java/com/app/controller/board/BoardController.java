package com.app.controller.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.app.dto.board.Board;
import com.app.service.board.BoardService;

@Controller
public class BoardController {
	  @Autowired
	    private BoardService boardService;

	    @GetMapping("/list")
	    public String boardList(Model model) {
	        List<Board> boardList = boardService.getBoardList();
	        model.addAttribute("boardList", boardList);
	        return "boardList";
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
	    public String write(@ModelAttribute Board board) {
	        boardService.insertBoard(board);
	        return "redirect:/board/list";
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