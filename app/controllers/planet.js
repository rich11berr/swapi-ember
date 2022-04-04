import Controller from '@ember/controller';

export default class PlanetController extends Controller {
  get planetInfoProperties() {
    return [
      { property: 'Diameter', value: this.model.diameter },
      { property: 'Gravity', value: this.model.gravity },
      { property: 'Orbital Period', value: this.model.orbitalPeriod },
      { property: 'Rotation Period', value: this.model.rotationPeriod },
      { property: 'Terrain', value: this.model.terrain },
      { property: 'Surface Water', value: this.model.surfaceWater },
      { property: 'Population', value: this.model.population },
    ];
  }

  async residentsLoad() {
    const residentData = await this.model.residents;
    console.log(residentData);
    return residentData;
  }

  get planetImage() {
    const terrainImages = ['desert', 'jungle', 'mountains', 'ocean'];

    const terrain = this.model.terrain
      .split(', ')
      .find((item) => terrainImages.includes(item));

    console.log(this.model);

    return terrain || 'default';
  }
}
