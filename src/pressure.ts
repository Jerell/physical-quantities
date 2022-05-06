import { PhysicalQuantity } from './physicalQuantity'

export class Pressure extends PhysicalQuantity {
  private _pascal: number

  constructor(p: number, unit: PressureUnits) {
    super()
    switch (unit) {
      case PressureUnits.Pascal:
        this._pascal = p
        break
      case PressureUnits.Bara:
        this._pascal = p * 1e5
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get pascal() {
    return this._pascal
  }

  get bara() {
    return this._pascal * 1e-5
  }
}

export enum PressureUnits {
  Pascal = 'Pa',
  Bara = 'Bara',
}
