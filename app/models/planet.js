import Model, { attr, hasMany } from '@ember-data/model';

export default class PlanetModel extends Model {
  @attr('string') name;
  @attr('string') diameter;
  @attr('string') rotationPeriod;
  @attr('string') orbitalPeriod;
  @attr('string') gravity;
  @attr('string') population;
  @attr('string') climate;
  @attr('string') terrain;
  @attr('string') surfaceWater;
  @hasMany('person', { async: true }) residents;
  // @attr residents;
  @attr films;
  @attr('string') url;
  @attr('string') created;
  @attr('string') edited;
}
