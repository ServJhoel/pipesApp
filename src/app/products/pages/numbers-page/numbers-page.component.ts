import { Component } from '@angular/core';

@Component({
  selector: 'products-numbers-page',
  standalone: false,

  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
  public totalSells = 2567789.5567;
  public porcent = 0.4856;
}
