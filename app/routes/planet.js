import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlanetRoute extends Route {
  @service planetsFetch;

  async model(params) {
    const { planet_id } = params;

    return await this.planetsFetch.findPlanet(planet_id);
  }
}
