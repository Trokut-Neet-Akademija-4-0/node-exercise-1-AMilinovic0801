import carList from '../models/inventoryCarModel'
import Cars from '../models/interface/carsInterface'
import carDetail from '../models/interface/carDetailInterface'
import carInfo from '../models/detailedCarModel'

class fullInventory {
  fullinventory = carList
  singleCarInfo = carInfo
  getInventory(): Cars | undefined {
    return this.fullinventory
  }

  getCarById(id: number): carDetail | undefined {
    for (const car of this.singleCarInfo) {
      if (car.id === id) {
        return car
      }
    }
    return undefined
  }
}

export default new fullInventory()
