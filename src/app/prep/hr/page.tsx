"use client";
import React, { useState } from 'react';

const QUESTIONS = [
    { id: 1, question: "Tell me about yourself.", category: "Introduction", tip: "Focus on your professional journey and recent achievements.", answer: "Start with a brief intro, mention your education, key projects, and relevant work experience. Keep it within 2-3 minutes.", color: "#4F46E5" },
    { id: 2, question: "What are your strengths and weaknesses?", category: "Self-Analysis", tip: "Be honest about weaknesses but show you are working on them.", answer: "For strengths, mention traits like adaptability or problem-solving. For weaknesses, pick a real but non-critical one and explain how you improve it.", color: "#EC4899" },
    { id: 3, question: "Why do you want to join our company?", category: "Motivation", tip: "Research the company's culture and values beforehand.", answer: "Mention specific company values, recent projects, or their market position that aligns with your career goals.", color: "#F59E0B" },
    { id: 4, question: "Where do you see yourself in 5 years?", category: "Ambition", tip: "Show you have a long-term plan that includes growth.", answer: "Talk about mastering your current role and taking on more leadership responsibilities while contributing to the company's success.", color: "#10B981" },
    { id: 5, question: "Describe a conflict you had at work/college.", category: "Behavioral", tip: "Use the STAR method (Situation, Task, Action, Result).", answer: "Describe the situation, the task at hand, the specific actions you took to resolve it, and the positive outcome.", color: "#3B82F6" },
];

export default function HRPrepPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1 className="outfit" style={{ fontSize: '48px', marginBottom: '16px' }}>HR <span className="gradient-text">Interview Hub</span></h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>Master behavioral questions with expert sample answers and actionable tips.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px' }}>
                {/* Accordion Questions */}
                <section>
                    {QUESTIONS.map((q, idx) => (
                        <div key={q.id} className="glass" style={{ marginBottom: '20px', padding: '0', overflow: 'hidden' }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{
                                    width: '100%',
                                    padding: '32px',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '24px'
                                }}
                            >
                                <div>
                                    <span style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.05)', padding: '4px 12px', borderRadius: '12px', color: q.color, fontWeight: 'bold', marginBottom: '12px', display: 'inline-block' }}>{q.category}</span>
                                    <h3 className="outfit" style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{q.question}</h3>
                                </div>
                                <div style={{ fontSize: '24px', transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>⌄</div>
                            </button>
                            {openIndex === idx && (
                                <div style={{ padding: '0 32px 32px 32px', color: 'var(--text-secondary)', fontSize: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '32px' }}>
                                    <div style={{ display: 'flex', gap: '24px' }}>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '18px' }} className="outfit">Sample Answer</h4>
                                            <p>{q.answer}</p>
                                        </div>
                                        <div style={{ width: '250px', background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px' }}>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '14px' }} className="outfit">💡 Expert Tip</h4>
                                            <p style={{ fontSize: '14px' }}>{q.tip}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                {/* Sidebar: Interview Checklist */}
                <aside>
                    <h2 className="outfit" style={{ fontSize: '32px', marginBottom: '32px' }}>Checklist</h2>
                    <div className="glass" style={{ padding: '24px' }}>
                        {[
                            "Research the role and JD.",
                            "Dress professionally for video.",
                            "Stable internet and good lighting.",
                            "Prepare 3 relevant stories.",
                            "Have 2 questions for the HR.",
                            "Follow up thank you email."
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '14px' }}>
                                <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                                {item}
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}
