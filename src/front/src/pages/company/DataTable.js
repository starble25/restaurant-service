import './DataTable.css';

function DataTable({ children }) {

    return (
        <div className='myReviewListWrapper'>
            <ol>
                {children}
            </ol>
        </div>
    )
}

function TitleRow({ children }) {
    return (
        <li className='listContainer listTitle'>
            {children}
        </li>
    )
}

function TitleCol({ children }) {
    return (
        <div className='listStyle titleStyle'>
            {children}
        </div>
    )
}

function ContentRow({ children }) {
    return (
        <li className='listContainer listContent'>
            {children}
        </li>
    )
}

function ContentCol({ children }) {
    return (
        <div className='listStyle contentStyle'>
            {children}
        </div>
    )
}

export { DataTable, TitleRow, TitleCol, ContentRow, ContentCol };