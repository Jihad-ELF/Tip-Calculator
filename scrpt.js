
function getElementValue(id){
    return document.getElementById(id).value;  
}
//function that calculate tip amount
function calculateTipAmount(billAmount,tipPercentage){
    return billAmount*(tipPercentage/100);
}
//function that calculate total bill amount
function calculateTotalAmount(billAmount,tipAmount){
    return billAmount+tipAmount;
}
// Function to handle the calculation and update the output fields
function calculate(){
    //retreive the user inputs
    const billAmount=parseFloat(getElementValue("bill_amount"));
    const tipPercentage=parseFloat(getElementValue("tip_percentage"));
    //calculate the tip amount and total bill amount
    const tipAmount=calculateTipAmount(billAmount,tipPercentage);
    const totalAmount=calculateTotalAmount(billAmount,tipAmount);
    //display the calculated amounts
    document.getElementById("tip_amount").textContent=tipAmount.toFixed(2);
    //"toFixed(2)"convert the string to a float with 2 degits after the point 
    document.getElementById("total_amount").textContent=totalAmount.toFixed(2);
}
