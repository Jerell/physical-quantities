import { PhysicalQuantity } from './physicalQuantity'

export class MixtureComponent extends PhysicalQuantity {
  private _molFraction: number

  constructor(t: number, unitString: string) {
    super('mixtureComponent')
    const unit: MixtureComponentUnits = unitString as MixtureComponentUnits
    switch (unit) {
      case MixtureComponentUnits.MolFraction:
        this._molFraction = t
        break
      case MixtureComponentUnits.Ppm:
        this._molFraction = t / 1_000_000
        break
      case MixtureComponentUnits.Ppb:
        this._molFraction = t / 1_000_000_000
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get molFraction(): number {
    return this._molFraction
  }

  get ppm(): number {
    return this._molFraction * 1_000_000
  }

  get ppb(): number {
    return this._molFraction * 1_000_000_000
  }

  getNumber(unit: string): number {
    switch (unit) {
      case MixtureComponentUnits.MolFraction:
        return this.molFraction
      case MixtureComponentUnits.Ppm:
        return this.ppm
      case MixtureComponentUnits.Ppb:
        return this.ppb
      default:
        return -1
    }
  }
}

export enum MixtureComponentUnits {
  MolFraction = 'molFraction',
  Ppm = 'ppm',
  Ppb = 'ppb',
}
