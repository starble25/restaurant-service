package com.app.service.notice;

import java.util.List;

import com.app.dto.notice.Notice;

public interface NoticeService {
	List<Notice> getAllNotices();

	Notice getNoticeById(int id);

	Notice addNotice(Notice notice);

	Notice updateNotice(Notice notice);

	void deleteNotice(int id);
}
