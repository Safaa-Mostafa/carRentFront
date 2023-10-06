import { OrderProduct } from "./order-product";

export interface Order {
  products:Array<OrderProduct>,
  totalPrice:Number,
  userId:number
}
