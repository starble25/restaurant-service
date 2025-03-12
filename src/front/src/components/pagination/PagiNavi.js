import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagiNavi.css';



export default function PagiNavi({ totalPages, currentPage }) {

    const { search } = useLocation();
    const navigate = useNavigate();

    console.log("totalPages : " + totalPages);
    console.log("currentPage : " + currentPage);

    const pageSize = 5; //한번에 보여줄 페이지 5개임
    const startPage = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
    const endPage = Math.min(startPage + pageSize - 1, totalPages);

    

    //페이지 변경 함수
    const updatePage = (page) => {
        const params = new URLSearchParams(search);
        params.set("page", page);
        navigate(`?${params.toString()}`);
    }

    //페이지번호 생성
    const pageItems = [];

    for (let i = startPage; i <= endPage; i++) {
        pageItems.push(
            <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                <button className="page-link rounded-pill" onClick={() => updatePage(i)}>
                    {i}
                </button>
            </li>
        );
    }


    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm justify-content-center rounded-pill">
                    {/* 이전 페이지 링크 */}
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>

                        <button className="page-link rounded-pill" onClick={() => updatePage(currentPage - 1)} disabled={currentPage===1}>
                            <span aria-hidden="true">이전</span>
                        </button>
                    </li>

                    {/* 페이지 번호 for문 돌림 */}
                    {pageItems}

                    {/* 다음페이지 */}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link rounded-pill" onClick={() => updatePage(currentPage + 1)} disabled={currentPage === totalPages}>
                            <span aria-hidden="true">다음</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}