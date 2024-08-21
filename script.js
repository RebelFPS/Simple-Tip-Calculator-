function calculateTip() {
    const billTotal = document.getElementById("billamt").value;
    let peopleAmount = document.getElementById("peopleamt").value
    const selectedOption = document.getElementById("serviceQual").value; 
    if (peopleAmount === "" || peopleAmount < 0) {
        peopleAmount = 1;
    }

    if (billTotal === "" || selectedOption == 0) {
        alert("Please enter values");
    } else {
        const tip = billTotal * selectedOption / peopleAmount;
        const resultDiv = document.getElementById("totalAndTip");
        resultDiv.innerHTML = "";
        const tipResult = document.createElement("p");
        resultDiv.appendChild(tipResult);
        tipResult.innerHTML = "TIP AMOUNT <br/> $" + tip.toFixed(2) + "<br/> each";
        const totalToPay = billTotal / peopleAmount + tip;
        const totalResult = document.createElement("p");
        resultDiv.appendChild(totalResult);
        totalResult.innerHTML = "TOTAL AMOUNT <br/> $" + totalToPay.toFixed(2) + "<br/> each";
    }
}