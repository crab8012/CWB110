function packFirstLastName(){
    firstName = document.getElementById('firstName').value; // Get the first name from the firstName text field
    lastName = document.getElementById('lastName').value; // Get the last name frmo the lastName text field
    window.location.href = "https://crab8012.github.io/CWB110/local-data-transport/page2.html?" + firstName + "|" + lastName; // Redirect us to page2 with the data being the first and last name separated by a pipe
}

function showMe(){
    var queryString = decodeURIComponent(location.search.substring(1)); // Obtain the queryString (Data after ?)
    var a = queryString.split('|') // Split the query string into an array on the pipe
    for(x in a){ // Iterate through the entire loop. X is an integer that corresponds to the index  
        alert(a[x]);
    }
    var lengthA = a.length;
    var middle = Math.floor((lengthA/2));

    alert("The middle value is: " + a[middle])
}