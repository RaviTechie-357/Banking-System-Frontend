export interface Account {

    id?: number; // Optional, if ID is auto-generated
    userId: number;
    accountNumber: string;
    balance: string;
    accountType: string;
    ifscCode: string;
    address?: string;
}
    export class AccountImpl implements Account {
        constructor(
          public id: number,
          public userId: number,
          public accountNumber: string,
          public balance: string,
          public accountType: string,
          public ifscCode: string,
          public address?: string
        ) {}
}
