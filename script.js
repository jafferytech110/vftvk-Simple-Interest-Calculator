// computing of interest
function compute()
{   
    // declaring varialbles and taking values 
   
    let principal = document.getElementById('principal').value;
    parseInt(principal);
    if(principal <= 0) {
        alert('please enter a positive value of principal amount');
        document.getElementById('principal').focus();
    }
    let rate = document.getElementById('rate').value;
    let years = parseInt(document.getElementById('years').value);
    let interest = principal * years * (rate /100);
    var year = new Date().getFullYear()+ years;
    let total = parseInt(interest);
    // showing result in span tag
    document.getElementById('result').innerText = 
    `if you deposit ${principal},
    at an interest rate of ${rate}%.
    You will receive an amount including principal amount ${total} ,
    in the year ${year}`;    
}
// updating rate function
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%}`;
}    