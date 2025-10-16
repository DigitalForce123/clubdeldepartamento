import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() { }

  // Método para abrir Google Maps
  openGoogleMaps(): void {
    window.open(
      'https://www.google.com/maps/place/Club+Social+y+Deportivo+Gobernaci%C3%B3n+del+Valle/@3.345846,-76.591052,15.75z/data=!4m6!3m5!1s0x8e30a267142e54d7:0x279f2ce67663a4cd!8m2!3d3.3446832!4d-76.5872946!16s%2Fg%2F11bw_46g6k?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D',
      '_blank'
    );
  }

  // Método para scroll to top (opcional)
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}