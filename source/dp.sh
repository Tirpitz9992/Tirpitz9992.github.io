#!/bin/bash

# 一键构建部署脚本 - 直接在main分支工作
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

# 移动构建文件到根目录
echo -e "${YELLOW}📦 准备部署文件...${NC}"
cd ..

# 备份源文件
if [ ! -d ".source_backup" ]; then
    mkdir .source_backup
fi

# 移动构建文件
mv source/dist/* . 2>/dev/null || true
mv source/dist/assets . 2>/dev/null || true

# 清理旧的构建文件
rm -rf dist/ 2>/dev/null || true

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

echo -e "${GREEN}🎉 构建完成！现在可以推送到GitHub了${NC}"
echo -e "${GREEN}📍 运行: git push origin main${NC}"
