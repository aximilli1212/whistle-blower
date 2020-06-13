import Route from '@ember/routing/route';
import {inject} from '@ember/service';

export default Route.extend({
  api: inject.service('whistleblowerapi'),

  model() {
    return this.get('api').getMeetups();
  }
});
