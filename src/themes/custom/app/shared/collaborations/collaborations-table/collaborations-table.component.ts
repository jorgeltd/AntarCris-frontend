import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'ds-collaborations-table',
  styleUrls: ['./collaborations-table.component.scss'],
  templateUrl: './collaborations-table.component.html',
  standalone: true,
  imports: [
    NgbPaginationModule,
    NgxPaginationModule,
    TranslateModule,
  ],
})

export class CollaborationsTableComponent implements OnInit {
    @Input() collaborations: any[] = [];

    page = 1;

    pageSize = 5;

    ngOnInit(): void {
      this.sortCollaborations();
    }

    // Sort by number of publications, then by country name
    sortCollaborations(): void {
      this.collaborations.sort((a, b) => {
        const publicationsDifference = b[1] - a[1];
        if (publicationsDifference !== 0) {
          return publicationsDifference;
        }
        return a[0].localeCompare(b[0]);
      });
    }
}
