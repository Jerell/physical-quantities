import { Density, DensityUnits } from '../density'

describe('density', () => {
  it('should have type density', () => {
    const density = new Density(1, DensityUnits.KgPerM3)

    expect(density.type).toBe('density')
  })

  it('should create a density from kg/m3', () => {
    const density = new Density(1, DensityUnits.KgPerM3)

    expect(density.LbPerFt3).toBe(16.0185)
    expect(density.KgPerM3).toBe(1)
  })

  it('should create a density from lb/ft3', () => {
    const density = new Density(1, DensityUnits.KgPerM3)

    expect(density.LbPerFt3).toBe(1)
    expect(density.KgPerM3).toBe(1 / 16.0185)
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const density = new Density(1, DensityUnits.KgPerM3)

    expect(density.getNumber('kg/m3')).toBe(density.KgPerM3)
    expect(density.getNumber('lb/ft3')).toBe(density.LbPerFt3)
  })
})
