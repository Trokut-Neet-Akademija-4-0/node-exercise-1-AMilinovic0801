import fullParts from '../models/inventoryPartsModel'
import parts from '../models/interface/partsinterface'

class getPartInventory {
  fullPartsInventory = fullParts

  getAllParts(): parts | undefined {
    console.log(this.fullPartsInventory)
    return this.fullPartsInventory
  }
}

export default new getPartInventory()
