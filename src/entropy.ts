import { PhysicalQuantity } from './physicalQuantity'

export class Entropy extends PhysicalQuantity {
  private _jpk: number

  constructor(n: number, unit: EntropyUnits) {
    super('entropy')
    switch (unit) {
      case EntropyUnits.JPerK:
        this._jpk = n
        break
      case EntropyUnits.KJPerK:
        this._jpk = n * 1000
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get JPerK() {
    return this._jpk
  }

  get kJPerK() {
    return this._jpk / 1000
  }

  getNumber(unit: string): number {
    switch (unit) {
      case EntropyUnits.JPerK:
        return this.JPerK
      case EntropyUnits.KJPerK:
        return this.kJPerK
      default:
        return -1
    }
  }
}

export enum EntropyUnits {
  JPerK = 'J/K',
  KJPerK = 'kJ/K',
}
