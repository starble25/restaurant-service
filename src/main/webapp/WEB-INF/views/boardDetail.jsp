<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 상세</title>
</head>
<body>
 <h2>${board.title}</h2>
    <p>작성자: ${board.writer}</p>
    <p>작성일: ${board.regDate}</p>
    <hr>
    <p>${board.content}</p>
    <hr>
    <a href="/board/list">목록으로</a> |
    <a href="/board/edit/${board.id}">수정</a> |
    <a href="/board/delete/${board.id}" onclick="return confirm('삭제하시겠습니까?');">삭제</a>
</body>
</html>