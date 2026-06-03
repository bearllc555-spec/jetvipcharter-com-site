import type { MouseEvent } from 'react'

/** Logo / Home: scroll to top and drop any hash from the URL. */
export function goHome(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  const url = window.location.pathname + window.location.search
  window.history.replaceState(null, '', url)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
