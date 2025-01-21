import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  standalone: false,

  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  //strings
 public lowerName='jhoel alexander';
 public upperName='JHOEL ALEXANDER'
 public fullName='jHoeL aLexAndEr';
 //dates
 public customDate:Date= new Date();

}
