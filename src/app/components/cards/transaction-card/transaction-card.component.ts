import { Component, Input } from '@angular/core';
import { Transactions } from '../../../services';
import { ITransaction } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.css',
})
export class TransactionCardComponent {
  constructor(private transactionService: Transactions) {}

  @Input() transaction!: ITransaction;

  deleteTransaction() {
    this.transactionService.removeTransaction(this.transaction.id);
  }
}
