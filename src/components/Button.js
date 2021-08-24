const Button = ({ text, onClick, cursor, disabled }) => {
    return (
        <button 
            onClick={onClick}
            style={{cursor: cursor}}
            disabled={disabled}
            className='btn'
        >
            {text} 
        </button>
    )
}

export default Button
