const TopHeader = ({ title }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '480px',
                height: '72px',
                background: 'var(--bg)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                boxShadow: '0 4px 12px rgba(163,177,198,0.4)',
            }}
        >
            {/* Left: Greeting + Title */}
            <div>
                <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Good Evening, Dr. Priya 👋
                </p>
                <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                    {title}
                </h1>
            </div>

            {/* Right: Avatar */}
            <div
                style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    boxShadow: '5px 5px 10px var(--shadow-dark), -5px -5px 10px var(--shadow-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    cursor: 'pointer',
                    flexShrink: 0,
                }}
            >
                🩺
            </div>
        </div>
    )
}

export default TopHeader
