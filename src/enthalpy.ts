import { PhysicalQuantity } from './physicalQuantity'

export class Enthalpy extends PhysicalQuantity {
  private _jpkg: number

  constructor(n: number, unit: EnthalpyUnits) {
    super('enthalpy')
    switch (unit) {
      case EnthalpyUnits.JPerKg:
        this._jpkg = n
        break
      case EnthalpyUnits.KJPerKg:
        this._jpkg = n * 1000
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get JPerKg() {
    return this._jpkg
  }

  get kJPerKg() {
    return this._jpkg / 1000
  }

  getNumber(unit: string): number {
    switch (unit) {
      case EnthalpyUnits.JPerKg:
        return this.JPerKg
      case EnthalpyUnits.KJPerKg:
        return this.kJPerKg
      default:
        return -1
    }
  }
}

export enum EnthalpyUnits {
  KJPerKg = 'kJ/kg',
  JPerKg = 'J/kg',
}
