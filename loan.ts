// src/app/models/loan.model.ts
export class Loan {
    loanId: number;
    userId: number;
    loanType: string;
    loanAmount: number;
    interestRate: number;
    loanStatus: string;
    repaymentSchedule: string;
  
    constructor(
      loanId: number,
      userId: number,
      loanType: string,
      loanAmount: number,
      interestRate: number,
      loanStatus: string,
      repaymentSchedule: string
    ) {
      this.loanId = loanId;
      this.userId = userId;
      this.loanType = loanType;
      this.loanAmount = loanAmount;
      this.interestRate = interestRate;
      this.loanStatus = loanStatus;
      this.repaymentSchedule = repaymentSchedule;
    }
  }
  