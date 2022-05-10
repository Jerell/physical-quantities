import { Scalar, ScalarUnits } from '../scalar'

describe('Scalar', () => {
  it('should create a Scalar from m', () => {
    const s = new Scalar(10, ScalarUnits.scalar)

    expect(s.scalar).toBe(10)
  })

  it('should have type scalar', () => {
    const s = new Scalar(10, ScalarUnits.scalar)

    expect(s.type).toBe('scalar')
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const s = new Scalar(10, ScalarUnits.scalar)

    expect(s.getNumber('-')).toBe(s.scalar)
  })
})
