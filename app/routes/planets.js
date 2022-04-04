import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlanetRoute extends Route {
  @service planetsFetch;

  async model() {
    return await this.planetsFetch.getAllPlanets();
  }
}
