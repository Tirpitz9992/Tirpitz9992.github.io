import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // 渲染LaTeX公式
    const renderMath = () => {
      const elements = document.querySelectorAll('.blog-detail-content');
      elements.forEach(element => {
        // 渲染行内公式
        const inlineMath = element.querySelectorAll('script[type="math/tex"]');
        inlineMath.forEach(script => {
          const html = katex.renderToString(script.textContent || '', { displayMode: false });
          const span = document.createElement('span');
          span.innerHTML = html;
          script.parentNode?.replaceChild(span, script);
        });

        // 渲染块级公式
        const displayMath = element.querySelectorAll('script[type="math/tex; mode=display"]');
        displayMath.forEach(script => {
          const html = katex.renderToString(script.textContent || '', { displayMode: true });
          const div = document.createElement('div');
          div.innerHTML = html;
          div.style.textAlign = 'center';
          div.style.margin = '1em 0';
          script.parentNode?.replaceChild(div, script);
        });

        // 渲染$...$格式的行内公式
        const content = element.innerHTML;
        const processedContent = content
          .replace(/\$\$(.*?)\$\$/gs, (match, formula) => {
            try {
              return katex.renderToString(formula, { displayMode: true });
            } catch (e) {
              return match;
            }
          })
          .replace(/\$(.*?)\$/g, (match, formula) => {
            try {
              return katex.renderToString(formula, { displayMode: false });
            } catch (e) {
              return match;
            }
          });
        
        if (processedContent !== content) {
          element.innerHTML = processedContent;
        }
      });
    };

    renderMath();
  }, []);

  // 测试博客内容，支持LaTeX
  const blogContent = {
    1: {
      title: "测试博客：LaTeX渲染示例",
      date: "2024-07-18",
      content: `
# 测试博客：LaTeX渲染示例

欢迎来到这个测试博客！这篇文章将演示如何在博客中渲染LaTeX数学公式。

## 行内公式

这是一个行内公式的示例：$E=mc^2$，这是爱因斯坦著名的质能方程。

## 块级公式

这是一个块级公式的示例：

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

## 矩阵示例

我们可以使用LaTeX来渲染矩阵：

$$
\\begin{pmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6 \\\\
7 & 8 & 9
\\end{pmatrix}
$$

## 希腊字母和符号

希腊字母在数学中经常使用：$\\alpha, \\beta, \\gamma, \\delta, \\epsilon$ 等等。

## 极限和求和

极限和求和的表示：

$$
\\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\frac{1}{i^2} = \\frac{\\pi^2}{6}
$$

## 微积分

导数和积分的表示：

$$
\\frac{d}{dx} \\sin(x) = \\cos(x)
$$

$$
\\int_0^1 x^2 dx = \\frac{1}{3}
$$

---

*这个页面已经集成了KaTeX，可以正确渲染LaTeX数学公式。*
      `
    }
  };

  const blogId = parseInt(id || '1');
  const blog = blogId === 1 ? blogContent[1] : undefined;

  if (!blog) {
    return <div className="container">博客未找到</div>;
  }

  return (
    <div className="container">
      <article className="blog-detail">
        <header className="blog-detail-header">
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <span>发布日期：{blog.date}</span>
          </div>
        </header>
        <div 
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </div>
  );
};

export default BlogDetailPage;
