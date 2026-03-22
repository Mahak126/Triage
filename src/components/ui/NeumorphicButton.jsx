import { useState } from 'react'

const NeumorphicButton = ({ children, onClick, style = {}, icon, fullWidth = false }) => {
    const [pressed, setPressed] = useState(false)

    return (
        <button
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            onClick={onClick}
            style={{
                background: 'var(--bg)',
                border: 'none',
                borderRadius: '16px',
                boxShadow: pressed
                    ? 'inset 6px 6px 10px var(--shadow-dark), inset -6px -6px 10px var(--shadow-light)'
                    : '9px 9px 16px var(--shadow-dark), -9px -9px 16px var(--shadow-light)',
                padding: '14px 20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'box-shadow 0.15s ease, transform 0.1s ease',
                transform: pressed ? 'scale(0.97)' : 'scale(1)',
                width: fullWidth ? '100%' : 'auto',
                outline: 'none',
                ...style,
            }}
        >
            {icon && <span style={{ fontSize: '20px' }}>{icon}</span>}
            {children}
        </button>
    )
}

export default NeumorphicButton
