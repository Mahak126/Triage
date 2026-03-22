import NeumorphicCard from '../components/ui/NeumorphicCard'
import NeumorphicButton from '../components/ui/NeumorphicButton'

const RECENT_PATIENTS = [
    { name: 'Sita Devi', time: '2h ago', status: 'green', condition: 'TB Screening' },
    { name: 'Ramu Yadav', time: '4h ago', status: 'red', condition: 'Pneumonia Risk' },
    { name: 'Anjali Kumari', time: '6h ago', status: 'green', condition: 'Anemia Check' },
]

const QUICK_ACTIONS = [
    { icon: '🫁', label: 'Cough Scan' },
    { icon: '👁️', label: 'Anemia Check' },
    { icon: '📝', label: 'Manual Triage' },
    { icon: '🔄', label: 'Sync Data' },
]

const QuickActionButton = ({ icon, label, onNavigate }) => {
    return (
        <NeumorphicButton
            onClick={() => label === 'Manual Triage' && onNavigate && onNavigate('triage')}
            style={{ flexDirection: 'column', gap: '8px', padding: '20px 10px', borderRadius: '20px', width: '100%' }}
        >
            <span style={{ fontSize: '28px' }}>{icon}</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-primary)', textAlign: 'center' }}>{label}</span>
        </NeumorphicButton>
    )
}

const HomePage = ({ onNavigate }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Summary Card */}
            <NeumorphicCard>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>TODAY'S OVERVIEW</p>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '6px' }}>
                            <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>12</span>
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>Screenings</span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: 'var(--bg)',
                                boxShadow: '4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)',
                                borderRadius: '12px',
                                padding: '8px 14px',
                            }}
                        >
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--red-alert)', boxShadow: '0 0 6px var(--red-alert)' }} />
                            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--red-alert)' }}>3 Pending Syncs</span>
                        </div>
                        <div style={{ marginTop: '8px' }}>
                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Last sync: 2h ago</span>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '18px' }}>
                    {[
                        { label: 'Critical', value: '2', color: 'var(--red-alert)' },
                        { label: 'Moderate', value: '5', color: '#ffc107' },
                        { label: 'Clear', value: '5', color: 'var(--green-alert)' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                background: 'var(--bg)',
                                boxShadow: 'inset 3px 3px 6px var(--shadow-dark), inset -3px -3px 6px var(--shadow-light)',
                                borderRadius: '14px',
                                padding: '10px 6px',
                            }}
                        >
                            <div style={{ fontSize: '22px', fontWeight: 700, color: stat.color }}>{stat.value}</div>
                            <div style={{ fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </NeumorphicCard>

            {/* Quick Actions */}
            <div>
                <p style={{ margin: '0 0 12px 4px', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Quick Actions
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    {QUICK_ACTIONS.map((action) => (
                        <QuickActionButton key={action.label} {...action} onNavigate={onNavigate} />
                    ))}
                </div>
            </div>

            {/* Recent Patients */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Recent Patients
                    </p>
                    <button
                        onClick={() => onNavigate('patients')}
                        style={{ background: 'none', border: 'none', color: 'var(--green-alert)', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                    >
                        View All →
                    </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {RECENT_PATIENTS.map((patient) => (
                        <NeumorphicCard key={patient.name} style={{ padding: '14px 18px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                {/* Avatar */}
                                <div
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '50%',
                                        background: 'var(--bg)',
                                        boxShadow: '4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '18px',
                                        flexShrink: 0,
                                    }}
                                >
                                    👤
                                </div>
                                {/* Info */}
                                <div style={{ flex: 1 }}>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{patient.name}</p>
                                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>{patient.condition}</p>
                                </div>
                                {/* Status + Time */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                                    <div
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: '50%',
                                            background: patient.status === 'green' ? 'var(--green-alert)' : 'var(--red-alert)',
                                            boxShadow: `0 0 8px ${patient.status === 'green' ? 'var(--green-alert)' : 'var(--red-alert)'}`,
                                        }}
                                    />
                                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{patient.time}</span>
                                </div>
                            </div>
                        </NeumorphicCard>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default HomePage
