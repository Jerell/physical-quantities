export abstract class PhysicalQuantity {
  public type: string

  constructor(quantityType: string) {
    this.type = quantityType
  }

   abstract getNumber(unit: string): number;
}
