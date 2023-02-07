import { PhysicalQuantity } from './physicalQuantity'

export class Length extends PhysicalQuantity {
  private _m: number

  constructor(l: number, unitString: string) {
    super('length')
    const unit: LengthUnits = unitString as LengthUnits
    switch (unit) {
      case LengthUnits.m:
        this._m = l
        break
      case LengthUnits.mm:
        this._m = l / 1000
        break
      case LengthUnits.in:
        this._m = l * 0.0254
        break
      case LengthUnits.ft:
        this._m = l * 0.3048
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get m() {
    return this._m
  }

  get mm() {
    return this._m * 1000
  }

  get in() {
    return this._m / 0.0254
  }
  
  get ft() {
    return this._m / 0.3048
  }

  getNumber(unit: string): number {
    switch (unit) {
      case LengthUnits.m:
        return this.m
      case LengthUnits.mm:
        return this.mm
      case LengthUnits.in:
        return this.in
      case LengthUnits.ft:
        return this.ft
      default:
        return -1
    }
  }
}

export enum LengthUnits {
  m = 'm',
  mm = 'mm',
  in = 'in',
  ft = 'ft',
}
