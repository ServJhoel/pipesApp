import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ButtonDemoComponent } from './button-demo.component';



@NgModule({
  declarations: [ButtonDemoComponent],
  imports: [
    CommonModule,ButtonModule
  ],exports:[ButtonDemoComponent]
})
export class ButtonDemoModule { }
