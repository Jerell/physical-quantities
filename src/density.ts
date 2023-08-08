import { PhysicalQuantity } from './physicalQuantity'

export class Density extends PhysicalQuantity {
  private _kgpm3: number

  constructor(d: number, unitString: string) {
    super('density')
    const unit: DensityUnits = unitString as DensityUnits
    switch (unit) {
      case DensityUnits.KgPerM3:
        this._kgpm3 = d
        break
      case DensityUnits.LbPerFt3:
        this._kgpm3 = d / 16.0185
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get KgPerM3() {
    return this._kgpm3
  }

  get LbPerFt3() {
    return this._kgpm3 * 16.0185
  }

  getNumber(unit: string): number {
    switch (unit) {
      case DensityUnits.KgPerM3:
        return this.KgPerM3
      case DensityUnits.LbPerFt3:
        return this.LbPerFt3
      default:
        return -1
    }
  }
}

export enum DensityUnits {
  KgPerM3 = 'kg/m3',
  LbPerFt3 = 'lb/ft3',
}
