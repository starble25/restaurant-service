<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>독자 게시판</title>
 <style>
        table { width: 80%; margin: auto; border-collapse: collapse; }
        th, td { padding: 10px; border: 1px solid #ddd; text-align: center; }
        th { background-color: #f2f2f2; }
        a { text-decoration: none; color: black; }
    </style>
</head>
<body>
 <h2 style="text-align:center;">독자 게시판</h2>
    <table>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
        </tr>
        <c:forEach var="board" items="${boardList}">
            <tr>
                <td>${board.id}</td>
                <td><a href="detail/${board.id}">${board.title}</a></td>
                <td>${board.writer}</td>
                <td>${board.regDate}</td>
            </tr>
        </c:forEach>
    </table>
    <br>
    <div style="text-align:center;">
        <a href="write">글 작성하기</a>
    </div>
</body>
</html>