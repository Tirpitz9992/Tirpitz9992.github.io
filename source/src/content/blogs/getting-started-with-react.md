# React入门指南

React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发和维护。它采用组件化的开发方式，让开发者能够构建可复用的 UI 组件。

## 什么是React？

React 是一个**声明式**、**高效**且**灵活**的 JavaScript 库，用于构建用户界面。它让你可以通过组合组件来构建复杂的 UI。

## 核心概念

### 1. 组件（Components）

React 应用由组件构成，组件可以是类组件或函数组件：

```javascript
// 函数组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 类组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 2. JSX语法

JSX 是 JavaScript 的语法扩展，它让你可以在 JavaScript 中编写类似 HTML 的代码：

```javascript
const element = <h1>Hello, world!</h1>;
```

### 3. 状态和生命周期

组件可以有内部状态（state）：

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

### 4. Hooks（钩子）

在函数组件中使用状态和生命周期：

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## 开始使用

### 安装

使用 Create React App 快速开始：

```bash
npx create-react-app my-app
cd my-app
npm start
```

### 项目结构

```
my-app/
├── README.md
├── node_modules/
├── package.json
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

## 最佳实践

1. **组件拆分**：将大型组件拆分为小型、可复用的组件
2. **状态提升**：将共享状态提升到最近的共同父组件
3. **使用PropTypes**：为组件添加类型检查
4. **使用React DevTools**：调试React应用

## 总结

React 提供了强大的工具来构建现代化的 Web 应用。通过组件化开发、虚拟 DOM 和单向数据流，React 让构建复杂的用户界面变得更加简单和高效。

---

*继续学习：可以查看官方文档 https://react.dev/*
