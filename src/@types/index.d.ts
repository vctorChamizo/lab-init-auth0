export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {}
  }
  namespace Express {
    interface Request {
      User: any
    }
  }
}

// declare module 'express-session' {
//   export interface SessionData {
//     returnTo: any
//   }
// }
