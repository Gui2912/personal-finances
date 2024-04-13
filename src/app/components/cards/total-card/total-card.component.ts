import { Component, Input } from '@angular/core';
import { Transactions } from '../../../services';

@Component({
  selector: 'app-total-card',
  standalone: true,
  imports: [],
  templateUrl: './total-card.component.html',
  styleUrl: './total-card.component.css',
})
export class TotalCardComponent {
  constructor(private transactionService: Transactions) {
    console.log(this.transactionService.totalValue());
  }

  get total() {
    return this.transactionService.totalValue().toFixed(2);
  }
}
