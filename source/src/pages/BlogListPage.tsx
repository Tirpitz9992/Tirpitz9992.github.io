import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../data/blogs';

const BlogListPage: React.FC = () => {
  const blogPosts = getAllBlogs();

  return (
    <div className="container">
      <h1 className="page-title">博客列表</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-content">
              <h2 className="blog-card-title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="blog-card-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
