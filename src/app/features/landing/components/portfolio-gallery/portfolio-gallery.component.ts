import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ProjectItem } from '../../landing.models';

@Component({
  selector: 'mezzo-portfolio-gallery',
  standalone: true,
  imports: [CommonModule, SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-gallery.component.html',
  styleUrl: './portfolio-gallery.component.scss',
})
export class PortfolioGalleryComponent {
  protected readonly projects: readonly ProjectItem[] = [
    {
      image: 'https://picsum.photos/seed/mezzo-nave-01/800/600',
      title: 'Nave Industrial Norte',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Nave industrial',
      description: 'Nave de 4.200 m² con andenes de carga y patios de maniobra para logística pesada.',
    },
    {
      image: 'https://picsum.photos/seed/mezzo-parque-02/800/600',
      title: 'Parque Logístico Ruta 40',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Parque logístico',
      description: 'Predio de 12 hectáreas subdividido en lotes con infraestructura vial y de servicios completa.',
    },
    {
      image: 'https://picsum.photos/seed/mezzo-cd-03/800/600',
      title: 'Centro de Distribución Sur',
      location: 'Provincia de Buenos Aires',
      category: 'Centro de distribución',
      description: 'Depósito clase A diseñado para operación cross-dock con acceso directo a rutas nacionales.',
    },
    {
      image: 'https://picsum.photos/seed/mezzo-oficinas-04/800/600',
      title: 'Centro de Negocios Este',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Centro de negocios',
      description: 'Edificio de oficinas corporativas integrado al parque industrial, con espacios flexibles.',
    },
    {
      image: 'https://picsum.photos/seed/mezzo-barrio-05/800/600',
      title: 'Barrio Cerrado Las Acacias',
      location: 'Provincia de Buenos Aires',
      category: 'Desarrollo residencial',
      description: 'Urbanización cerrada con sistemas constructivos industrializados y espacios verdes comunes.',
    },
    {
      image: 'https://picsum.photos/seed/mezzo-planta-06/800/600',
      title: 'Planta Bioenergía La Corona',
      location: 'Marcos Paz, Buenos Aires',
      category: 'Planta industrial',
      description: 'Instalación de eficiencia energética con sistemas de gestión de agua y energía térmica.',
    },
  ];

  protected trackByTitle(_: number, item: ProjectItem) {
    return item.title;
  }
}
