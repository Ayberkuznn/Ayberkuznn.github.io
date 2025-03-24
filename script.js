document.getElementById("convert-btn").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if(amount === "") {
        alert("Lütfen bir miktar girin.");
        return;
    }

    if(fromCurrency === toCurrency) {
        alert("Farklı para birimleri seçmelisiniz.");
        return;
    }

    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
    .then(response => response.json())
    .then(data => {
        const convertedAmount = data.rates[toCurrency];
        document.getElementById("result").innerHTML = 
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(3)} ${toCurrency}`;
    })
    .catch(error => {
        console.error("Hata:", error);
        document.getElementById("result").innerHTML = "Bir hata oluştu.";
    });
});
