
function sub() {
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var m = document.getElementById("mobile").value;
    var f = document.getElementById("food").value;
    



    if (n=="") {
        alert('Enter Your Name')
    }

    else if (m=="") {
        alert('Enter Your Mobile Number');
    }
    else if (m.length < 10) {
        alert("Wrong mobile number entered");
    }
    else if (m.length > 10) {
        alert("Wrong mobile number entered");
    }

    else if (isNaN(m)) {
        alert("Wrong mobile number entered");
    }

    else if (f=="") {
        alert("Enter the Food Name");
    }
    else{
        alert("Your Order has been successfully placed");
    }
    

}
