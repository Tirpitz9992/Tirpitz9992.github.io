#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('使用方法: node create-blog.js <文件名> <标题>');
  console.log('示例: node create-blog.js my-new-post "我的新博客"');
  process.exit(1);
}

const fileName = args[0];
const title = args[1];
const date = new Date().toISOString().split('T')[0];

// 创建Markdown文件
const markdownContent = `# ${title}

这里是博客内容...

## 第一部分

开始编写你的博客内容...

### 代码示例

\`\`\`javascript
// 你的代码
console.log('Hello, World!');
\`\`\`

### 数学公式

行内公式：$E=mc^2$

块级公式：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## 总结

博客结尾...
`;

// 文件路径（同时创建到src和public目录）
const srcPath = path.join(__dirname, 'src', 'content', 'blogs', `${fileName}.md`);
const publicPath = path.join(__dirname, 'public', 'blogs', `${fileName}.md`);

// 写入Markdown文件到两个位置
fs.writeFileSync(srcPath, markdownContent);
fs.writeFileSync(publicPath, markdownContent);
console.log(`✅ 已创建博客文件: ${srcPath}`);
console.log(`✅ 已创建博客文件: ${publicPath}`);

// 输出需要添加到blogs.ts的代码
console.log('\n📋 请将以下代码添加到 src/data/blogs.ts:');
console.log(`\`\`\`typescript
{
  id: "${fileName}",
  title: "${title}",
  date: "${date}",
  excerpt: "在这里添加博客摘要...",
  readTime: "3分钟阅读",
  tags: ["标签1", "标签2"]
}
\`\`\``);

console.log('\n📝 下一步:');
console.log('1. 编辑博客内容: src/content/blogs/' + fileName + '.md');
console.log('2. 更新博客元数据: src/data/blogs.ts');
console.log('3. 启动开发服务器查看效果');
