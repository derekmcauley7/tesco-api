import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  UnitOfSale: DS.attr('string'),
  description: DS.attr('string'),
  ContentsMeasureType: DS.attr('string'),
  ContentsQuantity: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('string'),
});
