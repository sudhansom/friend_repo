import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy } from 'passport-jwt'
import UserService from '../services/user'

//const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  async (parsedToken: any, googleID: any, done: any) => {
    console.log('parsed token', parsedToken)
    const user = await UserService.findOneOrCreate(parsedToken.payload)
    //done method always accpets two parameters, error and data to be passed
    done(null, user)
  }
)
