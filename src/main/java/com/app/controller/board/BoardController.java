package com.app.controller.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.board.Board;
import com.app.service.board.BoardService;

@RestController
@RequestMapping("/api") // API 경로 추가
public class BoardController {
    @Autowired
    private BoardService boardService;

    // 게시글 목록 조회
    @GetMapping("/board")
    public ResponseEntity<List<Board>> getBoardList() {
        List<Board> boardList = boardService.getBoardList();
        return ResponseEntity.ok(boardList);
    }

    // 게시글 상세 조회
    @GetMapping("/board/detail/{id}")
    public ResponseEntity<Board> getBoardDetail(@PathVariable int id) {
        Board board = boardService.getBoardById(id);
        if (board != null) {
            return ResponseEntity.ok(board);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // 게시글 작성 페이지로 이동 (필요 없음, React에서 처리)
    // @GetMapping("/write")는 삭제

    // 게시글 저장
    @PostMapping("/board/write")
    public ResponseEntity<?> write(@RequestBody Board board) {
        try {
            boardService.insertBoard(board);
            return ResponseEntity.ok(board); // 저장된 board 객체 반환
        } catch (Exception e) {
        	e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"게시글 저장 실패\"}");
        }
    }

    // 게시글 수정 데이터 조회 (React에서 상세 데이터 재사용 가능하므로 생략 가능)
    // @GetMapping("/edit/{id}")는 삭제

    // 게시글 수정
    @PutMapping("/board/edit/{id}")
    public ResponseEntity<?> edit(@PathVariable int id, @RequestBody Board board) {
        try {
            board.setId(id); // ID를 명시적으로 설정
            boardService.updateBoard(board);
            return ResponseEntity.ok(board);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"게시글 수정 실패\"}");
        }
    }

    // 게시글 삭제
    @DeleteMapping("/board/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        try {
            boardService.deleteBoard(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"게시글 삭제 실패\"}");
        }
    }
}