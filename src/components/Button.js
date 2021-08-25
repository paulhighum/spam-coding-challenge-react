const Button = ({ text, onClick, cursor, disabled }) => {
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={disabled ? 'btn-inactive' : 'btn'}
        >
            {text} 
        </button>
    )
}

export default Button
