const NeumorphicProgressBar = ({ value = 0, color = 'var(--green-alert)', height = 12 }) => {
    return (
        <div
            style={{
                width: '100%',
                height: `${height}px`,
                borderRadius: `${height}px`,
                background: 'var(--bg)',
                boxShadow: 'inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Fill */}
            <div
                style={{
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    bottom: '2px',
                    width: `calc(${value}% - 4px)`,
                    borderRadius: `${height}px`,
                    background: `linear-gradient(90deg, ${color}cc, ${color})`,
                    boxShadow: `2px 2px 4px rgba(0,0,0,0.1), -1px -1px 3px rgba(255,255,255,0.4)`,
                    transition: 'width 0.5s ease',
                    minWidth: value > 0 ? '10px' : 0,
                }}
            />
        </div>
    )
}

export default NeumorphicProgressBar
