class CryptoAPI {

    //get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v2/ticker/');
            //we use await to stop or to bloc until the url have all charge

            //return as json
            const cryptoCurrencies = await url.json();

            //return the object
            return {
                cryptoCurrencies
            }

    }
}
