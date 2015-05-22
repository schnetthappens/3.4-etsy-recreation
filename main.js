(function(){
  'use strict';

})();

  var url = "https://api.etsy.com/v2/listings/active.js?api_key=l16o96t6qsh5xw9lwh1itw9x&keywords=baseball&sort_on=price&includes=Images,Shop"
  fetchJSONP(url, logData);


  function fetchJSONP(url, callback) {
      var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
      var script = document.createElement('script');

      window[callbackName] = function(data) {
          delete window[callbackName];
          document.body.removeChild(script);
          callback(data);
      };

      script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
      document.body.appendChild(script);
  }


  function logData(data) {
    console.log(data);
  }


  /*
      Etsy's API return data in a slightly different format.
      Extract the data accordingly
    */

  // function app(response) {
  //     var titles = response.data.results;
  //     console.log(title);
  //     displayProductTitles(titles);
  //   }
  //
  //   function displayProductTitles(characters) {
  //       var source   = document.querySelector("#product-template").innerHTML;
  //       var template = Handlebars.compile(source);
  //       characters.forEach(function(character){
  //         var output = template(character);
  //         ulElement.insertAdjacentHTML('beforeend', output);
  //       });
  //     }
