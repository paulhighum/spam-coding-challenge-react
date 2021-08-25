const Button = ({ text, onClick, disabled }) => {
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
