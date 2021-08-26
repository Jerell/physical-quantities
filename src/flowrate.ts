export class Flowrate {
  private _kgps: number
  constructor(q: number, unit: FlowrateUnits) {
    switch (unit) {
      case FlowrateUnits.Kgps:
        this._kgps = q
        break
      case FlowrateUnits.MTPA:
        const factor = 86400 * 365.25e-9
        this._kgps = q * factor
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get kgps() {
    return this._kgps
  }

  get MTPA() {
    const factor = 86400 * 365.25e-9
    return this._kgps / factor
  }
}

export enum FlowrateUnits {
  Kgps,
  MTPA,
}
