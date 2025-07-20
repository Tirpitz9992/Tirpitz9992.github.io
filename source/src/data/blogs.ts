export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  content?: string;
}

// 博客文章列表
export const blogPosts: BlogPost[] = [
  {
    id: "latex-rendering-demo",
    title: "测试博客：LaTeX渲染示例",
    date: "2024-07-18",
    excerpt: "这是一个测试博客文章，用于演示LaTeX数学公式的渲染效果。包含行内公式 $E=mc^2$ 和块级公式。",
    readTime: "3分钟阅读",
    tags: ["LaTeX", "数学公式", "测试"]
  },
  {
    id: "getting-started-with-react",
    title: "React入门指南",
    date: "2024-07-19",
    excerpt: "学习React基础知识，包括组件、状态管理和生命周期。适合初学者的完整教程。",
    readTime: "5分钟阅读",
    tags: ["React", "JavaScript", "前端开发"]
  }
];

// 获取所有博客文章
export const getAllBlogs = (): BlogPost[] => {
  return blogPosts;
};

// 根据ID获取博客文章
export const getBlogById = (id: string): BlogPost | undefined => {
  return blogPosts.find(blog => blog.id === id);
};

// 根据标签筛选博客
export const getBlogsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(blog => blog.tags.includes(tag));
};

// 获取所有标签
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.forEach(blog => {
    blog.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
};
