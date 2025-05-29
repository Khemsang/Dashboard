

export type OrderStatus = 'Pending' | 'Cancelled' | 'Shipped';
export type ConfirmationAction = 'Confirm Order' | 'Confirmed';

export interface Order {
  customer: string;
  email: string;
  product: string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  confirmation?: ConfirmationAction;
}

export const orderData: Order[] = [
  {
    customer: 'Musharof Chowdhury',
    email: 'musharof@gmail.com',
    product: 'Apple Macbook Pro M1 8/256 GB',
    orderNumber: '#WE234343',
    date: '25 Dec 2024',
    status: 'Pending',
    confirmation: 'Confirm Order',
  },
  {
    customer: 'Shafiq Hammad',
    email: 'shafiq@gmail.com',
    product: 'iPhone 13 Pro Max 4/256 GB',
    orderNumber: '#WE234343',
    date: '25 Dec 2024',
    status: 'Pending',
    confirmation: 'Confirm Order',
  },
  {
    customer: 'Naimur Rahman',
    email: 'naim@gmail.com',
    product: 'Apple watch series 7',
    orderNumber: '#WE234343',
    date: '25 Dec 2024',
    status: 'Cancelled',
  },
  {
    customer: 'Jhon Smith',
    email: 'smith@gmail.com',
    product: 'Apple Macbook air M1 8/256 GB',
    orderNumber: '#WE234343',
    date: '25 Dec 2024',
    status: 'Shipped',
  },
];
