// 리뷰 게시판 목록 조회
export async function fetchReviewBoardList() {
    try {
        const response = await fetch("/api/reviewBoard/list");
        if (!response.ok) {
            throw new Error("리뷰 게시판 목록을 가져오는 데 실패했습니다.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching review board list:", error);
        return [];
    }
}

// 리뷰 게시글 상세 조회
export async function fetchReviewBoardDetail(boardId) {
    try {
        const response = await fetch(`/api/reviewBoard/detail/${boardId}`);
        if (!response.ok) {
            throw new Error("리뷰 게시글 정보를 가져오는 데 실패했습니다.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching review board detail:", error);
        return null;
    }
}

// 리뷰 게시글 저장
export async function saveReviewBoard(board) {
    try {
        const method = board.id ? "PUT" : "POST";
        const url = board.id ? `/api/reviewBoard/edit/${board.id}` : "/api/reviewBoard/write";

        const response = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(board),
        });

        if (!response.ok) {
            throw new Error("리뷰 게시글 저장에 실패했습니다.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error saving review board:", error);
        return null;
    }
}

// 리뷰 게시글 삭제
export async function deleteReviewBoard(boardId) {
    try {
        const response = await fetch(`/api/reviewBoard/delete/${boardId}`, { method: "DELETE" });

        if (!response.ok) {
            throw new Error("리뷰 게시글 삭제에 실패했습니다.");
        }

        return true;
    } catch (error) {
        console.error("Error deleting review board:", error);
        return false;
    }
}
