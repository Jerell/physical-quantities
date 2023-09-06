import { ChemicalSubstance, ChemicalSubstanceUnits } from '../chemicalSubstance'

describe('chemicalSubstance', () => {
  it('should have type chemicalSubstance', () => {
    const cs = new ChemicalSubstance(1, ChemicalSubstanceUnits.MolFraction)

    expect(cs.type).toBe('chemicalSubstance')
  })

  it('should create a chemicalSubstance from molFraction', () => {
    const cs = new ChemicalSubstance(0.1, ChemicalSubstanceUnits.MolFraction)

    expect(cs.molFraction).toBe(0.1)
    expect(cs.ppm).toBe(100_000)
    expect(cs.ppb).toBe(100_000_000)
  })

  it('should create a chemicalSubstance from ppm', () => {
    const cs = new ChemicalSubstance(20, ChemicalSubstanceUnits.Ppm)

    expect(cs.molFraction).toBe(0.000_02)
    expect(cs.ppm).toBe(20)
    expect(cs.ppb).toBe(20_000)
  })

  it('should create a chemicalSubstance from ppb', () => {
    const cs = new ChemicalSubstance(300, ChemicalSubstanceUnits.Ppb)

    expect(cs.molFraction).toBe(0.000_000_3)
    expect(cs.ppm).toBe(0.3)
    expect(cs.ppb).toBe(300)
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const cs = new ChemicalSubstance(5, ChemicalSubstanceUnits.Ppm)

    expect(cs.getNumber('mol%')).toBe(cs.molFraction)
    expect(cs.getNumber('ppm')).toBe(cs.ppm)
    expect(cs.getNumber('ppb')).toBe(cs.ppb)
  })
})
