import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import passport from 'passport'
import cors from 'cors'

import movieRouter from './routers/movie'
import userRouter from './routers/user'
import productRouter from './routers/product'
import variantRouter from './routers/variant'
import orderRouter from './routers/order'
import loginRouter from './routers/login'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'
import { googleStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(cors())
app.set('port', process.env.PORT || 5000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

passport.use(googleStrategy)

// Use movie router
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/variants', variantRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/google/login', loginRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
