export function getGACookie(): string | undefined {
  if (typeof document === 'undefined') {
    return undefined
  }

  return document.cookie
    .split('; ')
    .find(row => row.startsWith('_ga='))
    ?.split('=')[1]
}

export function decorateUrlWithGA(url: string, gaCookie?: string): string {
  const cookie = gaCookie || getGACookie()

  if (!cookie) {
    return url
  }

  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}_ga=${cookie}`
}
