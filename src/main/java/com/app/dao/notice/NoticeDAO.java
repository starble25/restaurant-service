package com.app.dao.notice;

import java.util.List;

import com.app.dto.notice.Notice;

public interface NoticeDAO {
	 // 공지사항 목록 조회
    List<Notice> getAllNotices();

    // 공지사항 상세 조회
    Notice getNoticeById(int id);

    // 공지사항 추가
    Notice addNotice(Notice notice);

    // 공지사항 수정
    Notice updateNotice(Notice notice);

    // 공지사항 삭제
    void deleteNotice(int id);
}
