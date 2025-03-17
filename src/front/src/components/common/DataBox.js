import './DataBox.css';
import { useState } from 'react';

function DataBox({ children, containerTitle, title, content, button }) {
    const [edit, setEdit] = useState(false);

    return (
        <div className='dataInfoContainer'>
            { children }
        </div>
    )
}


function BoxTitle({ children }) {
    return (
        <div className='containerTitle'>
            <h3>{children}</h3>
        </div>
    )
}

function Row({ children }) {
    return (
        <div className='dataInfo'>
            <div className='infoBox'>
                {children}
            </div>
        </div>
    )
}

function Col({ title, content }) {
    return (
        <>
            <div className='infoTitle'>{title}</div>
            <div className='infoContent'>{content}</div>
        </>
    )
}

function Btn({ children }) {
    return (
        <div className='buttonWrap'>
            {children}
        </div>
    )
}


export { DataBox, BoxTitle, Row, Col, Btn };