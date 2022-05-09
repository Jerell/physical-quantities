import { PhysicalQuantity } from './physicalQuantity'

export class Scalar extends PhysicalQuantity {
  private _n: number

  constructor(n: number, unit: ScalarUnits) {
    super()
    switch (unit) {
      case ScalarUnits.scalar:
        this._n = n
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get scalar() {
    return this._n
  }
}

export enum ScalarUnits {
  scalar = '-',
}
