import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  author: DS.attr('string'),
  categories: DS.hasMany('category'),
  cover: DS.attr(),
  rating: DS.attr('number'),
  desc: DS.attr('string')
});
