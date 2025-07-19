import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BlogListPage: React.FC = () => {
  // 只保留一个测试博客
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "测试博客：LaTeX渲染示例",
      excerpt: "这是一个测试博客文章，用于演示LaTeX数学公式的渲染效果。包含行内公式 $E=mc^2$ 和块级公式。",
      date: "2024-07-18",
      readTime: "3分钟阅读"
    }
  ];

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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
