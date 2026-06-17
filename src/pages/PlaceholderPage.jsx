import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

export default function PlaceholderPage({ title }) {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      background: 'linear-gradient(180deg, #f0f7fc 0%, #ffffff 100%)',
      color: '#0f2435'
    }}>
      <div style={{
        background: 'rgba(0, 67, 117, 0.08)',
        padding: '24px',
        borderRadius: '50%',
        color: '#004375',
        marginBottom: '24px',
        display: 'inline-flex'
      }}>
        <Construction size={48} />
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#002747' }}>
        {title} Page
      </h1>
      <p style={{
        maxWidth: '500px',
        fontSize: '1.1rem',
        color: '#536c84',
        marginBottom: '32px',
        lineHeight: '1.6'
      }}>
        We are building this page next! Once you provide the UI design and assets, we'll implement it to match your design perfectly.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
