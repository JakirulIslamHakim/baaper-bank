document.getElementById('btn-deposit').addEventListener('click', function () {
    // 2
    const depositValueString = document.getElementById('input-field-deposit');
    const depositValue = depositValueString.value;
    const depositAdd = parseFloat(depositValue);

    
    // 7
    depositValueString.value = '';
    
    if(isNaN(depositAdd)){
        alert("Please ,provide me valid number")
        return;
    }
    // 3
    const depositCurrentString = document.getElementById('deposit-total');
    const depositTotalValue = depositCurrentString.innerText;
    const depositCurrent = parseFloat(depositTotalValue);

    // depositCurrentString.innerText = depositAdd;
    // depositTotalValue = depositAdd;
    // console.log(depositCurrent)
    // 4
    const depositCurrentTotal = depositAdd + depositCurrent;
    depositCurrentString.innerText = depositCurrentTotal;

    // 5
    const balanceTotalValue = document.getElementById('balace-total');
    const balanceTotalString = balanceTotalValue.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    // console.log(balanceTotal);

    // 6 
    const currentBalance = depositAdd + balanceTotal;
    balanceTotalValue.innerText = currentBalance;


})