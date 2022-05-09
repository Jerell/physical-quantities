import { PhysicalQuantity } from './physicalQuantity'

export class Length extends PhysicalQuantity {
  private _m: number
  public type: string = 'length'

  constructor(l: number, unit: LengthUnits) {
    super()
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
}

export enum LengthUnits {
  m = 'm',
  mm = 'mm',
  in = 'in',
}
