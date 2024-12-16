

function addRedOutline() {      
    if (document.getElementById("outline-red").innerHTML == "Outline ON") {
        document.getElementById("outline-red").innerHTML = "Outline OFF";
        var myStyle = document.createElement("style");
        myStyle.setAttribute("id", "checker");  
        myStyle.appendChild(document.createTextNode("* {outline: 1px solid red !important;}"));        
        document.head.insertBefore(myStyle, null);
    } else {
        document.getElementById("outline-red").innerHTML = "Outline ON";
        document.getElementById("checker").remove();
    }
}
