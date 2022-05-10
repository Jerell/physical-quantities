import { Temperature, TemperatureUnits } from '../temperature'

describe('temperature', () => {
  it('should have type length', () => {
    const temp = new Temperature(1, TemperatureUnits.Kelvin)

    expect(temp.type).toBe('temperature')
  })

  it('should create a temperature from kelvin', () => {
    const temp = new Temperature(10, TemperatureUnits.Kelvin)

    expect(temp.celsius).toBe(-263.15)
    expect(temp.kelvin).toBe(10)
  })

  it('should create a temperature from celsius', () => {
    const temp = new Temperature(40, TemperatureUnits.Celsius)

    expect(temp.celsius).toBe(40)
    expect(temp.kelvin).toBe(313.15)
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const temp = new Temperature(1, TemperatureUnits.Celsius)

    expect(temp.getNumber('K')).toBe(temp.kelvin)
    expect(temp.getNumber('°C')).toBe(temp.celsius)
  })
})
