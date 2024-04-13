import { Component } from '@angular/core';
import { Transactions } from '../../services';
import { RegisterTransactionFormComponent } from '../../components';
import { CommonModule } from '@angular/common';
import { TotalCardComponent } from '../../components/cards/total-card/total-card.component';
import { TransactionCardComponent } from '../../components/cards/transaction-card/transaction-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RegisterTransactionFormComponent,
    CommonModule,
    TransactionCardComponent,
    TotalCardComponent,
  ],
  providers: [Transactions],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private transactions: Transactions) {
    console.log(this.transactions.getTransactions());
  }

  get listAllTransactions() {
    return this.transactions.getTransactions();
  }
}
