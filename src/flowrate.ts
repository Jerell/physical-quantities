import { PhysicalQuantity } from './physicalQuantity'

export class Flowrate extends PhysicalQuantity {
  private _kgps: number

  constructor(q: number, unitString: string) {
    super('flowrate')
    const unit: FlowrateUnits = <FlowrateUnits>unitString
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

  getNumber(unit: string): number {
    switch (unit) {
      case FlowrateUnits.Kgps:
        return this.kgps
      case FlowrateUnits.MTPA:
        return this.MTPA
      default:
        return -1
    }
  }
}

export enum FlowrateUnits {
  Kgps = 'kg/s',
  MTPA = 'MTPA',
}
