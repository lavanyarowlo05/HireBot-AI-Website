"use client";
import React, { useState } from 'react';

const MOCK_JOBS = [
    { id: 1, company: "Google", role: "Software Engineer", location: "Global / Remote", salary: "$120k - $200k", type: "Full-time", description: "Design and implement scalable distributed systems.", tags: ["Python", "Go", "Cloud"] },
    { id: 2, company: "Amazon", role: "SDE II", location: "Seattle, WA", salary: "$160k - $240k", type: "Full-time", description: "Architect cloud-native applications on AWS.", tags: ["Java", "AWS", "NoSQL"] },
    { id: 3, company: "Meta", role: "Product Designer", location: "Menlo Park, CA", salary: "$140k - $220k", type: "Hybrid", description: "Shape the future of social interaction in the metaverse.", tags: ["Figma", "UX", "Product"] },
    { id: 4, company: "Netflix", role: "Backend Engineer", location: "Los Gatos, CA", salary: "$180k - $300k", type: "Full-time", description: "Optimize streaming protocols at massive scale.", tags: ["Java", "Scala", "Kubernetes"] },
    { id: 5, company: "Apple", role: "iOS Developer", location: "Cupertino, CA", salary: "$150k - $250k", type: "On-site", description: "Craft elegant mobile experiences for millions of users.", tags: ["Swift", "CoreData", "Combine"] },
    { id: 6, company: "OpenAI", role: "AI Researcher", location: "San Francisco, CA", salary: "$250k - $500k", type: "Full-time", description: "Push the boundaries of artificial general intelligence.", tags: ["PyTorch", "NLP", "LLMs"] },
];

export default function JobsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredJobs = MOCK_JOBS.filter(job =>
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 0' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1 className="outfit" style={{ fontSize: '48px', marginBottom: '16px' }}>
                    Find Your <span className="gradient-text">Dream Job</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                    Explore 500+ active openings from top-tier companies.
                </p>
                <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                    <input
                        type="text"
                        placeholder="Search roles, companies, or skills..."
                        className="glass"
                        style={{
                            width: '100%',
                            padding: '20px 24px',
                            fontSize: '18px',
                            color: 'var(--text-primary)',
                            outline: 'none',
                            border: '1px solid var(--border-color)',
                            borderRadius: '16px'
                        }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px' }}>
                {/* Filters Sidebar */}
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div className="glass" style={{ padding: '24px' }}>
                        <h3 className="outfit" style={{ fontSize: '20px', marginBottom: '20px' }}>Employment Type</h3>
                        {['Full-time', 'Part-time', 'Contract', 'Remote', 'Intern'].map(type => (
                            <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                                <input type="checkbox" style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }} />
                                {type}
                            </label>
                        ))}
                    </div>

                    <div className="glass" style={{ padding: '24px' }}>
                        <h3 className="outfit" style={{ fontSize: '20px', marginBottom: '20px' }}>Experience Level</h3>
                        {['Entry Level', 'Intermediate', 'Senior', 'Lead', 'Executive'].map(lvl => (
                            <label key={lvl} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                                <input type="checkbox" style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }} />
                                {lvl}
                            </label>
                        ))}
                    </div>
                </aside>

                {/* Job List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {filteredJobs.length > 0 ? filteredJobs.map(job => (
                        <div key={job.id} className="glass" style={{
                            padding: '32px',
                            display: 'grid',
                            gridTemplateColumns: '1fr auto',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <span className="outfit" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>{job.company}</span>
                                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>• {job.location}</span>
                                </div>
                                <h2 className="outfit" style={{ fontSize: '28px', marginBottom: '12px' }}>{job.role}</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '600px' }}>{job.description}</p>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {job.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '12px', background: 'var(--border-color)', padding: '4px 10px', borderRadius: '6px' }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div style={{ fontSize: '22px', fontWeight: '700', color: 'var(--secondary)' }}>{job.salary}</div>
                                <button className="button-primary" style={{ padding: '12px 28px' }}>Apply Now</button>
                            </div>
                        </div>
                    )) : (
                        <div className="glass" style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                            No jobs found matching your criteria. Try different keywords.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
