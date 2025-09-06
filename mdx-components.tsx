import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{children}</h2>,
    p: ({ children }) => <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{children}</p>,
    code: ({ children }) => (
      <code style={{ 
        backgroundColor: '#f4f4f4', 
        padding: '0.2rem 0.4rem', 
        borderRadius: '0.25rem',
        fontFamily: 'monospace'
      }}>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre style={{
        backgroundColor: '#f4f4f4',
        padding: '1rem',
        borderRadius: '0.5rem',
        overflow: 'auto',
        marginBottom: '1rem'
      }}>
        {children}
      </pre>
    ),
    // Add any custom components here
    ...components,
  }
}