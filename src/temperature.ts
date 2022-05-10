import { PhysicalQuantity } from './physicalQuantity'

export class Temperature extends PhysicalQuantity {
  private _kelvin: number

  constructor(t: number, unit: TemperatureUnits) {
    super('temperature')
    switch (unit) {
      case TemperatureUnits.Celsius:
        this._kelvin = t + 273.15
        break
      case TemperatureUnits.Kelvin:
        this._kelvin = t
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get celsius(): number {
    return this.kelvin - 273.15
  }

  get kelvin(): number {
    return this._kelvin
  }

  getNumber(unit: string): number {
    switch (unit) {
      case TemperatureUnits.Kelvin:
        return this.kelvin
      case TemperatureUnits.Celsius:
        return this.celsius
      default:
        return -1
    }
  }
}

export enum TemperatureUnits {
  Kelvin = 'K',
  Celsius = '°C',
}
