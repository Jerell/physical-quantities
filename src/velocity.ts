import { PhysicalQuantity } from './physicalQuantity'

export class Velocity extends PhysicalQuantity {
  private _metresPerSecond: number

  constructor(v: number, unitString: string) {
    super('velocity')
    const unit: VelocityUnits = unitString as VelocityUnits
    switch (unit) {
      case VelocityUnits.Mps:
        this._metresPerSecond = v
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get mps() {
    return this._metresPerSecond
  }

  getNumber(unit: string): number {
    switch (unit) {
      case VelocityUnits.Mps:
        return this.mps
      default:
        return -1
    }
  }
}

export enum VelocityUnits {
  Mps = 'm/s',
}
