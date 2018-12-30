import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload){
    return {
      data: payload.uk.ghs.products.results.map((info) =>{
      return {
            id: info.id,
            type: 'beer',
            attributes: info,
      }
    })
  };
},
});
