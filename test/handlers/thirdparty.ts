import { rest } from 'msw'

const handlers = [
  rest.get('https://example.com', (req, res, ctx) => {
    return res(ctx.json({ foo: 'bar' }))
  })
]

export { handlers }
