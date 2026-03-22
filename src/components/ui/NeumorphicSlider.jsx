import React from 'react'

const NeumorphicSlider = ({ value, onChange, options, label }) => {
    return (
        <div style={{ width: '100%', marginBottom: '20px' }}>
            <p style={{ margin: '0 0 12px', fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>{label}</p>
            <div style={{ position: 'relative', padding: '10px 0' }}>
                {/* Track */}
                <div style={{
                    position: 'absolute', top: '50%', left: 0, right: 0,
                    transform: 'translateY(-50%)', height: '8px',
                    background: 'var(--bg)', borderRadius: '4px',
                    boxShadow: 'inset 3px 3px 6px var(--shadow-dark), inset -3px -3px 6px var(--shadow-light)'
                }} />

                {/* Progress Fill */}
                <div style={{
                    position: 'absolute', top: '50%', left: 0,
                    width: `${(value / 2) * 100}%`,
                    transform: 'translateY(-50%)', height: '8px',
                    background: value === 2 ? 'var(--red-alert)' : value === 1 ? '#ffb86c' : 'transparent',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease, background 0.3s ease'
                }} />

                {/* Clickable Dots */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', zIndex: 2 }}>
                    {[0, 1, 2].map(step => (
                        <div
                            key={step}
                            onClick={() => onChange(step)}
                            style={{
                                width: '22px', height: '22px',
                                borderRadius: '50%',
                                background: 'var(--bg)',
                                boxShadow: value === step
                                    ? 'inset 3px 3px 6px var(--shadow-dark), inset -3px -3px 6px var(--shadow-light)'
                                    : '3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light)',
                                border: value === step ? `4px solid ${step === 2 ? 'var(--red-alert)' : step === 1 ? '#ffb86c' : 'var(--green-alert)'}` : '4px solid var(--bg)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: value === step ? 'scale(1.15)' : 'scale(1)',
                                marginTop: '-1px'
                            }}
                        />
                    ))}
                </div>
            </div>
            {/* Labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                {options.map((opt, i) => (
                    <span key={i} onClick={() => onChange(i)} style={{
                        fontSize: '10px',
                        lineHeight: '1.2',
                        color: value === i ? (i === 2 ? 'var(--red-alert)' : i === 1 ? '#e6903b' : 'var(--green-alert)') : 'var(--text-secondary)',
                        fontWeight: value === i ? 700 : 500,
                        textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right',
                        flex: 1,
                        cursor: 'pointer',
                        padding: i === 0 ? '0 10px 0 0' : i === 1 ? '0 5px' : '0 0 0 10px'
                    }}>
                        {opt}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default NeumorphicSlider
