package com.app.dao.notice.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.dao.notice.NoticeDAO;
import com.app.dto.notice.Notice;

@Repository
public class NoticeDAOImpl implements NoticeDAO {
	 @Autowired
	    private SqlSessionTemplate sqlSessionTemplate;

	    @Override
	    public List<Notice> getAllNotices() {
	        return sqlSessionTemplate.selectList("notice_mapper.getAllNotices");
	    }

	    @Override
	    public Notice getNoticeById(int id) {
	        return sqlSessionTemplate.selectOne("notice_mapper.getNoticeById", id);
	    }

	    @Override
	    public Notice addNotice(Notice notice) {
	        sqlSessionTemplate.insert("notice_mapper.addNotice", notice);
	        return notice;
	    }

	    @Override
	    public Notice updateNotice(Notice notice) {
	        sqlSessionTemplate.update("notice_mapper.updateNotice", notice);
	        return notice;
	    }

	    @Override
	    public void deleteNotice(int id) {
	        sqlSessionTemplate.delete("notice_mapper.deleteNotice", id);
	    }
	}