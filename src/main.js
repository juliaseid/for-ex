import $ from 'jquery';
import { ExchangeService } from './../src/for-ex.js';

function getElements(response, amount, target) {
  if (response) {
    if (response.result = "success"){
      if (response.conversion_rates[target]) {
        let conversion = (response.conversion_rates[target] * amount).toFixed(2);
        $("#return").text(`$ ${amount} in US dollars is worth ${conversion} ${target}.`);
        }
      else if (response.conversion_rates[target] === false) {
        $("#return").text(`Sorry, we don't have data for that currency.`);
        }
    }
    else if (response.result = "error") {
      if (response.error = "unknown-code") {
        $("#return").text(`Uh oh!  It looks like something went wrong. Perhaps the currency code for US Dollars has changed.`);
      }
      else if (response.error = "invalid-key") {
        $("#return").text(`Hmm, it looks like the API key you are using is not valid. Contact the person or organization supporting this website for help.`);
      }
      else if (response.error = "quota-reached") {
        $("#return").text(`Please come back later.  We've reached our data usage limit for now.`)
      }
      else {
        $("#return").text(`We're not sure what went wrong!  Sorry we couldn't help you!`);
      }
    }
  }
  else {
    $("#return").text(`Oops! Something went wrong!  We're sorry we can't help you right now.`);
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