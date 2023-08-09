import { PhysicalQuantity } from './physicalQuantity'

export class VolumetricFlowrate extends PhysicalQuantity {
  private _v: number

  constructor(v: number, unitString: string) {
    super('volumetricFlowrate')
    const unit: VolumetricFlowrateUnits = unitString as VolumetricFlowrateUnits
    switch (unit) {
      case VolumetricFlowrateUnits.M3PerS:
        this._v = v
        break
      default:
        throw new Error('Unit not supported')
    }
  }

  get m3ps() {
    return this._v
  }

  getNumber(unit: string): number {
    switch (unit) {
      case VolumetricFlowrateUnits.M3PerS:
        return this.m3ps
      default:
        return -1
    }
  }
}

export enum VolumetricFlowrateUnits {
  M3PerS = 'm3/s',
}
