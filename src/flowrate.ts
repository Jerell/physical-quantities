export class Flowrate {
  private _kgps: number
  constructor(q: number, unit: FlowrateUnits) {
    switch (unit) {
      case FlowrateUnits.Kgps:
        this._kgps = q
        break
      case FlowrateUnits.MTPA:
        const factor = 3.15576
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
    const factor = 3.15576
    return this._kgps * factor
  }
}

export enum FlowrateUnits {
  Kgps,
  MTPA,
}
