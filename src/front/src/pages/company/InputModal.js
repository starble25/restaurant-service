import './InputModal.css';

function InputModal({ closeModal, children, input }) {

    return (
        <div className='inputModalContainer'>
            <button className='closeModalButton' onClick={closeModal}>&times;</button>
            {children}
        </div>
    )
}

function Title({ children }) {
    return (
        <div className='titleWrap'>
            <p className='modalTitle'>{children}</p>
            <hr/>
        </div>
    )
}

function Content({ children }) {
    return (
        <div className='inputWrap'>
            {children}
        </div>
    )
}

function Input({ children }) {
    return (
        <div className='inputContainer'>
            <div className='inputTitle'>{children}</div>
            <input className='inputContent'></input>
        </div>
    )
}

export { InputModal, Title, Content, Input };