import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            TizBlog
          </Link>
          <ul className="navbar-links">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/blog">博客</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="/friends">友链</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
