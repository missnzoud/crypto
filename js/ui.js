class UI {
   constructor() {
       this.init();



    }
   init () {
   this.printCryptoCurrencies();
     }
     printCryptoCurrencies() {
         cryptoAPI.getCryptoConcurrenciesList();
     }
   
}