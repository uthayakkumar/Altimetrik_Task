import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.scss']
})
export class InvestmentFormComponent {
  investmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(0)]],
      purchasePrice: [null, [Validators.required, Validators.min(0)]],
      date: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      console.log('Form Submitted', this.investmentForm.value);
    }
  }
}