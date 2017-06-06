document.getElementById("tip-amount").style.display = "none";

function Calculate() {
    var bill = document.getElementById("bill").value;
    var service = document.getElementById("service-quality").value;
    var people = document.getElementById("people").value;
    
    if (bill === ""  || service == 0){
        window.alert("you must enter some values to get this running");
        return;
    }
    
    if (people === "" || people <= 1){
        people = 1;
        document.getElementById("each").style.display = "none";
    }
    
    else {
        document.getElementById("each").style.display = "block";
    }
    
    var total = (bill * service) / people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("total").innerHTML = total;
    document.getElementById("tip-amount").style.display = "block";
    
    
}


document.getElementById("button").onclick = function(){
    Calculate();
}


