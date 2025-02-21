import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://318ae3c1b8e2747bcab8299c12ed1e57@o1398592.ingest.us.sentry.io/4508329798795264',
  integrations: [],
  release: 'react-big-calendar',
  debug: true, // 디버깅 활성화
  beforeSend(event) {
    // 특정 이벤트를 무시하는 로직이 있는지 확인
    if (event.message && event.message.includes("SomeIgnoredError")) {
      return null; // 이러면 이벤트가 폐기됨
    }
    return event;
  },
  sampleRate: 1.0, // 100% 전송
})

export default Sentry
