function Alpha() {
    $("body").append('<div style="position: relative;width: 200px;height: 200px; background-color: coral;" id="Nav">')
    $("#Nav").append('<div style="width: auto; height: 50px; background-color: darkcyan;cursor: move;" id="TNav"></div>')
    $("#Nav").append('<button onclick="alert(\'Test complete\')">Test Button</button>')
    $("#TNav").append('<button onclick="$(\'#Nav\').draggable(\'enabled\'); AlphaL()">&#128275;</button>')
    $(function() {  
        $( "#Nav" ).draggable();  
    });
}
function AlphaC() {
    document.getElementById("Nav").remove()
}
function AlphaL() {
    if (NavLock == 1) {
        $("#Nav").draggable({disabled:false})
    }
    else {
        $("#Nav").draggable({disabled:true})
    }
}