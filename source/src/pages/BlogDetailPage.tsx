import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { getBlogById } from '../data/blogs';
import { BlogService } from '../services/blogService';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const blog = getBlogById(id || '');

  useEffect(() => {
    const loadBlogContent = async () => {
      if (!blog) {
        setError('博客未找到');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const markdownContent = await BlogService.loadBlogContent(blog.id);
        const htmlContent = BlogService.markdownToHtml(markdownContent);
        setContent(htmlContent);
        setError(null);
      } catch (err) {
        setError('加载博客内容失败');
        console.error('加载博客内容时出错:', err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogContent();
  }, [id, blog]);

  useEffect(() => {
    if (!content) return;

    // 渲染LaTeX公式
    const renderMath = () => {
      const elements = document.querySelectorAll('.blog-detail-content');
      elements.forEach(element => {
        // 渲染$...$格式的行内公式
        const inlineFormulas = element.querySelectorAll('p, li, span, h1, h2, h3, h4, h5, h6');
        inlineFormulas.forEach(node => {
          if (node.textContent) {
            const processed = node.innerHTML
              .replace(/\$\$(.*?)\$\$/gs, (match, formula) => {
                try {
                  return katex.renderToString(formula, { displayMode: true });
                } catch (e) {
                  console.warn('LaTeX渲染错误:', e);
                  return match;
                }
              })
              .replace(/\$(.*?)\$/g, (match, formula) => {
                try {
                  return katex.renderToString(formula, { displayMode: false });
                } catch (e) {
                  console.warn('LaTeX渲染错误:', e);
                  return match;
                }
              });
            if (processed !== node.innerHTML) {
              node.innerHTML = processed;
            }
          }
        });
      });
    };

    // 延迟渲染以确保DOM已更新
    const timeoutId = setTimeout(renderMath, 100);
    return () => clearTimeout(timeoutId);
  }, [content]);

  if (!blog) {
    return (
      <div className="container">
        <div className="error-message">
          <h1>博客未找到</h1>
          <p>抱歉，您访问的博客不存在。</p>
          <a href="/blog">返回博客列表</a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>正在加载博客内容...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">
          <h1>加载失败</h1>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>重试</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <article className="blog-detail">
        <header className="blog-detail-header">
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <span>发布日期：{blog.date}</span>
            <span>阅读时间：{blog.readTime}</span>
          </div>
          <div className="blog-detail-tags">
            {blog.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        </header>
        <div 
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
};

export default BlogDetailPage;
