function packFirstLastName(){
    firstName = document.getElementById('firstName').value; // Get the first name from the firstName text field
    lastName = document.getElementById('lastName').value; // Get the last name frmo the lastName text field
    window.location.href = "https://crab8012.github.io/CWB110/local-data-transport/page2.html?" + "fname=" + firstName + "&lname=" + lastName; // Redirect us to page2 with the data being the first and last name separated by a pipe
}

function showMe(){
    var queryString = decodeURIComponent(location.search.substring(1)); // Obtain the queryString (Data after ?)
    var pairs = queryString.split('&') // Split the query string into an array on the pipe
    var info = document.getElementById("info")
    for(pair in pairs){ // Iterate through the entire loop. X is an integer that corresponds to the index  
        var key = pair.split[0]
        var value = pair.split[1]
        info.innerHTML = info.innerHTML + "KEY: " + key + "VALUE: " + value + "<br><hr>"
    }
}