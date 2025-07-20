# 博客系统使用指南

这个博客系统采用了模块化的设计，让你可以轻松添加和管理博客内容。

## 目录结构

```
source/
├── src/
│   ├── content/
│   │   └── blogs/          # 博客内容文件（Markdown格式）
│   │       ├── latex-rendering-demo.md
│   │       └── getting-started-with-react.md
│   ├── data/
│   │   └── blogs.ts        # 博客元数据配置
│   ├── services/
│   │   └── blogService.ts  # 博客内容加载服务
│   ├── styles/
│   │   └── blog.css        # 博客样式
│   └── pages/
│       ├── BlogListPage.tsx # 博客列表页面
│       └── BlogDetailPage.tsx # 博客详情页面
```

## 如何添加新博客

### 方法1：使用脚本（推荐）

```bash
cd source
node create-blog.js my-new-post "我的新博客标题"
```

这个脚本会自动：
- 在 `src/content/blogs/` 创建源文件
- 在 `public/blogs/` 创建可访问的文件
- 输出需要添加到 `blogs.ts` 的代码模板

### 方法2：手动添加

1. **创建Markdown文件**
   在 `public/blogs/` 目录下创建一个新的 `.md` 文件，文件名建议使用英文和连字符，例如：
   ```
   my-new-blog-post.md
   ```

2. **同时复制到源目录**
   ```bash
   cp public/blogs/my-new-blog-post.md src/content/blogs/
   ```

3. **编写博客内容**
   使用Markdown格式编写你的博客内容，支持：
   - 标题（# ## ###）
   - 粗体（**text**）和斜体（*text*）
   - 代码块（```javascript ... ```）
   - 行内代码（`code`）
   - 链接（[text](url)）
   - 列表（- item 或 * item）
   - **LaTeX数学公式**（$E=mc^2$ 和 $$...$$）

4. **更新博客元数据**
   在 `src/data/blogs.ts` 中添加博客信息：

   ```typescript
   {
     id: "my-new-blog-post",  // 与文件名相同（不含.md）
     title: "我的博客标题",
     date: "2024-07-19",
     excerpt: "博客摘要，显示在列表页面...",
     readTime: "5分钟阅读",
     tags: ["React", "JavaScript", "教程"]
   }
   ```

### 方法2：使用脚本（未来可扩展）

可以创建一个简单的Node.js脚本来自动生成这些文件。

## 支持的Markdown语法

### 基础语法
- `# 标题1` - 一级标题
- `## 标题2` - 二级标题
- `**粗体文本**` - 粗体
- `*斜体文本*` - 斜体
- `[链接文本](https://example.com)` - 超链接
- `` `行内代码` `` - 行内代码
- ```代码块``` - 代码块

### LaTeX数学公式
- 行内公式：`$E=mc^2$`
- 块级公式：
  ```
  $$
  \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
  $$
  ```

## 示例博客模板

创建一个名为 `my-awesome-post.md` 的文件：

```markdown
# 我的精彩博客标题

这是博客的简介部分...

## 第一部分

这里是主要内容...

### 代码示例

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

### 数学公式

这是一个行内公式：$a^2 + b^2 = c^2$

这是一个块级公式：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## 总结

博客的结尾部分...
```

然后在 `blogs.ts` 中添加：

```typescript
{
  id: "my-awesome-post",
  title: "我的精彩博客标题",
  date: "2024-07-19",
  excerpt: "这是博客的简介部分...",
  readTime: "3分钟阅读",
  tags: ["教程", "示例"]
}
```

## 开发提示

1. **实时预览**：修改Markdown文件后，刷新页面即可看到更新
2. **图片支持**：可以在Markdown中使用 `![alt](image-url)` 添加图片
3. **自定义样式**：可以修改 `blog.css` 来调整显示效果
4. **SEO优化**：可以在博客元数据中添加更多字段，如description、keywords等

## 故障排除

### 博客不显示
- 检查文件名是否与 `blogs.ts` 中的 `id` 匹配
- 确认文件扩展名为 `.md`
- 检查文件是否放在 `src/content/blogs/` 目录下

### LaTeX公式不渲染
- 确保使用正确的LaTeX语法
- 检查是否有语法错误
- 查看浏览器控制台是否有错误信息

### 样式问题
- 确认 `blog.css` 已被正确导入
- 检查CSS类名是否匹配

## 扩展功能（未来计划）

- [ ] 添加搜索功能
- [ ] 支持博客分类
- [ ] 添加评论系统
- [ ] 支持系列文章
- [ ] 添加阅读进度条
- [ ] 支持代码高亮主题切换
