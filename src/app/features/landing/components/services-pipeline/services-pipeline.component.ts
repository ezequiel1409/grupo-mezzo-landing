import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionEyebrowComponent } from '../../../../shared/components/section-eyebrow/section-eyebrow.component';
import { PipelineStep } from '../../landing.models';

@Component({
  selector: 'mezzo-services-pipeline',
  standalone: true,
  imports: [SectionEyebrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-pipeline.component.html',
  styleUrl: './services-pipeline.component.scss',
})
export class ServicesPipelineComponent {
  protected readonly steps: readonly PipelineStep[] = [
    {
      num: '01',
      title: 'Ubicación del proyecto',
      description:
        'Gestión y asesoramiento en la determinación de predios geográficamente adecuados, y análisis de rezonificaciones para optimizar el uso del suelo.',
    },
    {
      num: '02',
      title: 'Planes directores y maestros',
      description:
        'Elaboración de planes directores y maestros de saneamiento e hidráulicos, base técnica de todo el desarrollo.',
    },
    {
      num: '03',
      title: 'Estudios ambientales',
      description:
        'Estudios de impacto ambiental, diagnóstico y auditorías, planes de gestión ambiental, calidad de aire y monitoreo de agua subterránea, con metodologías estandarizadas.',
    },
    {
      num: '04',
      title: 'Project management',
      description:
        'Diseño, optimización y gerenciamiento del proyecto, asesoramiento económico-financiero y constitución de los vehículos necesarios para implementarlo.',
    },
    {
      num: '05',
      title: 'Ejecución de obras',
      description:
        'Estimación de cómputos para infraestructura clave —calles, energía, gas y agua— y vinculación con empresas logísticas y constructoras de naves industriales.',
    },
    {
      num: '06',
      title: 'Desarrollo y gestión',
      description:
        'Desarrollo de parques industriales y logísticos, barrios abiertos y cerrados, y su gestión ante los organismos pertinentes.',
    },
    {
      num: '07',
      title: 'Comercialización',
      description:
        'Evaluación de predios para esquemas de venta competitivos y desarrollo de una cartera de clientes que promueve la ocupación eficiente del espacio.',
    },
  ];
}
