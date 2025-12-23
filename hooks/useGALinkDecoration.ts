import { useEffect } from 'react'
import { getGACookie } from '../lib/analytics'

export function useGALinkDecoration(linkId: string, targetUrl?: string) {
  useEffect(() => {
    if (!targetUrl) return

    const decorateLink = () => {
      const link = document.getElementById(linkId) as HTMLAnchorElement
      if (!link) return

      const gaCookie = getGACookie()

      if (gaCookie && !link.href.includes('_ga=')) {
        const separator = link.href.includes('?') ? '&' : '?'
        link.href = `${targetUrl}${separator}_ga=${gaCookie}`
      }
    }

    decorateLink()
    const interval = setInterval(decorateLink, 1000)

    return () => clearInterval(interval)
  }, [linkId, targetUrl])
}
