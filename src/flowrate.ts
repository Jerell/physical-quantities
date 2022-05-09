import { PhysicalQuantity } from './physicalQuantity'

export class Flowrate extends PhysicalQuantity {
  private _kgps: number
  public type: string = 'flowrate'

  constructor(q: number, unit: FlowrateUnits) {
    super()
    switch (unit) {
      case FlowrateUnits.Kgps:
        this._kgps = q
        break
      case FlowrateUnits.MTPA:
        const factor = 0.0315576
        this._kgps = q / factor
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get kgps() {
    return this._kgps
  }

  get MTPA() {
    const factor = 0.0315576
    return this._kgps * factor
  }
}

export enum FlowrateUnits {
  Kgps = 'kg/s',
  MTPA = 'MTPA',
}
