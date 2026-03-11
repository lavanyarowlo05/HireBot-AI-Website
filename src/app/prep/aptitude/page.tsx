"use client";
import React, { useState } from 'react';

const CATEGORIES = [
    {
        id: 1,
        title: "Quantitative Aptitude",
        desc: "Ratio, Proportion, Average, Percentage, Profit & Loss, Simple Interest, etc.",
        topics: ["Percentage", "Averages", "Ratio & Proportion", "Profit & Loss", "Time & Work", "Number Systems"],
        icon: "📈"
    },
    {
        id: 2,
        title: "Logical Reasoning",
        desc: "Coding-Decoding, Series, Blood Relations, Syllogism, Directions, etc.",
        topics: ["Series Completion", "Blood Relations", "Direction Sense", "Seating Arrangement", "Puzzles", "Venn Diagrams"],
        icon: "🧩"
    },
    {
        id: 3,
        title: "Verbal Ability",
        desc: "Synonyms, Antonyms, Sentence Correction, Reading Comprehension, etc.",
        topics: ["Synonyms", "Sentence Correction", "Active/Passive Voice", "Reading Comprehension", "Spotting Errors", "One Word Substitution"],
        icon: "📖"
    },
];

export default function AptitudePrepPage() {
    return (
        <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1 className="outfit" style={{ fontSize: '48px', marginBottom: '16px' }}>
                    Aptitude <span className="gradient-text">Mastery</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                    Fine-tune your problem-solving speed and accuracy with curated aptitude modules.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                {CATEGORIES.map(category => (
                    <div key={category.id} className="glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{category.icon}</div>
                        <h2 className="outfit" style={{ fontSize: '28px', marginBottom: '12px' }}>{category.title}</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>{category.desc}</p>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', color: 'var(--primary)', fontWeight: 'bold' }}>Key Topics</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {category.topics.map(topic => (
                                    <span key={topic} style={{ background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '4px', fontSize: '13px', border: '1px solid var(--border-color)' }}>{topic}</span>
                                ))}
                            </div>
                        </div>
                        <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
                            <button className="button-primary" style={{ flex: 1, padding: '12px' }}>Start Practice</button>
                            <button className="glass" style={{ flex: 1, padding: '12px', fontWeight: '600' }}>Mock Test</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
