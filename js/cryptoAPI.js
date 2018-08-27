class CryptoAPI {

    //get all the cryptocurrencies
    async getCryptoConcurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v2/ticker/');
            //we use await to stop or to bloc until the url have all charge
    }
}