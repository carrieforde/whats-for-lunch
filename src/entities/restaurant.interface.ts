export interface Restaurant {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  hours: {
    [key: string]: {
      open: string;
      close: string;
    };
  }[];
  photo: string;
}
