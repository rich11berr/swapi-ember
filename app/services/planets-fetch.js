import Service, { inject as service } from '@ember/service';

export default class PlanetsFetchService extends Service {
  @service store;

  async getAllPlanets() {
    for (let i = 1; i <= 6; i++) {
      await this.store.query('planet', { page: i });
    }

    return this.store.peekAll('planet');
  }

  async findPlanet(id) {
    return await this.store.findRecord('planet', id);
  }
}
