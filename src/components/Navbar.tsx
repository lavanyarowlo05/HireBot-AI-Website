"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '94%',
            maxWidth: '1200px',
            height: '64px',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 32px'
        }}>
            <Link href="/">
                <div style={{ fontSize: '24px', fontWeight: '800', cursor: 'pointer' }} className="outfit">
                    Hire<span className="gradient-text">Bot</span>
                </div>
            </Link>

            <div style={{ display: 'flex', gap: '32px' }}>
                <Link href="/jobs" style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Job Portal</Link>
                <Link href="/prep" style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Preparation</Link>
                <Link href="/companies" style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>Hiring Process</Link>
                <Link href="/prep/dsa" style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>DSA Sheets</Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                    onClick={toggleTheme}
                    className="theme-toggle"
                    title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                >
                    {theme === 'dark' ? '🌙' : '☀️'}
                </button>
                <button className="button-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>Sign In</button>
            </div>
        </nav>
    );
}
