document.getElementById("btnSH").addEventListener("click", CalculateM);
document.getElementById("btnClear").addEventListener("click", Clear);


function CalculateM(){
    let amount= parseFloat(document.getElementById("amount").value);
    let rate= parseFloat(document.getElementById("rate").value);
    let number= parseFloat(document.getElementById("numberOfMonths").value);
    let rate1,rate2,rate3,rate4,num1,num2,num3=-1.00;
    let month = -1;

    /* first part */
     rate2= rate/1200;
    //document.getElementById("output1").innerHTML += `${rate2}`;
     num1=amount*rate2;
    //document.getElementById("output2").innerHTML += `${num1}`;
    /* second part */
     rate3=1+rate2;
    //document.getElementById("output3").innerHTML += `${rate3}`;
     rate4=Math.pow(rate3,-number);
    //document.getElementById("output4").innerHTML += `${rate4}`;
     num2=1-rate4;
   //document.getElementById("output5").innerHTML += `${num2}`;
    /* Third part */
     num3 = num1/num2;
    document.getElementById("output1").innerHTML += `${num3}`;
   /*
    totalAmount = ((amount)*(rate/1200))/(1-(1+rate/1200)^(-number))
    */

    // first month
    let remainPreFirst = amount-num3;
    //All after
    

    //intrest payment
    let rateIP = num3 *rate2;

    for (let index = 0; index < number; index++) {
    month=index;
    
    ratePL = remainPreFirst-rateIP;
    document.getElementById("output2").innerHTML += `Month: ${month}<br> Payment Due:${remainPreFirst}<br> Interest Payment: ${rateIP}<br> Principle Payment: ${ratePL}<hr><br>`;
    if(remainPreFirst > num3){
        remainPreFirst = remainPreFirst-num3;
    }
    else{
        remainPreFirst = num3 - remainPreFirst;
    }
    rateIP = num3 * rate2;
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