import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>欢迎来到Tiz'Blog</h1>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
          翻过这一页，下个季节就要来了。
        </p>
        <Link to="/blog" style={{
          display: 'inline-block',
          background: '#007bff',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none'
        }}>
          查看博客
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
