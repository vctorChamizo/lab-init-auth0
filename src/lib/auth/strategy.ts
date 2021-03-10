import Auth0Strategy from 'passport-auth0'

import config from '@config'

const { domain, clientID, clientSecret, callbackURL } = config

const optionsAuth0Strategy = {
  domain,
  clientID,
  clientSecret,
  callbackURL
}

/**
 * @param {string} accessToken - accessToken is the token to call Auth0 API (not needed in the most cases)
 * @param {string} refreshToken - special kind of token used to obtain a renewed access token
 * @param {object} extraParams - extraParams.id_token has the JSON Web Token
 * @param {object} profile - profile has all the information from the user
 */
export const auth0Strategy = new Auth0Strategy(
  optionsAuth0Strategy,
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile, { accessToken, refreshToken, extraParams })
  }
)
