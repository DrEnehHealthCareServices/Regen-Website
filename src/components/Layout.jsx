import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main style={{ flex: '1', width: '100%' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
