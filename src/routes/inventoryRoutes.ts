import express, { Request, Response } from 'express'
import fullInventory from '../services/inventoryCars'
import getPartInventory from '../services/partsService'

const router = express.Router()

router.get('/cars', (req: Request, res: Response) => {
  const cars = fullInventory.getInventory()
  if (cars) {
    res.send(cars)
  } else {
    res.status(404).send('Inventory item not found')
  }
})

router.get('/parts', (req: Request, res: Response) => {
  const parts = getPartInventory.getAllParts()
  console.log(parts)
  if (parts) {
    res.send(parts)
  } else {
    res.status(404).send('Inventory item not found')
  }
})

router.get('/:id', (req: Request, res: Response) => {
  const carId = req.params.id
  const carIdNumber = parseInt(carId, 10)
  const car = fullInventory.getCarById(carIdNumber)
  if (car) {
    res.send(car)
  } else {
    res.status(404).send('Inventory item not found')
  }
})

export default router
