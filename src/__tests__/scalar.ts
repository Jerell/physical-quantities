import { Scalar, ScalarUnits } from '../scalar'

describe('Scalar', () => {
  it('should create a Scalar from m', () => {
    const s = new Scalar(10, ScalarUnits.scalar)

    expect(s.scalar).toBe(10)
  })
})
