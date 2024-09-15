import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  menuItems = [
    { label: 'Inicio', link: '/inicio' },
    { label: 'Producto', link: '/producto' },
    { label: 'Agregar Producto', link: '/agregar/producto' },
    { label: 'Eliminar Producto', link: '/eliminar/producto' },
    { label: 'Registrar', link: '/registrar' },
    { label: 'Ingresar', link: '/ingresar' },
  ];

}
