"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            marginTop: '100px',
            padding: '80px 0 40px 0',
            borderTop: '1px solid var(--glass-border)',
            background: 'var(--bg-surface)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '48px',
                    marginBottom: '60px'
                }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <Link href="/">
                            <div style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px' }} className="outfit">
                                Hire<span className="gradient-text">Bot</span>
                            </div>
                        </Link>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '320px', fontSize: '15px', lineHeight: '1.8' }}>
                            Empowering the next generation of tech talent with AI-driven career guidance and comprehensive interview preparation.
                        </p>
                    </div>

                    <div>
                        <h4 className="outfit" style={{ fontSize: '18px', marginBottom: '24px' }}>Platform</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="/jobs" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Job Portal</Link></li>
                            <li><Link href="/prep" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Preparation Hub</Link></li>
                            <li><Link href="/companies" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Company Insights</Link></li>
                            <li><Link href="/prep/dsa" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>DSA Topic Sheets</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="outfit" style={{ fontSize: '18px', marginBottom: '24px' }}>Resources</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Technical Blogs</Link></li>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Interview Experiences</Link></li>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Career Roadmap</Link></li>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Success Stories</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="outfit" style={{ fontSize: '18px', marginBottom: '24px' }}>Connect</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>LinkedIn</Link></li>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Twitter</Link></li>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Discord Community</Link></li>
                            <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>GitHub</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    paddingTop: '40px',
                    borderTop: '1px solid var(--glass-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                        © {new Date().getFullYear()} HireBot AI. All rights reserved. Built for candidates worldwide.
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Privacy Policy</Link>
                        <Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Terms of Service</Link>
                        <Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
