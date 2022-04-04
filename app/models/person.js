import Model, { attr, belongsTo } from '@ember-data/model';

export default class PeopleModel extends Model {
  @attr('string') name;
  @attr('string') height;
  @attr('string') mass;
  @attr('string') hair_color;
  @attr('string') skin_color;
  @attr('string') eye_color;
  @attr('string') birth_year;
  @attr('string') gender;
  @belongsTo('planet') homeworld;
  @attr films;
  @attr species;
  @attr vehicles;
  @attr starships;
  @attr('string') url;
  @attr('string') created;
  @attr('string') edited;
}
