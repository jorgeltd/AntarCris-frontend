import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { SectionComponent } from 'src/app/core/layout/models/section.model';
import { isNotEmpty } from 'src/app/shared/empty.util';

import { ThemedCountersSectionComponent } from '../../../../../app/shared/explore/section-component/counters-section/themed-counters-section.component';
import { ThemedSearchSectionComponent } from '../../../../../app/shared/explore/section-component/search-section/themed-search-section.component';


@Component({
  selector: 'ds-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    AsyncPipe,
    ThemedCountersSectionComponent,
    ThemedSearchSectionComponent,
    NgOptimizedImage,
  ],
})
export class HeroComponent {

  @Input() sectionComponents: Observable<SectionComponent[][]>;

  sectionId = 'site';

  searchSection = {
    componentType: 'search',
    discoveryConfigurationName: 'site',
    displayTitle: false,
    initialStatements: 3,
    searchType: 'basic',
    style: '',
  };

  componentClass(sectionComponent: SectionComponent) {
    const defaultCol = 'col-12';
    return (isNotEmpty(sectionComponent.style) && sectionComponent.style.includes('col')) ?
      sectionComponent.style : `${defaultCol} ${sectionComponent.style}`;
  }

}
