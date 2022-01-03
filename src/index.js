import { UAParser } from 'ua-parser-js'
import { CanvasMaxSize } from './canvas-max-size'

// TODO: consider iPadOS
// Refs:
// 1. https://github.com/jhildenbiddle/canvas-size#test-results
// 2. https://html2canvas.hertzen.com/faq.html
export function getCanvasMaxSize() {
  const uaParser = new UAParser()
  const { browser, os } = uaParser.getResult()
  const { name: browserName, version: browserVersion } = browser
  const { name: osName, version: osVersion } = os

  const isDesktop = uaParser.getDevice().type === undefined

  if (isDesktop) {
    if (browserName.includes('Chrom')) {
      return parseInt(browserVersion) >= 73 ? CanvasMaxSize.Desktop.Chrome['73+'] : CanvasMaxSize.Desktop.Chrome['72-']
    } else if (browserName.includes('Edge')) {
      return parseInt(browserVersion) >= 80 ? CanvasMaxSize.Desktop.Edge['80+'] : CanvasMaxSize.Desktop.Edge['13-']
    } else if (browserName.includes('Safari')) {
      return CanvasMaxSize.Desktop.Safari
    } else if (browserName.includes('Firefox')) {
      return CanvasMaxSize.Desktop.Firefox
    }
    return CanvasMaxSize.Desktop.other
  } else if (osName.includes('iOS')) {
    return CanvasMaxSize.iOS
  } else if (osName.includes('Android')) {
    if (parseInt(browserVersion) >= 91) {
      const majorVersion = parseInt(osVersion)
      return majorVersion >= 8 ? CanvasMaxSize.Android['91']['8+'] : CanvasMaxSize.Android['91'][majorVersion]
    } else {
      const majorVersion = parseInt(osVersion)
      return majorVersion >= 7 ? CanvasMaxSize.Android['68']['7+'] : CanvasMaxSize.Android['68'][majorVersion]
    }
  }

  return CanvasMaxSize.other
}
