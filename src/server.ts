import express from 'express'
import session from 'express-session'
import helmet from 'helmet'

import authCofig from './lib/auth'
import router from './routes'

import logger from '@log'
import config from '@config'
import { Enviroments } from '@enums'

const app = express()

app.use(helmet())

app.use(
  session({
    secret: config.secretKey,
    cookie: {
      secure: config.env === Enviroments.PRODUCTION ? true : false
    },
    resave: false,
    saveUninitialized: true
  })
)

app.set('trust proxy', 1)

authCofig(app)

app.use('/', router)

app.listen(config.port, () => {
  logger.info(
    `Auth Server running at ${config.host}:${config.port}${config.url}`
  )
})
