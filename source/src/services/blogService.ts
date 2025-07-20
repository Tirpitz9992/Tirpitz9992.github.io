// import { BlogPost } from '../data/blogs';

export class BlogService {
  // 加载Markdown文件内容
  static async loadBlogContent(blogId: string): Promise<string> {
    try {
      // 尝试从public目录加载
      const response = await fetch(`/blogs/${blogId}.md`);
      if (!response.ok) {
        throw new Error(`博客内容加载失败: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error('加载博客内容时出错:', error);
      return this.getDefaultContent(blogId);
    }
  }

  // 获取默认内容（当文件不存在时）
  private static getDefaultContent(blogId: string): string {
    return `# 博客内容未找到

很抱歉，ID为 "${blogId}" 的博客内容暂时无法加载。

这可能是因为：
- 博客内容文件不存在
- 网络连接问题
- 文件路径配置错误

请稍后再试，或联系网站管理员。`;
  }

  // 将Markdown转换为HTML（基础转换）
  static markdownToHtml(markdown: string): string {
    let html = markdown;

    // 标题
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // 粗体和斜体
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // 代码块
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // 链接
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // 列表
    html = html.replace(/^\* (.+)$/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^- (.+)$/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/<\/ul>\n<ul>/g, '');

    // 段落
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    html = '<p>' + html + '</p>';

    // 清理多余的标签
    html = html.replace(/<p><h(\d)>/g, '<h$1>');
    html = html.replace(/<\/h(\d)><\/p>/g, '</h$1>');
    html = html.replace(/<p><pre>/g, '<pre>');
    html = html.replace(/<\/pre><\/p>/g, '</pre>');

    return html;
  }
}
