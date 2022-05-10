import { PhysicalQuantity } from './physicalQuantity'

export class Scalar extends PhysicalQuantity {
  private _n: number

  constructor(n: number, unit: ScalarUnits) {
    super('scalar')
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

  getNumber(unit: string): number {
    switch (unit) {
      case ScalarUnits.scalar:
        return this.scalar
      default:
        return -1
    }
  }
}

export enum ScalarUnits {
  scalar = '-',
}
