"use client";
import React, { useState } from 'react';

const TOPICS = [
    { id: 1, title: "Operating Systems", desc: "Processes, Threads, Scheduling, Deadlocks, Memory Management.", problems: 45, icon: "💿" },
    { id: 2, title: "Database Management", desc: "SQL, Normalization, Transactions, ACID, Indexing.", problems: 60, icon: "🗄️" },
    { id: 3, title: "Computer Networks", desc: "TCP/IP, OSI, HTTP/S, DNS, Routing Protocols.", problems: 30, icon: "🌐" },
    { id: 4, title: "Object Oriented Programming", desc: "Classes, Objects, Inheritance, Polymorphism, Abstraction.", problems: 50, icon: "📂" },
    { id: 5, title: "System Design", desc: "Scalability, Microservices, Load Balancing, Caching.", problems: 25, icon: "🏗️" },
    { id: 6, title: "Software Engineering", desc: "SDLC, Agile, Testing, Version Control.", problems: 20, icon: "🛠️" },
];

export default function TechnicalPrepPage() {
    return (
        <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1 className="outfit" style={{ fontSize: '48px', marginBottom: '16px' }}>
                    Technical <span className="gradient-text">Mastery</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                    Deep dive into core computer science concepts required for high-stakes interviews.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                {TOPICS.map(topic => (
                    <div key={topic.id} className="glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{topic.icon}</div>
                        <h2 className="outfit" style={{ fontSize: '28px', marginBottom: '12px' }}>{topic.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', flex: 1 }}>{topic.desc}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
                            <span style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '600' }}>{topic.problems} Problems</span>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', fontWeight: '600', cursor: 'pointer' }}>Learn</button>
                                <button className="button-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>Practice</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
