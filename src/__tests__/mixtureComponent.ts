import { MixtureComponent, MixtureComponentUnits } from '../mixtureComponent'

describe('mixtureComponent', () => {
  it('should have type mixtureComponent', () => {
    const cs = new MixtureComponent(1, MixtureComponentUnits.MolFraction)

    expect(cs.type).toBe('mixtureComponent')
  })

  it('should create a mixtureComponent from molFraction', () => {
    const cs = new MixtureComponent(0.1, MixtureComponentUnits.MolFraction)

    expect(cs.molFraction).toBe(0.1)
    expect(cs.ppm).toBe(100_000)
    expect(cs.ppb).toBe(100_000_000)
  })

  it('should create a mixtureComponent from ppm', () => {
    const cs = new MixtureComponent(20, MixtureComponentUnits.Ppm)

    expect(cs.molFraction).toBe(0.000_02)
    expect(cs.ppm).toBe(20)
    expect(cs.ppb).toBe(20_000)
  })

  it('should create a mixtureComponent from ppb', () => {
    const cs = new MixtureComponent(300, MixtureComponentUnits.Ppb)

    expect(cs.molFraction).toBe(0.000_000_3)
    expect(cs.ppm).toBe(0.3)
    expect(cs.ppb).toBe(300)
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const cs = new MixtureComponent(5, MixtureComponentUnits.Ppm)

    expect(cs.getNumber('mol%')).toBe(cs.molFraction)
    expect(cs.getNumber('ppm')).toBe(cs.ppm)
    expect(cs.getNumber('ppb')).toBe(cs.ppb)
  })
})
