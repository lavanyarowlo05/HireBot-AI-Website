import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container animate-fade-in">
      {/* Background Blur Blobs for effects */}
      <div className="blur-blob" style={{ top: '20%', left: '10%' }}></div>
      <div className="blur-blob blur-blob-secondary" style={{ top: '50%', right: '10%' }}></div>
      <div className="blur-blob" style={{ bottom: '10%', left: '30%' }}></div>

      {/* Hero Section */}
      <section style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '85vh',
        gap: '48px',
        padding: '60px 0'
      }}>
        <div style={{ flex: 1.2 }}>
          <div style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '20px',
            background: 'var(--accent-blur)',
            color: 'var(--primary)',
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            border: '1px solid var(--primary-glow)'
          }}>
            AI-POWERED CAREER PLACEMENT
          </div>
          <h1 className="outfit" style={{ fontSize: '68px', fontWeight: '800', lineHeight: '1.05', marginBottom: '24px' }}>
            Meet <span className="gradient-text">HireBot</span>, Your AI Career Ally
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '44px', maxWidth: '580px' }}>
            The smartest platform for job seekers and prep enthusiasts. Get hired by top tech giants with guided paths, AI simulation, and real-time practice.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/jobs" className="button-primary" style={{ padding: '16px 36px', fontSize: '18px' }}>
              Explore Jobs
            </Link>
            <Link href="/prep" className="glass" style={{ padding: '16px 36px', fontSize: '18px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
              Start Preparing
            </Link>
          </div>
        </div>
        <div style={{ flex: 1, position: 'relative', height: '550px' }}>
          <Image
            src="/images/hirebot-hero.png"
            alt="HireBot AI Assistant Illustration"
            fill
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 50px var(--primary-glow))'
            }}
            priority
          />
        </div>
      </section>

      {/* Categories Grid */}
      <section style={{ padding: '100px 0' }}>
        <h2 className="outfit" style={{ textAlign: 'center', fontSize: '42px', marginBottom: '64px' }}>
          One-Stop <span className="gradient-text">Career Hub</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {[
            { title: "Aptitude Prep", desc: "Master quantitative and logical reasoning with 5000+ problems.", icon: "📊", link: "/prep/aptitude" },
            { title: "Technical Prep", desc: "Core subjects: OS, DBMS, CN, and OOPS with interview notes.", icon: "💻", link: "/prep/technical" },
            { title: "HR Preparation", desc: "Nail tricky behavioral questions with expert sample answers.", icon: "🤝", link: "/prep/hr" },
            { title: "DSA Topic Sheets", desc: "Curated sheets like SDE Sheet, Love Babbar, and Striver.", icon: "⚡", link: "/prep/dsa" }
          ].map((item, idx) => (
            <Link href={item.link} key={idx} className="glass" style={{
              padding: '40px 32px',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 className="outfit" style={{ fontSize: '24px', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Jobs Preview */}
      <section style={{ padding: '100px 0', position: 'relative' }}>
        {/* Background glow for the section */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'radial-gradient(circle at 50% 50%, var(--primary-glow), transparent 70%)',
          opacity: 0.1,
          zIndex: -1
        }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h2 className="outfit" style={{ fontSize: '42px' }}>Featured <span className="gradient-text">Opportunities</span></h2>
            <p style={{ color: 'var(--text-secondary)' }}>High-performing roles tailored to your skill-set.</p>
          </div>
          <Link href="/jobs" style={{ borderBottom: '2px solid var(--primary)', fontWeight: '600', color: 'var(--primary)' }}>View All Openings</Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {[
            { company: "OpenAI", role: "AI Software Engineer", location: "Global / San Francisco", salary: "$200k - $350k", tags: ["Python", "PyTorch", "LLMs"] },
            { company: "Apple", role: "Machine Learning Lead", location: "Remote Opt.", salary: "$180k - $280k", tags: ["Swift", "CoreML", "Vision"] },
            { company: "Anthropic", role: "Safety Researcher", location: "Seattle, WA", salary: "$190k+", tags: ["PyTorch", "Alignment", "NLP"] }
          ].map((job, idx) => (
            <div key={idx} className="glass" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div className="outfit" style={{ fontSize: '14px', background: 'var(--accent-blur)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '30px', fontWeight: 'bold' }}>
                  {job.company}
                </div>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '18px' }}>{job.salary}</span>
              </div>
              <h3 className="outfit" style={{ fontSize: '26px', marginBottom: '8px' }}>{job.role}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px' }}>{job.location}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {job.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '12px', background: 'var(--border-color)', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
