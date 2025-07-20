# 部署到GitHub Pages完整指南

## 🚀 构建和部署步骤

### 1. 本地构建测试

```bash
# 进入项目目录
cd source

# 安装依赖（如果还没安装）
npm install

# 运行构建
npm run build

# 本地预览（可选）
npm run preview
```

### 2. 配置GitHub Pages

#### 方法一：使用GitHub Actions（推荐）

1. **创建GitHub Actions工作流**
   在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: source/package-lock.json
          
      - name: Install dependencies
        run: |
          cd source
          npm ci
          
      - name: Build
        run: |
          cd source
          npm run build
          
      - name: Copy blog files
        run: |
          cd source
          cp -r public/blogs dist/
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './source/dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **配置GitHub Pages**
   - 进入仓库 Settings → Pages
   - 选择 "GitHub Actions" 作为部署源

#### 方法二：手动部署

1. **构建项目**
```bash
cd source
npm run build
cp -r public/blogs dist/
```

2. **推送到gh-pages分支**
```bash
# 创建并切换到gh-pages分支
git checkout --orphan gh-pages
git rm -rf .

# 复制构建文件
cp -r source/dist/* .
cp source/dist/index.html .

# 添加CNAME文件（如果有自定义域名）
echo "yourdomain.com" > CNAME

# 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
```

### 3. 配置Vite以支持GitHub Pages

确保 `source/vite.config.ts` 包含正确的base路径：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 对于根域名
  // base: '/your-repo-name/', // 对于子路径
})
```

### 4. 构建优化检查清单

在推送前确保：

- [ ] 所有博客文件已复制到 `public/blogs/`
- [ ] 构建成功无错误
- [ ] 所有链接正常工作
- [ ] LaTeX公式渲染正常
- [ ] 响应式设计正常
- [ ] 图片路径正确

### 5. 自动化构建脚本

创建 `source/build.sh`：

```bash
#!/bin/bash

echo "🚀 开始构建..."
cd source

echo "📦 安装依赖..."
npm install

echo "🔨 构建项目..."
npm run build

echo "📋 复制博客文件..."
cp -r public/blogs dist/

echo "✅ 构建完成！"
echo "📁 构建文件位于: source/dist/"
```

### 6. 部署后验证

部署完成后：

1. 访问 `https://yourusername.github.io/your-repo-name/`
2. 测试所有博客链接
3. 验证LaTeX公式渲染
4. 检查移动端显示

### 7. 更新流程

每次更新内容后：

```bash
# 添加新博客
node create-blog.js new-post "新博客标题"

# 编辑内容后
cd source
npm run build
cp -r public/blogs dist/

# 提交更改
git add .
git commit -m "Add new blog post: new-post"
git push origin main
```

## 🔧 常见问题解决

### 404错误
- 确保仓库设置为GitHub Pages
- 检查 `base` 配置是否正确
- 确认文件已正确部署

### 博客内容不显示
- 检查 `public/blogs/` 是否包含所有.md文件
- 验证文件权限和路径

### 构建失败
- 检查TypeScript错误
- 确保所有依赖已安装
- 清理node_modules并重新安装

## 📱 持续集成

设置自动部署后，每次推送到main分支都会自动部署到GitHub Pages！
