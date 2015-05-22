(function(){
  'use strict';

})();

  var url = "https://api.etsy.com/v2/listings/active.js?api_key=l16o96t6qsh5xw9lwh1itw9x&keywords=baseball&sort_on=price&includes=Images,Shop"
  fetchJSONP(url, returnProducts);


  var ulElement = document.querySelector('.products');


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


  function returnProducts(response) {
      var products = response.results;
      console.log(products);
      displayProducts(products);
    }


    function displayProducts(products) {
        var source   = document.querySelector("#product-template").innerHTML;
        var template = Handlebars.compile(source);
        products.forEach(function(product){
          var output = template(product);
          ulElement.insertAdjacentHTML('beforeend', output);
        });
      }
