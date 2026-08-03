import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LogoMarkComponent } from '../../../../shared/components/logo-mark/logo-mark.component';

interface NavLink {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'mezzo-site-header',
  standalone: true,
  imports: [LogoMarkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks: readonly NavLink[] = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sostenibilidad', href: '#sostenibilidad' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Impacto', href: '#impacto' },
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
