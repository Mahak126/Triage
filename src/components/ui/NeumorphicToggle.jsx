import { useState } from 'react'

const NeumorphicToggle = ({ defaultOn = false, onChange }) => {
    const [on, setOn] = useState(defaultOn)

    const toggle = () => {
        const next = !on
        setOn(next)
        onChange && onChange(next)
    }

    return (
        <div
            onClick={toggle}
            style={{
                width: '56px',
                height: '30px',
                borderRadius: '15px',
                background: 'var(--bg)',
                boxShadow: 'inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flexShrink: 0,
            }}
        >
            {/* Active color overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '15px',
                    background: on ? 'rgba(32, 201, 151, 0.25)' : 'transparent',
                    transition: 'background 0.3s ease',
                }}
            />
            {/* Knob */}
            <div
                style={{
                    position: 'absolute',
                    top: '4px',
                    left: on ? '28px' : '4px',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    boxShadow: '3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light)',
                    transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
            />
        </div>
    )
}

export default NeumorphicToggle
