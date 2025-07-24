import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ServerResponseService } from '../../../../app/core/services/server-response.service';

/**
 * This component representing the `PageInternalServer` DSpace page.
 */
@Component({
  selector: 'ds-base-page-internal-server-error',
  styleUrls: ['../../../../app/page-internal-server-error/page-internal-server-error.component.scss'],
  //templateUrl: '../../../../app/page-internal-server-error/page-internal-server-error.component.html',
  templateUrl: './page-internal-server-error.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [TranslateModule],
})
export class PageInternalServerErrorComponent {

  /**
   * Initialize instance variables
   *
   * @param {ServerResponseService} responseService
   */
  constructor(private responseService: ServerResponseService) {
    this.responseService.setInternalServerError();
  }
}
