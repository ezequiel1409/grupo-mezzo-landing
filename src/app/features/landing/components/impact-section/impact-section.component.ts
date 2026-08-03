import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { ImpactItem } from '../../landing.models';

@Component({
  selector: 'mezzo-impact-section',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './impact-section.component.html',
  styleUrl: './impact-section.component.scss',
})
export class ImpactSectionComponent {
  protected readonly items: readonly ImpactItem[] = [
    {
      tag: 'Empleo',
      title: 'Generación de trabajo',
      description: 'Creación de puestos directos e indirectos en múltiples sectores de la economía local.',
    },
    {
      tag: 'Capital',
      title: 'Atracción de inversiones',
      description: 'Mayor flujo de capital gracias a un entorno empresarial atractivo y bien planificado.',
    },
    {
      tag: 'Territorio',
      title: 'Infraestructura pública',
      description: 'Mejoras en carreteras, transporte público y servicios básicos de la zona.',
    },
    {
      tag: 'Ecosistema',
      title: 'Clústeres industriales',
      description: 'Ecosistemas productivos que impulsan la innovación y la competitividad regional.',
    },
  ];
}
