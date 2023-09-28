function convertCurrency() {
    const fromAmount = document.getElementById('fromAmount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const toAmount = (fromAmount * exchangeRate).toFixed(2);
            document.getElementById('toAmount').value = toAmount;
        })
        .catch(error => console.error('Error fetching exchange rate:', error));
}