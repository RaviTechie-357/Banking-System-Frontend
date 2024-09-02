export interface Transaction {
    id?: number;
    userId: number;
    amount: number;
    date: Date;
    type: string; 
    description: any;
// e.g., "deposit", "withdrawal"
  }