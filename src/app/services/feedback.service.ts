import { Injectable } from '@angular/core';
import { Restangular, RestangularModule } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';

import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedback);
  }

}
