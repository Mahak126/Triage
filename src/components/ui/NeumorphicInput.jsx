const NeumorphicInput = ({ type = 'text', placeholder, value, onChange, icon }) => {
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {icon && (
                <span
                    style={{
                        position: 'absolute',
                        left: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '18px',
                        color: 'var(--text-secondary)'
                    }}
                >
                    {icon}
                </span>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: icon ? '16px 16px 16px 44px' : '16px',
                    borderRadius: '16px',
                    border: 'none',
                    background: 'var(--bg)',
                    boxShadow: 'inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)',
                    color: 'var(--text-primary)',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    transition: 'box-shadow 0.2s ease'
                }}
            />
        </div>
    )
}

export default NeumorphicInput
