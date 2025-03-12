import React, { useState, useEffect } from "react";
import { fetchBoardList, fetchBoardDetail, saveBoard, deleteBoard } from "../../api/boardApi";
import "./Board.css";

function BoardList({ setCurrentPage, setSelectedBoardId, boardList }) {
    if (!boardList || !Array.isArray(boardList)) {
        return <p>게시판 데이터를 불러오는 중...</p>;
    }

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
                    {boardList.length > 0 ? (
                        boardList.map((board) =>
                            board ? (
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td>
                                        <a href="#!" onClick={() => { setSelectedBoardId(board.id); setCurrentPage('detail'); }}>
                                            {board.title}
                                        </a>
                                    </td>
                                    <td>{board.writer}</td>
                                    <td>{board.regDate}</td>
                                </tr>
                            ) : null
                        )
                    ) : (
                        <tr>
                            <td colSpan="4">등록된 게시글이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setCurrentPage('write')}>글 작성하기</button>
        </div>
    );
}

function BoardDetail({ setCurrentPage, boardId, refreshBoardList }) {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        if (boardId) {
            fetchBoardDetail(boardId).then(setBoard);
        }
    }, [boardId]);

    if (!board) return <p>Loading...</p>;

    const handleDelete = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            await deleteBoard(boardId);
            refreshBoardList(); // 삭제 후 목록 갱신
            setCurrentPage('list');
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

function BoardForm({ setCurrentPage, refreshBoardList }) {
    const [board, setBoard] = useState({ title: "", writer: "", content: "" });

    const handleChange = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newBoard = await saveBoard(board);

            if ( !newBoard ) {
                console.log(newBoard);
                alert("게시글 저장에 실패했습니다.");
                return;
            }

            await refreshBoardList(); // 저장 후 목록 갱신
            setCurrentPage('list');
        } catch (error) {
            console.error("게시글 저장 중 오류 발생:", error);
            alert("게시글 저장에 실패했습니다.");
        }
    };

    return (
        <div className="board-container">
            <h2>게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <p>제목: <input type="text" name="title" value={board.title} onChange={handleChange} required /></p>
                <p>작성자: <input type="text" name="writer" value={board.writer} onChange={handleChange} required /></p>
                <p>내용: <textarea name="content" rows="5" value={board.content} onChange={handleChange} required /></p>
                <button type="submit">저장</button>
                <button type="button" onClick={() => setCurrentPage('list')}>취소</button>
            </form>
        </div>
    );
}

function App() {
    const [currentPage, setCurrentPage] = useState("list");
    const [selectedBoardId, setSelectedBoardId] = useState(null);
    const [boardList, setBoardList] = useState([]);

    const refreshBoardList = async () => {
        try {
            const data = await fetchBoardList();
            if (Array.isArray(data)) {
                setBoardList(data);
            } else {
                setBoardList([]);
            }
        } catch (error) {
            console.error("게시판 목록 불러오기 실패:", error);
            setBoardList([]);
        }
    };

    useEffect(() => {
        refreshBoardList();
    }, []);

    return (
        <div>
            {currentPage === 'list' && <BoardList setCurrentPage={setCurrentPage} setSelectedBoardId={setSelectedBoardId} boardList={boardList} />}
            {currentPage === 'detail' && <BoardDetail setCurrentPage={setCurrentPage} boardId={selectedBoardId} refreshBoardList={refreshBoardList} />}
            {currentPage === 'write' && <BoardForm setCurrentPage={setCurrentPage} refreshBoardList={refreshBoardList} />}
            {currentPage === 'edit' && <BoardForm setCurrentPage={setCurrentPage} />}
        </div>
    );
}

export default App;
