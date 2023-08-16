document.getElementById('btn-withdraw').addEventListener('click',function(){
    // 2
    const withdrawField = document.getElementById('input-field-withdraw');
    const withdrawValue = withdrawField.value;
    const withdrawAdd = parseFloat(withdrawValue);

    // 7
    withdrawField.value ='';

    if(isNaN(withdrawAdd)){
        alert("Please ,provide me valid number")
        return;
    }

    // 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdraw = parseFloat(withdrawTotalString);
    // withdrawTotalElement.innerText = withdrawAdd;

    
    // 5
    const balanceTotalString = document.getElementById('balace-total');
    const balanceTotal = balanceTotalString.innerText;
    const balance = parseFloat(balanceTotal);
    // console.log(balance)

    
    

    if(withdrawAdd >balance ){
        alert("Tumer baap er bank e eto tk nai")
        return;
    }

    // 4
    const withdrawTotal = withdraw + withdrawAdd;
    withdrawTotalElement.innerText = withdrawTotal;


    // 6
    const remain = balance - withdrawAdd;
   balanceTotalString.innerText = remain;



    
}) 