import { Injectable } from '@angular/core';
import { Restangular, RestangularModule } from 'ngx-restangular';

import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback) {
    this.restangular.all('feedback').post(feedback);
  }

}
