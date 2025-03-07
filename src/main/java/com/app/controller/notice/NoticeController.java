package com.app.controller.notice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.notice.Notice;
import com.app.service.notice.NoticeService;

@RestController
@RequestMapping("/notices")
public class NoticeController {
    
    @Autowired
    private NoticeService noticeService;

    // 공지사항 목록 조회
    @GetMapping
    public List<Notice> getAllNotices() {
        return noticeService.getAllNotices();
    }

    // 공지사항 상세 조회
    @GetMapping("/{id}")
    public Notice getNoticeById(@PathVariable int id) {
        return noticeService.getNoticeById(id);
    }

    // 공지사항 추가
    @PostMapping
    public Notice addNotice(@RequestBody Notice notice) {
        return noticeService.addNotice(notice);
    }

    // 공지사항 수정
    @PutMapping("/{id}")
    public Notice updateNotice(@PathVariable int id, @RequestBody Notice notice) {
        notice.setId(id);
        return noticeService.updateNotice(notice);
    }

    // 공지사항 삭제
    @DeleteMapping("/{id}")
    public void deleteNotice(@PathVariable int id) {
        noticeService.deleteNotice(id);
    }
}