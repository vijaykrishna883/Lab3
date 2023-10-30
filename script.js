const form = document.getElementById("tip-form");

form.addEventListener("input", function (event) {

    const billTotal = parseFloat(form["bill-total"].value);
    const tipSlider = parseInt(form["tip-slider"].value);

    if (isNaN(billTotal) || billTotal < 0) {
        alert("Please enter a valid number for the bill total");
        return;
    }

    const tipPercentage = tipSlider / 100;
    const tipAmount = billTotal * tipPercentage;
    const totalBill = billTotal + tipAmount;

    const formattedTipPercentage = (tipPercentage * 100).toFixed(2) + "%";
    const formattedTipAmount = "$" + tipAmount.toFixed(2);
    const formattedTotalBill = "$" + totalBill.toFixed(2);

    form["tip-percentage"].value = formattedTipPercentage;
    form["tip-amount"].value = formattedTipAmount;
    form["total-bill"].value = formattedTotalBill;

});
