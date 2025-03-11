import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // resultData = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }>();
  // @Input() resultData?: {
  //   // you could add ? just after the resultData tells the angular that is the optional property
  //   // which might have this value or the value of below type but which also be undefined
  //   // or
  //   // you could add ! tells the angular that it will always be a value of this shape here
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  private investmentService = inject(InvestmentService)

  // get resultData() {

  //   return this.investmentService.annualData
  // }
  resultData = computed(() => this.investmentService.annualData())
  //  read only signal
  // resultData = this.investmentService.annualData.asReadonly()
}
