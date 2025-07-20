#!/bin/bash

# 博客系统构建脚本
# 使用方法: ./build.sh

set -e  # 遇到错误立即退出

echo "🚀 开始构建博客系统..."

# 进入项目目录
cd "$(dirname "$0")"

echo "📦 安装依赖..."
npm install

echo "🔍 检查TypeScript..."
npm run build --if-present

echo "🔨 构建项目..."
npm run build

echo "📋 复制博客文件到构建目录..."
if [ -d "public/blogs" ]; then
    cp -r public/blogs dist/
    echo "✅ 博客文件已复制"
else
    echo "⚠️  未找到博客文件目录"
fi

echo "📊 构建统计:"
echo "   构建目录: $(pwd)/dist"
echo "   文件大小: $(du -sh dist/ | cut -f1)"
echo "   文件数量: $(find dist/ -type f | wc -l)"

echo "✅ 构建完成！"
echo ""
echo "📁 构建文件已准备好部署到GitHub Pages"
echo "   下一步: 将 dist/ 目录的内容推送到 gh-pages 分支"
echo "   或使用GitHub Actions自动部署"
