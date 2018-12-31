import DS from 'ember-data';

import $ from 'jquery';
$.ajaxPrefilter(function( options, oriOptions, jqXHR ) {
  jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key","Tesco API KPI");
});
export default DS.RESTAdapter.extend({
  host: 'https://dev.tescolabs.com',
  namespace: 'grocery/products/?query=beer&offset=1&limit=100',
  pathForType(){
    return '';
  }
});
