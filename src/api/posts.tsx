import type { Post } from '../context/types';
import React, { useEffect, useState } from 'react';

const mockPosts: Post[] = [
  {
    id: 1,
    title: "First Post Title",
    description: "This is a short description for the post list view",
    body: `This is a much longer post content that will be shown on the detailed page.

Welcome to the first post! In this article, we will explore the journey of building a modern web application using React. We'll cover everything from setting up your development environment to deploying your app to production.

## Getting Started

Before you begin, make sure you have Node.js and npm installed. You can download them from the official website. Once installed, create a new React project using Create React App:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Project Structure

A well-organized project structure is crucial for maintainability. Consider the following structure:

- \`src/components\`: Reusable UI components
- \`src/pages\`: Page-level components
- \`src/api\`: API calls and data fetching logic
- \`src/context\`: Context providers for state management

## Writing Components

React components can be written as functions or classes. Functional components are now preferred due to hooks:

\`\`\`tsx

const HelloWorld: React.FC = () => {
  return <h1>Hello, World!</h1>;
};
\`\`\`

## State Management

For simple state, use the \`useState\` hook. For global state, consider Context API or libraries like Redux.

## Fetching Data

Use the \`useEffect\` hook to fetch data from APIs:

\`\`\`tsx

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
};
\`\`\`

## Deployment

Once your app is ready, deploy it using Vercel, Netlify, or GitHub Pages.

## Conclusion

Building a React app is a rewarding experience. With the right tools and structure, you can create scalable and maintainable applications. Happy coding!
`
  },
  {
    id: 2,
    title: "Understanding TypeScript with React",
    description: "A comprehensive guide to using TypeScript in React applications",
    body: `# Understanding TypeScript with React

## Introduction

TypeScript has become an essential tool in modern React development. Let's explore how to leverage its power effectively.

## Type Safety Benefits

TypeScript provides several advantages in React applications:

- Catch errors during development
- Better IDE support
- Enhanced code documentation
- Improved maintainability

## Common Patterns

### Props Interface

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return <button className={variant} onClick={onClick}>{label}</button>;
};
\`\`\`

## Best Practices

1. Always define prop interfaces
2. Use strict mode
3. Avoid using 'any'
4. Leverage union types

## Conclusion

TypeScript makes React development more robust and maintainable. Start using it in your next project!`
  },
  {
    id: 3,
    title: "CSS-in-JS Solutions for React",
    description: "Comparing popular CSS-in-JS libraries for React applications",
    body: `# CSS-in-JS Solutions for React

## Introduction

Modern React applications often need sophisticated styling solutions. Let's explore CSS-in-JS approaches.

## Popular Libraries

### Styled Components

\`\`\`typescript
import styled from 'styled-components';

const Button = styled.button\`
  background: \${props => props.primary ? 'blue' : 'white'};
  color: \${props => props.primary ? 'white' : 'black'};
  padding: 10px 20px;
  border-radius: 4px;
\`;
\`\`\`

## Comparison

| Library | Bundle Size | Runtime Cost | DX |
|---------|------------|--------------|-----|
| Styled Components | Medium | Low | Excellent |
| Emotion | Small | Low | Great |
| CSS Modules | None | None | Good |

## Best Practices

1. Use consistent naming
2. Avoid nested selectors
3. Keep components small
4. Utilize theme providers

## Performance Tips

- Use proper production builds
- Implement code splitting
- Optimize bundle size

Happy styling!`
  },
  {
    id: 4,
    title: "State Management in React",
    description: "Modern approaches to managing state in React applications",
    body: `# State Management in React

## Introduction

Managing state effectively is crucial for building scalable React applications. Let's explore different approaches and best practices.

## Built-in Solutions

### useState Hook

The most basic way to manage state in functional components:

\`\`\`typescript
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};
\`\`\`

### useReducer Hook

For more complex state logic:

\`\`\`typescript
type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
  }
};
\`\`\`

## External Solutions

### Popular Libraries

1. Redux
2. MobX
3. Zustand
4. Jotai

## Best Practices

- Keep state as local as possible
- Use context sparingly
- Consider performance implications
- Document state shape

Happy coding!`
  },
  {
    id: 5,
    title: "Testing React Applications",
    description: "Complete guide to testing React components and hooks",
    body: `# Testing React Applications

## Introduction

Testing is crucial for maintaining a reliable React application. Let's explore different testing approaches.

## Types of Tests

### Unit Tests

Testing individual components in isolation:

\`\`\`typescript
import { render, fireEvent } from '@testing-library/react';

test('button click increments counter', () => {
  const { getByText } = render(<Counter />);
  const button = getByText(/count: 0/i);
  fireEvent.click(button);
  expect(getByText(/count: 1/i)).toBeInTheDocument();
});
\`\`\`

### Integration Tests

Testing component interactions:

\`\`\`typescript
test('form submission', async () => {
  const { getByRole, findByText } = render(<Form />);
  fireEvent.click(getByRole('button'));
  expect(await findByText(/submitted/i)).toBeInTheDocument();
});
\`\`\`

## Testing Libraries

| Library | Purpose | Popularity |
|---------|---------|------------|
| Jest | Test Runner | Very High |
| RTL | Component Testing | High |
| Cypress | E2E Testing | High |

## Best Practices

1. Test behavior, not implementation
2. Use meaningful assertions
3. Keep tests simple
4. Follow AAA pattern

Happy testing!`
  },
  {
    id: 6,
    title: "React Performance Optimization",
    description: "Tips and tricks for optimizing React application performance",
    body: `# React Performance Optimization

## Introduction

Performance optimization is crucial for delivering a great user experience. Let's explore various techniques.

## Common Issues

### Unnecessary Renders

Use React.memo for expensive components:

\`\`\`typescript
const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return (
    <div>
      {/* Complex rendering logic */}
    </div>
  );
});
\`\`\`

### Code Splitting

Use lazy loading for routes:

\`\`\`typescript
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

## Monitoring Tools

- React DevTools
- Lighthouse
- Web Vitals

## Optimization Checklist

1. Implement virtualization for long lists
2. Use proper key props
3. Optimize images
4. Minimize bundle size

## Measuring Performance

\`\`\`typescript
import { Profiler } from 'react';

<Profiler id="MyComponent" onRender={(id, phase, actualDuration) => {
  console.log(\`\${id} took \${actualDuration}ms to \${phase}\`);
}}>
  <MyComponent />
</Profiler>
\`\`\`

Happy optimizing!`
  }
];

const fetchPosts = async (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPosts);
    }, 500);
  });
};

const fetchPostById = async (id: string | number): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = mockPosts.find(p => String(p.id) === String(id));
      if (post) {
        resolve(post);
      } else {
        reject(new Error('Post not found'));
      }
    }, 500);
  });
};

export { fetchPosts, fetchPostById };