import { http, HttpResponse } from 'msw'

const handlers = [
  http.get('https://example.com', () => {
    return HttpResponse.json({ foo: 'bar' })
  })
]

export { handlers }
