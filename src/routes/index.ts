import { Router, Request, Response } from 'express'

import userRouter from './user'
import authRouter from './auth'

const router = Router()

router.use('/user', userRouter)
router.use('/auth', authRouter)

router.use('/', (req: Request, res: Response) => {
  return req?.user
    ? res.json({ status: 'Ready auth service' })
    : res.json({ status: 'No ready auth service' })
})

export default router
