<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 작성</title>
</head>
<body>
<h2>${board.id == null ? '게시글 작성' : '게시글 수정'}</h2>
    <form method="post" action="${board.id == null ? '/board/write' : '/board/edit'}">
        <input type="hidden" name="id" value="${board.id}">
        <p>제목: <input type="text" name="title" value="${board.title}" required></p>
        <p>작성자: <input type="text" name="writer" value="${board.writer}" required></p>
        <p>내용: <textarea name="content" rows="5" required>${board.content}</textarea></p>
        <button type="submit">저장</button>
        <a href="/board/list">취소</a>
    </form>
</body>
</html>