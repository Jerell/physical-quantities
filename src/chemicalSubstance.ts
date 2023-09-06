import { PhysicalQuantity } from './physicalQuantity'

export class ChemicalSubstance extends PhysicalQuantity {
  private _molFraction: number

  constructor(t: number, unitString: string) {
    super('chemicalSubstance')
    const unit: ChemicalSubstanceUnits = unitString as ChemicalSubstanceUnits
    switch (unit) {
      case ChemicalSubstanceUnits.MolFraction:
        this._molFraction = t
        break
      case ChemicalSubstanceUnits.Ppm:
        this._molFraction = t / 1_000_000
        break
      case ChemicalSubstanceUnits.Ppb:
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
      case ChemicalSubstanceUnits.MolFraction:
        return this.molFraction
      case ChemicalSubstanceUnits.Ppm:
        return this.ppm
      case ChemicalSubstanceUnits.Ppb:
        return this.ppb
      default:
        return -1
    }
  }
}

export enum ChemicalSubstanceUnits {
  MolFraction = 'mol%',
  Ppm = 'ppm',
  Ppb = 'ppb',
}
