import { Component } from '@angular/core';
import { Transactions } from '../../../services';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ITransaction, TCreateTransaction } from '../../../interfaces';

@Component({
  selector: 'app-register-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-transaction-form.component.html',
  styleUrl: './register-transaction-form.component.css',
})
export class RegisterTransactionFormComponent {
  constructor(private transactionService: Transactions) {
    console.log(this.transactionService.transactionList());
  }

  value = new FormControl(0);
  type = new FormControl(true);
  description = new FormControl('');

  handleSubmit(event: Event) {
    event.preventDefault();

    const data: TCreateTransaction = {
      value: this.value.value as number,
      type: this.type.value as boolean,
      description: this.description.value as string,
    };

    this.transactionService.addTransaction(data);

    console.log(this.transactionService.transactionList())

    this.value.setValue(null);
    this.type.setValue(null);
    this.description.setValue('');
  }
}
