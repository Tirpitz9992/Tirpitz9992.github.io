import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <article className="about-page">
        <header className="about-header">
          <h1 className="about-title">关于我</h1>
          <p className="about-subtitle">欢迎来我的世界坐坐。</p>
        </header>

        <section className="about-content">
          <div className="about-intro">
            <h2>👋 你好，我是Tirpitzia</h2>
            <p>
              我会写一点代码，也会一点数学和物理。更重要的是，我还会做梦。
            </p>
          </div>

          <div className="about-skills">
            <h3>🛠️ 技术栈</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>编程语言</h4>
                <ul>
                    Erlang，Cpp，Rust，TypeScript
                </ul>
              </div>
              <div className="skill-category">
                <h4>数学与算法</h4>
                <ul>
                    
                </ul>
              </div>
              <div className="skill-category">
                <h4></h4>
                <ul>

                </ul>
              </div>
            </div>
          </div>

          <div className="about-contact">
            <h3>📬 联系我</h3>
            <div className="contact-info">
              <p>📧 Email: tirpitz9992@gmail.com</p>
              <p>🐙 GitHub: <a href="https://github.com/Tirpitz9992" target="_blank" rel="noopener noreferrer">@Tirpitz9992</a></p>
              <p>🐦 Twitter: <a href="https://twitter.com/tirpitzia8964" target="_blank" rel="noopener noreferrer">@tirpitzia8964</a></p>
            </div>
          </div>

          <div className="about-quote">
            <blockquote>
              ""
              <footer>— </footer>
            </blockquote>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AboutPage;
