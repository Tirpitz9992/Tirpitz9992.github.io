#!/bin/bash

# 一键构建部署脚本 - 将构建文件移动到根目录
# 使用方法: ./source/dp.sh [commit-message]

set -e

# 默认提交信息
COMMIT_MSG=${1:-"Update blog content"}

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}🚀 开始构建博客系统...${NC}"

# 进入source目录
cd "$(dirname "$0")"

# 检查依赖
echo -e "${YELLOW}📦 检查依赖...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 安装依赖...${NC}"
    npm install
fi

# 构建项目
echo -e "${YELLOW}🔨 构建项目...${NC}"
npm run build

# 复制博客文件
echo -e "${YELLOW}📋 复制博客文件...${NC}"
cp -r public/blogs dist/ 2>/dev/null || echo -e "${YELLOW}⚠️  无博客文件需要复制${NC}"

# 检查构建是否成功
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ 构建失败，未找到dist目录${NC}"
    exit 1
fi

# 移动到根目录
echo -e "${YELLOW}📦 将构建文件移动到根目录...${NC}"
cd ..

# 备份源文件（可选）
if [ ! -d ".source_backup" ]; then
    mkdir .source_backup
    cp -r source .source_backup/source-$(date +%Y%m%d-%H%M%S)
fi

# 清理旧的构建文件（保留source目录）
echo -e "${YELLOW}🧹 清理旧的构建文件...${NC}"
find . -maxdepth 1 -type f -name "*.html" -delete 2>/dev/null || true
find . -maxdepth 1 -type d -name "assets" -exec rm -rf {} + 2>/dev/null || true
find . -maxdepth 1 -type d -name "blogs" -exec rm -rf {} + 2>/dev/null || true

# 复制新的构建文件到根目录
echo -e "${YELLOW}📤 复制新的构建文件...${NC}"
cp -r source/dist/* .

# 确保index.html存在
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ 构建失败，未找到index.html${NC}"
    exit 1
fi

# 添加.gitignore（确保source目录不被提交）
cat > .gitignore << EOF
# 源文件
source/node_modules/
source/dist/
source/.vite/
*.log

# 开发文件
.vscode/
.idea/
*.swp
*.swo

# 系统文件
.DS_Store
Thumbs.db
EOF

# 添加所有文件到git
echo -e "${YELLOW}📤 准备提交...${NC}"
git add .

# 检查是否有更改
if git diff --staged --quiet; then
    echo -e "${YELLOW}ℹ️  没有新的更改${NC}"
else
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✅ 提交完成: $COMMIT_MSG${NC}"
fi

echo -e "${GREEN}🎉 构建完成！文件已准备好部署到GitHub Pages${NC}"
echo -e "${GREEN}📍 下一步: git push origin main${NC}"
echo -e "${GREEN}🔗 访问: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | tr '[:upper:]' '[:lower:]')${NC}"
