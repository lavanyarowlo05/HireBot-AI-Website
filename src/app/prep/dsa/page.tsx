"use client";
import React, { useState } from 'react';

const DSA_SHEET = [
    { topic: "Arrays", difficulty: "Easy/Medium", problems: 25, status: "0%", color: "#EF4444" },
    { topic: "Strings", difficulty: "Medium", problems: 20, status: "0%", color: "#F59E0B" },
    { topic: "Linked List", difficulty: "Medium", problems: 15, status: "0%", color: "#10B981" },
    { topic: "Recursion & Backtracking", difficulty: "Hard", problems: 30, status: "0%", color: "#3B82F6" },
    { topic: "Stacks & Queues", difficulty: "Medium", problems: 18, status: "0%", color: "#8B5CF6" },
    { topic: "Trees", difficulty: "Hard", problems: 35, status: "0%", color: "#EC4899" },
    { topic: "Graphs", difficulty: "Hard", problems: 40, status: "0%", color: "#6366F1" },
    { topic: "Dynamic Programming", difficulty: "Expert", problems: 50, status: "0%", color: "#F43F5E" },
];

const RECENT_PROBLEMS = [
    { id: 1, title: "Two Sum", difficulty: "Easy", company: "Google, Amazon", tags: ["Array", "Hash Table"] },
    { id: 2, title: "Reverse Linked List", difficulty: "Easy", company: "Meta, Microsoft", tags: ["Linked List"] },
    { id: 3, title: "Lowest Common Ancestor", difficulty: "Medium", company: "Apple, Netflix", tags: ["Trees", "BFS"] },
    { id: 4, title: "Word Break", difficulty: "Hard", company: "Snap, OpenAI", tags: ["DP", "String"] },
];

export default function DSAPrepPage() {
    return (
        <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1 className="outfit" style={{ fontSize: '48px', marginBottom: '16px' }}>Master <span className="gradient-text">Data Structures</span> & Algorithms</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>Navigate through curated topic-wise sheets designed to make you an algorithms expert.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '48px' }}>
                {/* Topic Sheets Grid */}
                <section>
                    <h2 className="outfit" style={{ fontSize: '32px', marginBottom: '32px' }}>Topic-Wise <span className="gradient-text">Sheets</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {DSA_SHEET.map((sheet, idx) => (
                            <div key={idx} className="glass" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ background: sheet.color, width: '4px', height: '100%', position: 'absolute', left: 0, top: 0 }}></div>
                                <h3 className="outfit" style={{ fontSize: '20px', marginBottom: '8px' }}>{sheet.topic}</h3>
                                <div style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.05)', padding: '4px 10px', display: 'inline-block', borderRadius: '4px', marginBottom: '16px', fontWeight: 'bold', color: sheet.color }}>{sheet.difficulty}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--text-secondary)' }}>
                                    <span>{sheet.problems} Problems</span>
                                    <span>{sheet.status} Completed</span>
                                </div>
                                <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', marginTop: '12px' }}>
                                    <div style={{ width: sheet.status, height: '100%', background: sheet.color, borderRadius: '2px' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sidebar: Trending Problems */}
                <aside>
                    <h2 className="outfit" style={{ fontSize: '32px', marginBottom: '32px' }}>Top <span className="gradient-text">Trending</span></h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {RECENT_PROBLEMS.map(problem => (
                            <div key={problem.id} className="glass" style={{ padding: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <h4 className="outfit">{problem.title}</h4>
                                    <span style={{ fontSize: '10px', background: 'var(--border-color)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '4px' }}>{problem.difficulty}</span>
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Used in: <span style={{ color: 'var(--text-primary)' }}>{problem.company}</span></div>
                            </div>
                        ))}
                    </div>

                    <div className="glass" style={{ padding: '24px', marginTop: '32px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)' }}>
                        <h3 className="outfit" style={{ fontSize: '20px', marginBottom: '12px' }}>Get Full Access</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>Unlock all 450+ problems including solutions and explanations.</p>
                        <button className="button-primary" style={{ width: '100%' }}>Go Pro</button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
