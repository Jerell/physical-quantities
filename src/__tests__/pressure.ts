import { Pressure, PressureUnits } from '../pressure'

describe('pressure', () => {
  it('should have type pressure', () => {
    const pressure = new Pressure(10, PressureUnits.Pascal)

    expect(pressure.type).toBe('pressure')
  })

  it('should create a pressure from Pascal', () => {
    const pressure = new Pressure(10, PressureUnits.Pascal)

    expect(pressure.pascal).toBe(10)
    expect(pressure.bara).toBe(10e-5)
  })

  it('should create a pressure from Bara', () => {
    const pressure = new Pressure(1, PressureUnits.Bara)

    expect(pressure.pascal).toBe(100000)
    expect(pressure.bara).toBe(1)
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const pressure = new Pressure(10, PressureUnits.Pascal)

    expect(pressure.getNumber('Pa')).toBe(pressure.pascal)
    expect(pressure.getNumber('bara')).toBe(pressure.bara)
  })
})
