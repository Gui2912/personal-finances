import { Component } from '@angular/core';
import { Transactions } from '../../../services';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-transaction-form.component.html',
  styleUrl: './register-transaction-form.component.css',
})
export class RegisterTransactionFormComponent {
  constructor(private transactionService: Transactions) {}

  value = new FormControl('');
  type = new FormControl(true);
  description = new FormControl('');

  handleSubmit(event: Event) {
    event.preventDefault();

    if (this.value.value !== '' && this.description.value !== '') {
      const data = {
        value: parseFloat(this.value.value!),
        type: this.type.value as boolean,
        description: this.description.value as string,
      };

      this.transactionService.addTransaction(data);

      console.log(this.transactionService.transactionList());

      this.value.setValue('');
      this.type.setValue(true);
      this.description.setValue('');
    } else {
      alert('É necessário preencher os campos de valor e descrição para cadastrar uma transação')
    }
  }
}
