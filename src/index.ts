// src/index.js
import express, { Express } from 'express'
import homeRoutes from './routes/homeRoutes'
import userRoutes from './routes/userRoutes'
import inventoryRoutes from './routes/inventoryRoutes'

const app: Express = express()
const port = process.env.PORT || 3000

app.use('/', homeRoutes)
app.use('/users', userRoutes)
app.use('/product-cars', inventoryRoutes)
app.use('/product-parts', inventoryRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
