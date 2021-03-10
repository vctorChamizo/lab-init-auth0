import dotenv from 'dotenv'
dotenv.config()

import { Enviroments } from '@enums'

if (process.env.NODE_ENV === Enviroments.SANDBOX) {
  dotenv.config({ path: '.env.sandbox' })
} else if (process.env.NODE_ENV === Enviroments.DEVELOPMENT) {
  dotenv.config({ path: '.env.dev' })
} else if (process.env.NODE_ENV === Enviroments.PRODUCTION) {
  dotenv.config()
}

const config = {
  env: process.env.NODE_ENV || 'sandbox',
  host: process.env.API_HOST || 'http://localhost',
  port: Number(process.env.PORT) || 3000,
  url: process.env.API_URL || '/',
  secretKey: process.env.API_SECRET_KEY || 'Secret',
  domain: process.env.AUTH0_DOMAIN as string,
  clientID: process.env.AUTH0_CLIENT_ID as string,
  clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
  callbackURL:
    process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/auth/callback',
  authPrefix: process.env.AUTH_PREFIX as string
}

export default config
