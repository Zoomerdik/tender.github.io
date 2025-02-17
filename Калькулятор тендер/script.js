function calculateTotal() {

    let quantity = parseFloat(document.getElementById("quantity").value) || 0;

    let bidPricePerUnit = parseFloat(document.getElementById("bidPricePerUnit").value) || 0;

    let purchasePricePerUnit = parseFloat(document.getElementById("purchasePricePerUnit").value) || 0;

    document.getElementById("totalBidPrice").value = (quantity * bidPricePerUnit).toFixed(2);

    document.getElementById("totalPurchasePrice").value = (quantity * purchasePricePerUnit).toFixed(2);

}

function calculate() {

    let totalBidPrice = parseFloat(document.getElementById("totalBidPrice").value) || 0;

    let totalPurchasePrice = parseFloat(document.getElementById("totalPurchasePrice").value) || 0;

    let profit = totalBidPrice - totalPurchasePrice;

    let profitPercentage = (profit / totalPurchasePrice) * 100;

    let cartakartaFee = totalPurchasePrice * 0.04;

    let bankFee = totalBidPrice * 0.01;

    let tax = profit * 0.03;

    let netProfit = profit - cartakartaFee - bankFee - tax;

    let netProfitPercentage = (netProfit / totalPurchasePrice) * 100;

    document.getElementById("profitResult").innerHTML = `Прибыль: ${profit.toFixed(2)} тг (${profitPercentage.toFixed(2)}%)`;

    document.getElementById("cartakartaFee").innerHTML = `Комиссия картакарта 4%: ${cartakartaFee.toFixed(2)} тг`;

    document.getElementById("bankFee").innerHTML = `Комиссия банка 1%: ${bankFee.toFixed(2)} тг`;

    document.getElementById("tax").innerHTML = `Налог 3%: ${tax.toFixed(2)} тг`;

    document.getElementById("netProfit").innerHTML = `Чистая прибыль: ${netProfit.toFixed(2)} тг (${netProfitPercentage.toFixed(2)}%)`;

}

function saveToArchive() {

    let archiveList = document.getElementById("archiveList");

    let productName = document.getElementById("productName").value;

    let netProfit = document.getElementById("netProfit").innerText;

    let row = archiveList.insertRow();

    row.innerHTML = `<td>${productName}</td><td>${netProfit}</td><td><button onclick="deleteRow(this)">Удалить</button></td>`;

}

function deleteRow(button) {

    let row = button.parentElement.parentElement;

    row.remove();

}