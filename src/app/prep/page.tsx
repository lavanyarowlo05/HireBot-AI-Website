import Link from 'next/link';

export default function PrepHubPage() {
    const PREP_CATEGORIES = [
        { title: "Aptitude Prep", desc: "Master quantitative and logical reasoning.", icon: "📊", link: "/prep/aptitude", color: "#6366F1" },
        { title: "Technical Prep", desc: "Core subjects: OS, DBMS, CN, and OOPS.", icon: "💻", link: "/prep/technical", color: "#EC4899" },
        { title: "HR Preparation", desc: "Handle tricky behavioral questions.", icon: "🤝", link: "/prep/hr", color: "#10B981" },
        { title: "DSA Topic Sheets", desc: "Curated sheets for algorithm practice.", icon: "⚡", link: "/prep/dsa", color: "#F59E0B" }
    ];

    return (
        <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1 className="outfit" style={{ fontSize: '48px', marginBottom: '16px' }}>Preparation <span className="gradient-text">Hub</span></h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>Choose your path and start mastering the skills needed for your dream role.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {PREP_CATEGORIES.map((cat, idx) => (
                    <Link href={cat.link} key={idx} className="glass" style={{
                        padding: '40px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <div style={{ background: cat.color, width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '24px', boxShadow: `0 0 20px ${cat.color}44` }}>
                            {cat.icon}
                        </div>
                        <h2 className="outfit" style={{ fontSize: '28px', marginBottom: '16px' }}>{cat.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>{cat.desc}</p>
                        <button className="button-primary" style={{ marginTop: 'auto', width: '100%', padding: '12px' }}>Explore Path</button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
