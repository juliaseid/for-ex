import { ExchangeService } from './../src/for-ex.js';

$(document).ready(function() {
  event.preventDefault();

  $("form#exchange").submit(function () {
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
      $("inputAmount") = amount;
      $("#targetAmount") = amount * response.conversion_rates[target];
      $("#targetCurrency") = target;

    }
  }
});
})