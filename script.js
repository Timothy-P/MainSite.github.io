var NavLock = 0
NavA = 0
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