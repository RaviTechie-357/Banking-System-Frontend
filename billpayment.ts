export interface BillPayment {
date: string|number|Date;
    id?: number;
    userId: number;
    amount: number;
    billType: string;
    status: string; // e.g., "paid", "pending"
    description: any;
  }