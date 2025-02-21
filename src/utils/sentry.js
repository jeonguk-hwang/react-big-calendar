import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://318ae3c1b8e2747bcab8299c12ed1e57@o1398592.ingest.us.sentry.io/4508329798795264',
  integrations: [],
  release: 'react-big-calendar',
})

// ✅ 콘솔 로그를 Sentry에 자동으로 수집하는 핸들러 추가
const captureConsoleLog = () => {
  const originalConsole = console.info

  console.info = (...args) => {
    Sentry.addBreadcrumb({
      category: 'console',
      message: args
        .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : arg))
        .join(' '),
      level: 'info',
    })

    // 원래 콘솔 로그 출력
    originalConsole.apply(console, args)
  }
}

// ✅ `console.info` 자동 수집
captureConsoleLog()

export default Sentry
