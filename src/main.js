import $ from 'jquery';
import { ExchangeService } from './../src/for-ex.js';

$(document).ready(function() {

  $("form#exchange").submit(function (event) {
    event.preventDefault();
    const amount = $("input#amount").val();
    const target = $("#target").val();
 
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchangeRate;
      getElements(response);
    })();


    function getElements(response) {
      if (response) {
        //   $("#return").text('$' + amount + 'USD is worth' + response.conversion_rates[target]);
        $("inputAmount").text(amount);
        $("#targetAmount").text(amount * response.conversion_rates[target]);
        $("#targetCurrency").text(target);
      }
    }
  });
});