document.getElementById("btnSH").addEventListener("click", CalculateM);
document.getElementById("btnClear").addEventListener("click", Clear);

function CalculateM(){

    // declaring variables
    var amount = document.getElementById("amount");
    var rate = document.getElementById("rate");
    var numberOfMonths = document.getElementById("numberOfMonths");

    var ratePercent = parseFloat(rate.value)/1200;
    amount = parseFloat(amount.value);
    numberOfMonths = parseInt(numberOfMonths.value);

    // Formula for the Total monthly
    var firstPart=(amount)*(ratePercent);
    var num1=1+ratePercent;
    var secondPart=(1-(Math.pow(num1,-numberOfMonths)));
    var totalMonthly= firstPart/secondPart;
    
    var interestPayment=amount*ratePercent;
    var principalPayment=(totalMonthly - interestPayment);
    var remainingBalance=(amount-principalPayment);

    principalPayment=principalPayment.toFixed(2);
    remainingBalance=remainingBalance.toFixed(2);
    interestPayment=interestPayment.toFixed(2);
    totalMonthly = totalMonthly.toFixed(2);

    document.getElementById("output1").innerText += "Remaining balance first month: " + amount;
    document.getElementById("output2").innerText += "Interest rate: " + ratePercent.toFixed(4);
    document.getElementById("output3").innerText += "Interest payment: " + interestPayment;
    document.getElementById("output4").innerText += "total Monthly: " + totalMonthly;
    document.getElementById("output5").innerText += "principal payment: " + principalPayment;
    document.getElementById("output6").innerText += "Remaining Balance: " + remainingBalance;
    
    //var totalInterest = interestPayment;
    //var totalInterest2 = totalInterest2
    var pp = principalPayment;
    var total = amount;
    var paymentInterest = interestPayment;
    //var total2 = totalMonthly;
    var months = numberOfMonths;
    var num1, num2, num3 = -1;

    for (let index = 0; index < numberOfMonths; index++) {

        document.getElementById("output7").innerText += "Payment: " + totalMonthly + " | Principal: " + pp + " | Interest: " + paymentInterest + "\n";
    
        // Formula for the Total monthly
         num1 = (total) * (ratePercent);
         num2 = 1 + ratePercent;
         num3 = (1-(Math.pow(num2,-months)));
         monthlyTotal= num1/num3;
         
        paymentInterest = total * ratePercent;
        pp = monthlyTotal - paymentInterest;
        months -1;
    }

}

function Clear(){
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";
    document.getElementById("output4").innerHTML = "";
    document.getElementById("output5").innerHTML = "";
    document.getElementById("output6").innerHTML = "";
}