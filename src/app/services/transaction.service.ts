import { Injectable, signal } from '@angular/core';
import { ITransaction, TCreateTransaction } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class Transactions {
  readonly transactionList = signal<ITransaction[]>([]);

  getTransactions(): ITransaction[] {
    return this.transactionList();
  }

  addTransaction(transactionData: TCreateTransaction): void {
    const newTransaction = { ...transactionData, id: crypto.randomUUID() };
    this.transactionList.update((transaction) => [
      ...transaction,
      newTransaction,
    ]);
  }

  removeTransaction(transactionId: string): void {
    this.transactionList.update((transactionList) =>
      transactionList.filter((transaction) => transaction.id !== transactionId)
    );
  }

  totalValue() {
    const transactions = this.transactionList();

    const totalSum = transactions.reduce((total, transaction) => {
      return (
        total + (transaction.type ? transaction.value : -transaction.value)
      );
    }, 0);

    return totalSum;
  }
}
