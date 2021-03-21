import { Bike } from "./bike";

export class Line {  
  constructor(bike: Bike, quantity: number, coupon = "") {
      this.bike = bike;
      this.quantity = quantity;
      this.coupon = coupon;
  }
  public bike: Bike;
  public quantity: number;
  public coupon: string;    
}