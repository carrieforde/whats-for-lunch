import { Address } from "./address.interface";
export interface Restaurant {
  name: string;
  address: Address;
  phone: string;
  website: string;
  hours: BusinessHours[];
  photo: string;
  google_place_id: string;
}

export interface BusinessHours {
  [day: string]: OpenClose;
}

export interface OpenClose {
  open: string;
  close: string;
}
