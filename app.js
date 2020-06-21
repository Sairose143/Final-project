//LISTEN FOR SUBMIT
document.getElementById("loan-form").addEventListener("submit", function (e) {
    //HIDE RESULTS
    document.getElementById("results").style.display = "none";

    //SHOW LOADER
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 1500);
    e.preventDefault();
});

//CALCULATERESULTS FUNCTION
function calculateResults() {
    //UI VARIABLES
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value);

    //COMPUTE MONTHLY PAYMENT
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
        //SHOW RESULTS
        document.getElementById("results").style.display = "block";
        //HIDE LOADER
        document.getElementById("loading").style.display = "none";
    } else {
        showError("Please check your numbers");
    }
}

//SHOWERROR FUNCTION
function showError(error) {
    //HIDE RESULTS AND LOADER
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "none";
   

    // //INSERT ERROR ABOVE HEADING
    
    document.querySelector(".error").style.display = "block";

    //CLEAR ERROR AFTER 2 SECONDS
    setTimeout(clearError, 2000);
}

//CLEARERROR FUNCTION
function clearError() {
    document.querySelector(".error").style.display = "none";
}
