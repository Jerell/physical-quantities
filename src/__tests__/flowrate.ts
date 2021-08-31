import { Flowrate, FlowrateUnits } from '../flowrate'

describe('flowrate', () => {
  it('should create a flowrate from MTPA', () => {
    const flowrate = new Flowrate(1, FlowrateUnits.MTPA)

    expect(flowrate.kgps).toBeCloseTo(31.6880878)
    expect(flowrate.MTPA).toBe(1)
  })

  it('should create a flowrate from kgps', () => {
    const flowrate = new Flowrate(1, FlowrateUnits.Kgps)

    expect(flowrate.kgps).toBe(1)
    expect(flowrate.MTPA).toBeCloseTo(0.0315576)
  })
})
