# tizblog - 二次元风格现代化博客

一个充满二次元气息的现代化React + TypeScript技术博客，采用蓝粉白柔和配色方案，具有磨砂玻璃效果和流畅动画。

## ✨ 特性

- 🎨 **现代化设计** - 二次元风格，蓝粉白柔和配色
- 🪟 **磨砂玻璃效果** - 使用backdrop-filter实现毛玻璃质感
- ⚡ **流畅动画** - 基于Framer Motion的精美动画效果
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎯 **TypeScript** - 类型安全的代码
- 🚀 **Vite** - 快速的构建工具

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: 支持Vercel、Netlify等

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
tizblog/
├── src/
│   ├── components/          # React组件
│   │   ├── Header.tsx      # 导航栏
│   │   ├── Hero.tsx        # 英雄区域
│   │   ├── BlogList.tsx    # 博客列表
│   │   ├── BlogCard.tsx    # 博客卡片
│   │   ├── About.tsx       # 关于我
│   │   ├── Contact.tsx     # 联系表单
│   │   └── Footer.tsx      # 页脚
│   ├── styles/
│   │   └── global.css      # 全局样式
│   ├── App.tsx             # 主应用组件
│   └── main.tsx            # 应用入口
├── public/                 # 静态资源
└── package.json            # 项目配置
```

## 🎨 设计特色

### 配色方案
- **主色调**: 柔和蓝色 (#a8d8ea)
- **辅助色**: 粉色 (#f8c8dc)
- **中性色**: 白色和浅灰色

### 视觉效果
- 磨砂玻璃效果 (backdrop-filter: blur(8px))
- 渐变背景
- 悬停动画
- 滚动视差效果

### 动画特性
- 页面加载动画
- 滚动触发动画
- 悬停交互效果
- 平滑过渡

## 📱 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🚀 部署

### Vercel
1. 推送代码到GitHub
2. 在Vercel导入项目
3. 自动部署

### Netlify
1. 构建命令: `npm run build`
2. 发布目录: `dist`

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License

## 📞 联系

- 邮箱: hello@tizblog.com
- GitHub: [your-github-username]

---

用 ❤️ 和代码构建
