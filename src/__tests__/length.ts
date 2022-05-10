import { Length, LengthUnits } from '../length'

describe('Length', () => {
  it('should have type length', () => {
    const length = new Length(1, LengthUnits.in)

    expect(length.type).toBe('length')
  })

  it('should create a Length from m', () => {
    const length = new Length(1, LengthUnits.m)

    expect(length.m).toBe(1)
    expect(length.mm).toBe(1000)
    expect(length.in).toBeCloseTo(39.3701, 4)
  })

  it('should create a Length from mm', () => {
    const length = new Length(10, LengthUnits.mm)

    expect(length.m).toBe(0.01)
  })

  it('should create a Length from in', () => {
    const length = new Length(1, LengthUnits.in)

    expect(length.m).toBe(0.0254)
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const length = new Length(1, LengthUnits.in)

    expect(length.getNumber('m')).toBe(length.m)
    expect(length.getNumber('mm')).toBe(length.mm)
    expect(length.getNumber('in')).toBe(length.in)
  })
})
