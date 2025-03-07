package com.app.service.notice.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.notice.NoticeDAO;
import com.app.dto.notice.Notice;
import com.app.service.notice.NoticeService;

public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeDAO noticeDAO;

    @Override
    public List<Notice> getAllNotices() {
        return noticeDAO.getAllNotices();
    }

    @Override
    public Notice getNoticeById(int id) {
        return noticeDAO.getNoticeById(id);
    }

    @Override
    public Notice addNotice(Notice notice) {
        return noticeDAO.addNotice(notice);
    }

    @Override
    public Notice updateNotice(Notice notice) {
        return noticeDAO.updateNotice(notice);
    }

    @Override
    public void deleteNotice(int id) {
        noticeDAO.deleteNotice(id);
    }
}