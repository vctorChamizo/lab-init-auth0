import { Router, Request, Response } from 'express'

const userRouter = Router()

userRouter.use('/', (req: Request, res: Response) => {
  const { user } = req
  return user ? res.json({ user }) : res.redirect('/')
})

export default userRouter
