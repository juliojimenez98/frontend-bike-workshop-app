import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarMenu: MenuItem[] = [
    { texto: 'Inicio', ruta: './home/inicio' },
    { texto: 'Servicios', ruta: './home/servicios' },
    { texto: 'Contacto', ruta: './home/contacto' },
    { texto: 'Ubícanos', ruta: './home/ubicanos' },
  ];
}
