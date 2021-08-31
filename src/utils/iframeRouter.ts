import { PMessage, Fn } from '@/constant/interface'

let queue: Fn[] = []
let isIframeReady = false

if (window.top === window) {
  window.addEventListener('message', event => {
    if (event.data.type === 'iframeReady') {
      isIframeReady = true
      const iframe = document.querySelector('iframe')
      if (iframe && iframe.contentDocument) {
        const style = document.createElement('style')
        style.textContent = `.demo-nav__back { display: none; }`
        iframe.contentDocument.head.appendChild(style)
        queue.forEach(callback => callback())
        queue = []
      }
    }
  })
}

export function iframeReady(callback: Fn): void {
  if (isIframeReady) {
    callback()
  } else {
    queue.push(callback)
  }
}

export function postMessageToChild(
  message: PMessage,
  targetOrigin = '*'
): void {
  const iframe = document.querySelector('iframe')
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(message, targetOrigin)
  }
}
