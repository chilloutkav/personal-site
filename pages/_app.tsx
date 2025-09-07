import '../styles/global.css'
import { AppProps } from 'next/app'

/**
 * Main App component for Next.js
 * 
 * Global CSS imports and app-level configuration.
 * Manual CSS stylesheet and FOUC override script are handled
 * in _document.tsx to avoid Next.js warnings.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}