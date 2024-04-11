import { Component } from '@angular/core';
import { Transactions } from '../../services';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
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
