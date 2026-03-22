const NeumorphicCard = ({ children, style = {}, className = '', onClick }) => {
    return (
        <div
            onClick={onClick}
            className={className}
            style={{
                background: 'var(--bg)',
                borderRadius: '20px',
                boxShadow: '9px 9px 16px var(--shadow-dark), -9px -9px 16px var(--shadow-light)',
                padding: '18px',
                ...style,
            }}
        >
            {children}
        </div>
    )
}

export default NeumorphicCard
