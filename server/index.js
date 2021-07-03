const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const api = require('./api')

const koa = new Koa()
const app = new Router()
const port = process.env.PORT || 3000


app.get('/something/:something', async ctx => {
  try {
    const results = await api.getSomething(ctx.params.something)
    ctx.status = 200
    ctx.body = results
  } catch (error) {
    ctx.status = 404
    console.error('Error fetching folders: ', error)
  }
})

koa.use(bodyParser())
koa.use(cors({
  origin: () => {
    if (process.env.NODE_ENV === 'development') {
      return '*'
    }
    return false
  },
  allowMethods: ['GET', 'POST', 'DELETE']
}))
koa.use(app.routes())
koa.listen(port)
