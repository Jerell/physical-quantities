import { Flowrate, FlowrateUnits } from '../flowrate'

describe('flowrate', () => {
  it('should create a flowrate from MTPA', () => {
    const flowrate = new Flowrate(4.5, FlowrateUnits.MTPA)

    expect(flowrate.kgps).toBe(0.1420092)
    expect(flowrate.MTPA).toBe(4.5)
  })

  it('should create a flowrate from kgps', () => {
    const flowrate = new Flowrate(1, FlowrateUnits.Kgps)

    expect(flowrate.kgps).toBe(1)
    expect(flowrate.MTPA).toBeCloseTo(31.688087814)
  })
})
