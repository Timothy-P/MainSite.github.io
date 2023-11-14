var NavLock = 0
var NavA = 0
var InternetC = 0
function Alpha() {
    if (NavA == 0) {
        $("body").append('<div style="position: relative;width: 200px;height: 200px; background-color: coral;opacity:1" id="Nav">')
        $("#Nav").append('<div style="width: auto; height: 15px; background-color: darkcyan;cursor: move;padding:12px;" id="TNav"></div>')
        $("#Nav").append('<button onclick="alert(\'Test complete\')">Test Button</button>')
        $("#TNav").append('<button style="position:relative;left:33%;cursor:auto;background:transparent;border:none;" id="LockB" onclick="AlphaL()">&#128275;</button>')
        $("#TNav").append('<button style="position:relative;left:32%;cursor:auto;background:transparent;border:none;" onclick="AlphaC()">&#10060;</button>')
        $(function() {  
            $("#Nav").draggable();  
        });
        NavA = 1
    }
    else {
        alert("Menu is open.")
    }
}
function AlphaC() {
    document.getElementById("Nav").remove()
    NavLock = 0
    NavA = 0
}
function AlphaL() {
    if (NavLock == 1) {
        $("#Nav").draggable({disabled:false})
        NavLock = 0
        document.getElementById("LockB").innerHTML = "&#128275;"
    }
    else {
        $("#Nav").draggable({disabled:true});
        NavLock = 1
        document.getElementById("LockB").innerHTML = "&#128274;"
    }
}
function InternetF() {
    try {
        err = Error
        if (InternetC == 1) {
            document.getElementById("Internet").style.borderColor = "red"
            console.log("InternetC == 1")
        }
        else if (InternetC == 2) {
            document.getElementById("Internet").style.borderColor = "yellow"
            console.log("InternetC == 2")
            window.open("www.github.com/Timothy-P", "_new")
            InternetC = 1
            InternetF()
        }
    }
    catch (err) {
        alert(err)
    }
}
function InternetFF() {
    try {
        InternetC += 1;
        InternetF()
    }
    catch (Error) {
        alert(Error)
    }
}
function bodyU() {
    InternetC = 0
    document.getElementById("Internet").style.borderColor = "transparent"
    console.log("InternetC reset...")
}
window.onerror = function(message, url, linenumber) {
	alert('JavaScript error: ' + message + ' on line ' + linenumber + ' for ' + url);
}