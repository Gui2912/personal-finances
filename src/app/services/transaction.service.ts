import { Injectable, computed, signal } from '@angular/core';
import { ITransaction, TCreateTransaction } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class Transactions {
  readonly transactionList = signal<ITransaction[]>([]);
  readonly total = computed(() =>
    this.transactionList().reduce((acc, transaction) => {
      if (transaction.type === true) {
        return acc + transaction.value;
      } else {
        return acc - transaction.value;
      }
    }, 0)
  );

  getTransactions(): ITransaction[] {
    return this.transactionList();
  }

  addTransaction(transactionData: TCreateTransaction): void {
    const newTransaction = { ...transactionData, id: crypto.randomUUID() };
    this.transactionList.update((transaction) => [
      newTransaction,
      ...transaction,
    ]);
  }

  removeTransaction(transactionId: string): void {
    this.transactionList.update((transactionList) =>
      transactionList.filter((transaction) => transaction.id !== transactionId)
    );
  }

  totalValue() {
    return this.total();
  }
}
