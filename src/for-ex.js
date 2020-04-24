export class ExchangeService {
  async getExchangeRate() {
    try {
      let response = await fetch (`https://prime.exchangerate-api.com/v5/${API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}