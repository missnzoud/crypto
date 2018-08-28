class UI {
   constructor() {
       this.init();
    }
   init () {
   this.printCryptoCurrencies();
     }
     //prints the option for the form
     printCryptoCurrencies() {
         cryptoAPI.getCryptoCurrenciesList()
         .then(function(data) {
             const cryptocurrencies = data.cryptoCurrencies;
             console.log(cryptocurrencies);
         })
     }
   
}