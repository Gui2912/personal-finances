import { Component } from '@angular/core';
import { Transactions } from '../../services';
import { RegisterTransactionFormComponent } from '../../components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RegisterTransactionFormComponent],
  providers: [Transactions],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private transactions: Transactions){
    console.log(this.transactions.getTransactions())
  }

  get listAllTransactions(){
    return this.transactions.getTransactions()
  }
}
