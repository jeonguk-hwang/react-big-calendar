import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://318ae3c1b8e2747bcab8299c12ed1e57@o1398592.ingest.us.sentry.io/4508329798795264',
  integrations: [],
  release: 'react-big-calendar',
  sampleRate: 1.0, // 100% 전송
})

export default Sentry
