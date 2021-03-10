import { Application } from 'express'
import passport from 'passport'

import { auth0Strategy } from './strategy'

passport.serializeUser((user: Express.User, done) => {
  done(null, user)
})

passport.deserializeUser((user: Express.User, done) => {
  done(null, user)
})

passport.use(auth0Strategy)

const authCofig = (app: Application) => {
  app.use(passport.initialize())
  app.use(passport.session())
}

export default authCofig
