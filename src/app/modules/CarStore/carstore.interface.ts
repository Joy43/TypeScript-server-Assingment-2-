import { Model } from 'mongoose';
export type Tcar={
  band:string,
  model:string,
  year:string,
  price:number,
  category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';
  description:string,
  quantity:string,
  inStock:boolean

};
export type Torder={
    email:string,
    car: string; 
  quantity: number;
  totalPrice: number;
}
export interface carstorModel extends Model <Tcar>{
    isUserExists(id: string): Promise<Tcar | null>;  
}