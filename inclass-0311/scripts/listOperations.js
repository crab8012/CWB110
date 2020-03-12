var names=[]

function addName(){
    console.log(window.names[1])
    nameBox = document.getElementById("name");
    window.names.push(nameBox.value);
    nameBox.value = "";
    console.log(window.names.length)
}

function showNames(){
    list = "";
    for(i = 0; i < names.length; i++){
        list += names[i] + "<br/>";
    }
    document.getElementById("list").innerHTML = list;
}

function changedSelection(){
    selectBox = document.getElementById("colleges")
    idx = selectBox.selectedIndex;
    document.getElementById("selection-result").innerHTML = "Value: " + selectBox.options[idx].value + "<br>Text: " + selectBox.options[idx].text;
}