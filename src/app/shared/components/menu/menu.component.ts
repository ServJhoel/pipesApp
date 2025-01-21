import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: MenuItem[] | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink:'/'
            // command: () => {
            //   this.router.navigate(['']);
            // },
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink:'numbers'
            // command: () => {
            //   this.router.navigate(['/numbers']);
            // },
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink:'uncommon'
            // command: () => {
            //   this.router.navigate(['/uncommon']);
            // },
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
              routerLink:'custom'
          },
        ],
      },
    ];
  }
}
