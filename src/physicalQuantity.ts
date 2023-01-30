export abstract class PhysicalQuantity {
  public type: string

  constructor(quantityType: string) {
    this.type = quantityType
  }

   getNumber(unit: string): number {
    throw new Error('not implemented')
  }
}
