import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Jhoel';
  public gender: 'male' | 'female' = 'male';
  //para selecionar palabra segun el gender
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    this.name = 'Alexa';
    this.gender = 'female';
  }

  //i18Plural
  public clients: string[] = [
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Hiromi',
    'Sheila',
  ];

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  //Key value pipe  // JSON PIPE
  public person = {
    name: 'Jhoel',
    age: '24',
    address: 'Cuenca, España',
  };

  //Async
  //interval crea un observable que nos emite un valor cada x segundos
  //en este caso 2s
  public myObservableTimer = interval(2000);
  //promesa
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
