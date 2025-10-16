import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  isCollapsed = true;

  constructor(private router: Router) { }

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeMenu(): void {
    this.isCollapsed = true;
  }

  solicitarInformacion(): void {
    this.router.navigate(['/contacto']);
    this.closeMenu();
  }
}