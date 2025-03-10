import React, { useState, useEffect } from "react";
import { fetchBoardList, fetchBoardDetail, saveBoard, deleteBoard } from "./boardApi";
import "./Board.css";

function BoardList() {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        fetchBoardList().then(setBoardList);
    }, []);

    const handleNavigate = (page) => {
        // 상태를 변경하여 페이지 전환
        setCurrentPage(page);
    };

    return (
        <div className="board-container">
            <h2>독자 게시판</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => (
                        <tr key={board.id}>
                            <td>{board.id}</td>
                            <td><a href="#!" onClick={() => handleNavigate('detail')}>{board.title}</a></td>
                            <td>{board.writer}</td>
                            <td>{board.regDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => handleNavigate('write')}>글 작성하기</button>
        </div>
    );
}

function BoardDetail() {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        // 데이터 로드
        fetchBoardDetail(boardId).then(setBoard);
    }, [boardId]);

    if (!board) return <p>Loading...</p>;

    const handleDelete = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            await deleteBoard(boardId);
            setCurrentPage('list'); // 삭제 후 페이지를 목록으로 변경
        }
    };

    return (
        <div className="board-container">
            <h2>{board.title}</h2>
            <p>작성자: {board.writer}</p>
            <p>작성일: {board.regDate}</p>
            <hr />
            <p>{board.content}</p>
            <hr />
            <button onClick={() => setCurrentPage('list')}>목록으로</button>
            <button onClick={() => setCurrentPage('edit')}>수정</button>
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
}

function BoardForm() {
    const [board, setBoard] = useState({ title: "", writer: "", content: "" });

    const handleChange = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveBoard(board);
        setCurrentPage('list');
    };

    return (
        <div className="board-container">
            <h2>게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={board.id || ""} />
                <p>제목: <input type="text" name="title" value={board.title} onChange={handleChange} required /></p>
                <p>작성자: <input type="text" name="writer" value={board.writer} onChange={handleChange} required /></p>
                <p>내용: <textarea name="content" rows="5" value={board.content} onChange={handleChange} required /></p>
                <button type="submit">저장</button>
                <button onClick={() => setCurrentPage('list')}>취소</button>
            </form>
        </div>
    );
}

function App() {
    const [currentPage, setCurrentPage] = useState("list");

    return (
        <div>
            {currentPage === 'list' && <BoardList />}
            {currentPage === 'detail' && <BoardDetail />}
            {currentPage === 'write' && <BoardForm />}
            {currentPage === 'edit' && <BoardForm />}
        </div>
    );
}

export default App;
