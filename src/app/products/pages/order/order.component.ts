import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  standalone: false,

  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = true;
  public orderBy: keyof Hero | '' | undefined = '';

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Wonder Woman', canFly: true, color: Color.red },
    { name: 'Flash', canFly: false, color: Color.red },
    { name: 'Green Lantern', canFly: true, color: Color.green },
    { name: 'Iron Man', canFly: true, color: Color.red },
    { name: 'Hulk', canFly: false, color: Color.green },
    { name: 'Thor', canFly: true, color: Color.blue },
    { name: 'Spider-Man', canFly: false, color: Color.red },
    { name: 'Captain America', canFly: false, color: Color.blue },
    { name: 'Black Panther', canFly: false, color: Color.black },
    { name: 'Doctor Strange', canFly: true, color: Color.blue },
    { name: 'Black Widow', canFly: false, color: Color.black },
    { name: 'Deadpool', canFly: false, color: Color.red },
    { name: 'Wolverine', canFly: false, color: Color.green },
    { name: 'Storm', canFly: true, color: Color.green },
    { name: 'Green Arrow', canFly: false, color: Color.green },
    { name: 'Scarlet Witch', canFly: false, color: Color.red },
    { name: 'Iron Fist', canFly: false, color: Color.red },
    { name: 'Aquaman', canFly: false, color: Color.green },
  ];

  //cambia el valor de isUpperCase al contraio
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
  changeOrder(tipo:keyof Hero | '' | undefined){
    this.orderBy=tipo;
  }
}
