import $ from 'jquery';
import { ExchangeService } from './../src/for-ex.js';

function getElements(response, amount, target) {
  if (response) {
    let conversion = response.conversion_rates[target] * amount;
    $("#return").text(`$ ${amount} in US dollars is worth ${conversion} ${target}.`);
    // $("inputAmount").text(amount);
    // $("#targetAmount").text(amount * response.conversion_rates[target]);
    // $("#targetCurrency").text(target);
  }
  else {
    $("#return").text(`Oops!  Something went wrong, and we can't help you with that conversion right now.`);
  }
}

$(document).ready(function() {

  $("form#exchange").submit(function (event) {
    event.preventDefault();
    const amount = $("input#amount").val();
    const target = $("#target").val();
 
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchangeRate();
      getElements(response, amount, target);
    })();

  });
});