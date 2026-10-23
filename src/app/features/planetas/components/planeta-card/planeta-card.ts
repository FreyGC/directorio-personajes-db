import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { LucideImageOff } from '@lucide/angular';
import { Planeta } from '../../models/planeta.model';

// Componente de presentación: muestra un planeta, con etiqueta si fue destruido.
@Component({
  selector: 'app-planeta-card',
  host: { class: 'mb-4 block break-inside-avoid' },
  imports: [LucideImageOff],
  templateUrl: './planeta-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetaCard {
  readonly planeta = input.required<Planeta>();

  protected readonly imagenFallo = signal(false);
}
