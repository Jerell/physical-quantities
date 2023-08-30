import { PhysicalQuantity } from './physicalQuantity'

export class Viscosity extends PhysicalQuantity {
  private _pas: number

  constructor(n: number, unitString: string) {
    super('viscosity')
    const unit: ViscosityUnits = unitString as ViscosityUnits
    switch (unit) {
      case ViscosityUnits.Pas:
        this._pas = n
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get Pas() {
    return this._pas
  }

  get microPas() {
    return this._pas / 10 ** -6
  }

  getNumber(unit: string): number {
    switch (unit) {
      case ViscosityUnits.Pas:
        return this.Pas
      case ViscosityUnits.MicroPas:
        return this.microPas
      default:
        return -1
    }
  }
}

export enum ViscosityUnits {
  Pas = 'Pa·s',
  MicroPas = 'Pa·s, 10⁻⁶',
}
