import { Velocity, VelocityUnits } from '../velocity'

describe('Velocity', () => {
  it('should have type velocity', () => {
    const velocity = new Velocity(3, VelocityUnits.Mps)

    expect(velocity.type).toBe('velocity')
  })

  it('should create a Velocity from Mps', () => {
    const velocity = new Velocity(5, VelocityUnits.Mps)

    expect(velocity.mps).toBe(5)
  })
})

describe('getNumber', () => {
  it('should return the same values as the unit accessors', () => {
    const velocity = new Velocity(7, VelocityUnits.Mps)

    expect(velocity.getNumber('m/s')).toBe(velocity.mps)
  })
})
