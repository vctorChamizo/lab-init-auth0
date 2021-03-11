import { Router, Request, Response, NextFunction } from 'express'
import passport from 'passport'
import querystring from 'querystring'

import logger from '@log'
import config from '@config'
import { AuthError } from '@enums'

const { domain, clientID, port } = config

const authRouter = Router()

authRouter.get(
  '/login',
  passport.authenticate('auth0', {
    scope: ['openid', 'email', 'profile']
  }),
  () => {}
)

authRouter.get(
  '/callback',
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('auth0', (error, user) => {
      logger.info('Authenticating...')

      if (error) {
        return next(error)
      }

      if (!user) {
        return res.redirect(
          `${req.protocol}://${req.hostname}:${port}/auth/login`
        )
      }

      req.logIn(user, (error) => {
        if (error) {
          return next(error)
        }

        if (req.session) {
          return res.redirect(`${req.protocol}://${req.hostname}:${port}/`)
        } else {
          throw new Error(AuthError.NO_SESSION_FOUND)
        }
      })
    })(req, res, next)
  }
)

authRouter.get('/logout', (req: Request, res: Response) => {
  logger.info('Logout...')

  req.logout()

  const logoutURL = new URL(`https://${domain}/v2/logout`)
  const searchString = querystring.stringify({
    client_id: clientID,
    returnTo: `${req.protocol}://${req.hostname}:${port}`
  })

  logoutURL.search = searchString

  res.redirect(logoutURL.toString())
})

export default authRouter
