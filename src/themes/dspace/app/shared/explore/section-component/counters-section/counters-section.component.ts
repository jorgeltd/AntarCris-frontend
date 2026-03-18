import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  CountersSection,
  CountersSectionComponent as BaseComponent,
} from 'src/app/shared/explore/section-component/counters-section/counters-section.component';
import { ThemedLoadingComponent } from 'src/app/shared/loading/themed-loading.component';

@Component({
  selector: 'ds-themed-counters-section',
  templateUrl: './counters-section.component.html',
  styleUrls: ['./counters-section.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    ThemedLoadingComponent,
    RouterLink,
    TranslateModule,
  ],
})
export class CountersSectionComponent extends BaseComponent {

  @Input()
    sectionId: string;

  @Input()
    countersSection: CountersSection;

}
