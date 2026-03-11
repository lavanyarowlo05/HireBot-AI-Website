"use client";
import React, { useState } from 'react';

const COMPANIES = [
    {
        id: 1,
        name: "Google",
        role: "SWE-Entry",
        process: [
            { step: "Online Assessment", detail: "2-3 Coding Problems (60-90mins) on Data Structures and Algorithms." },
            { step: "Technical Interviews", detail: "4-5 Rounds (45mins each) covering DSA, System Design, and Googliness." },
            { step: "Hiring Committee", detail: "Final review of all interview feedback and packet." }
        ],
        eligibility: "BS/MS/PhD in Computer Science or related field, 0-2 yrs exp.",
        syllabus: ["Data Structures", "Algorithms", "Dynamic Programming", "System Design"],
        color: "#4285F4"
    },
    {
        id: 2,
        name: "Amazon",
        role: "SDE-I",
        process: [
            { step: "OA1: Debugging", detail: "7-10 Debugging questions in 20 minutes." },
            { step: "OA2: Coding", detail: "2 Coding questions (70mins) + Work Simulation." },
            { step: "Virtual Onsite", detail: "3-4 Rounds focusing on Leadership Principles + Technical Skills." }
        ],
        eligibility: "Strong coding skills, knowledge of CS fundamentals, analytical mind.",
        syllabus: ["Array/Strings", "Hashing", "Trees/Graphs", "Leadership Principles"],
        color: "#FF9900"
    },
    {
        id: 3,
        name: "Meta",
        role: "SDE",
        process: [
            { step: "Recruiter Screen", detail: "Behavioral interview and background check." },
            { step: "Technical Screen", detail: "2 Coding problems in 45 minutes." },
            { step: "Onsite Loop", detail: "2 Coding + 1 System Design + 1 Behavioral." }
        ],
        eligibility: "Ability to write clean, efficient code quickly. Strong problem-solving skills.",
        syllabus: ["BFS/DFS", "Topological Sort", "Matrix Ops", "Behavioral Archetypes"],
        color: "#0668E1"
    }
];

export default function CompaniesPage() {
    const [selectedCompany, setSelectedCompany] = useState(COMPANIES[0]);

    return (
        <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1 className="outfit" style={{ fontSize: '48px', marginBottom: '16px' }}>Hiring <span className="gradient-text">Workflows</span></h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>Detailed insights into the recruitment of top tech firms. Stay prepared for every round.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 350px) 1fr', gap: '48px', alignItems: 'start' }}>
                {/* Company List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {COMPANIES.map(company => (
                        <button
                            key={company.id}
                            onClick={() => setSelectedCompany(company)}
                            className="glass"
                            style={{
                                padding: '24px',
                                textAlign: 'left',
                                borderLeft: selectedCompany.id === company.id ? `4px solid ${company.color}` : '4px solid transparent',
                                background: selectedCompany.id === company.id ? 'rgba(255,255,255,0.05)' : 'var(--glass)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <h3 className="outfit" style={{ fontSize: '20px', color: selectedCompany.id === company.id ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{company.name}</h3>
                                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{company.role}</span>
                            </div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: company.color }}></div>
                        </button>
                    ))}
                </div>

                {/* Detailed Breakdown */}
                <div className="glass" style={{ padding: '48px', minHeight: '600px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                        <div>
                            <h2 className="outfit" style={{ fontSize: '40px', color: selectedCompany.color }}>{selectedCompany.name}</h2>
                            <div style={{ fontSize: '18px', color: 'var(--text-secondary)', marginTop: '8px' }}>Hiring Round Breakdown</div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '48px' }}>
                        <h3 className="outfit" style={{ fontSize: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Interview Process</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {selectedCompany.process.map((step, idx) => (
                                <div key={idx} style={{ position: 'relative', paddingLeft: '48px' }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: selectedCompany.color,
                                        border: `1px solid ${selectedCompany.color}`
                                    }}>{idx + 1}</div>
                                    <div className="outfit" style={{ fontSize: '18px', marginBottom: '8px' }}>{step.step}</div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{step.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                        <div>
                            <h3 className="outfit" style={{ fontSize: '24px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Eligibility</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{selectedCompany.eligibility}</p>
                        </div>
                        <div>
                            <h3 className="outfit" style={{ fontSize: '24px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>Syllabus Focus</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {selectedCompany.syllabus.map(topic => (
                                    <span key={topic} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '30px', fontSize: '14px', border: '1px solid var(--border-color)' }}>{topic}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
