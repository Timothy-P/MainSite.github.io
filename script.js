var NavLock = 0
var NavA = 0
var InternetC = 0
var Placeholder = "This isn\'t finished yet.\nCome back later!"
function Alpha() {
    if (NavA == 0) {
        $("body").append('<div style="position: relative;width: 1000px;height: 300px; background-color: coral;opacity:1" id="Nav">')
        $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
        $("#TNav").append('<button style="position:relative;left:93%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
        $("#TNav").append('<button style="position:relative;left:92%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
        $(function() {  
            $("#Nav").draggable();  
        });
        NavA = 1

        $("#Nav").append('<button style="background: transparent;border: transparent;cursor: pointer;" onclick="PainterC()"><img style="width: 70px;" alt="Folder image" src="Folder.png"></button>');
        $("#Nav").append('<p style="width:200px;position:relative;left: 1.5%;top: -5%;">Painter</p>')

        $("#Nav").append('<button style="background: transparent;border: transparent;cursor: pointer;position: relative;top: -42.5%;left: 9%;" onclick=\'jQ()\'><img style="width: 70px;" alt="Folder image" src="Folder.png"></button>');
        $("#Nav").append('<p style="width:200px;position: relative;top: -47.5%;left: 8.1%;">jQ-Calculator</p>')
        
        $("#Nav").append('<button style="background: transparent;border: transparent;cursor: pointer;position: relative;top: -84.8%;left: 19%;" onclick=\'nineth()\'><img style="width: 70px;" alt="Folder image" src="Folder.png"></button>');
        $("#Nav").append('<p style="width:200px;position: relative;left: 18.8%;top: -90%;">9th-Classes</p>')

        $("#Nav").append('<button style="background: transparent;border: transparent;cursor: pointer;position: relative;top: -127%;left: 29%;" onclick=\'Fractions()\'><img style="width: 70px;" alt="Folder image" src="Folder.png"></button>');
        $("#Nav").append('<p style="width:200px;position: relative;top: -132.5%;left: 29.5%;">Fractions-</p>')

        $("#Nav").append('<button style="background: transparent;border: transparent;cursor: pointer;position: relative;top: -169.4%;left: 39%;" onclick=\'jQTesting()\'><img style="width: 70px;" alt="Folder image" src="Folder.png"></button>');
        $("#Nav").append('<p style="width:200px;position: relative;left: 38%;top: -176%;">jQuery-Testing</p>')
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
            window.open("https://github.com/Timothy-P", "_new")
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

function PainterC() {
    let MenuX = document.getElementById("Nav").style.top
    let MenuY = document.getElementById("Nav").style.left
    document.getElementById("Nav").remove()

    $("body").append('<div style="top:'+MenuX+';left:'+MenuY+';position: relative;width: 200px;height: 200px; background-color: coral;opacity:1" id="Nav">')
    $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
    $("#TNav").append('<button style="position:relative;left:57%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
    $("#TNav").append('<button style="position:relative;left:52%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
    $(function() {  
        $("#Nav").draggable();  
    });
    
    $("#Nav").append('<a href="https://github.com/Timothy-P/Paint.github.io/archive/refs/heads/main.zip"><img style="width:100px;position:relative;left:24%;top:5%;" alt="ZIP image" src="ZIP.png"></a>')
    $("#Nav").append('<p style="position:relative;left:10%;" onclick="https://github.com/Timothy-P/Paint.github.io/archive/refs/heads/main.zip">Paint.github.io-main.zip</p>')
}

function jQ() {
    let MenuX = document.getElementById("Nav").style.top
    let MenuY = document.getElementById("Nav").style.left
    document.getElementById("Nav").remove()

    $("body").append('<div style="top:'+MenuX+';left:'+MenuY+';position: relative;width: 200px;height: 200px; background-color: coral;opacity:1" id="Nav">')
    $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
    $("#TNav").append('<button style="position:relative;left:57%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
    $("#TNav").append('<button style="position:relative;left:52%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
    $(function() {  
        $("#Nav").draggable();  
    });
    
    $("#Nav").append('<a href="https://github.com/Timothy-P/jQ-Calculator/archive/refs/heads/main.zip"><img style="width:100px;position:relative;left:24%;top:5%;" alt="ZIP image" src="ZIP.png"></a>')
    $("#Nav").append('<p style="position:relative;left:10%;" onclick="https://github.com/Timothy-P/jQ-Calculator/archive/refs/heads/main.zip">jQ-Calculator-main.zip</p>')
}

function nineth() {
    let MenuX = document.getElementById("Nav").style.top
    let MenuY = document.getElementById("Nav").style.left
    document.getElementById("Nav").remove()

    $("body").append('<div style="top:'+MenuX+';left:'+MenuY+';position: relative;width: 200px;height: 200px; background-color: coral;opacity:1" id="Nav">')
    $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
    $("#TNav").append('<button style="position:relative;left:57%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
    $("#TNav").append('<button style="position:relative;left:52%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
    $(function() {  
        $("#Nav").draggable();  
    });
    
    $("#Nav").append('<a href="https://github.com/Timothy-P/9th-Classes/archive/refs/heads/main.zip"><img style="width:100px;position:relative;left:24%;top:5%;" alt="ZIP image" src="ZIP.png"></a>')
    $("#Nav").append('<p style="position:relative;left:10%;" onclick="https://github.com/Timothy-P/9th-Classes/archive/refs/heads/main.zip">9th-Classes-main.zip</p>')
}

function Fractions() {
    let MenuX = document.getElementById("Nav").style.top
    let MenuY = document.getElementById("Nav").style.left
    document.getElementById("Nav").remove()

    $("body").append('<div style="top:'+MenuX+';left:'+MenuY+';position: relative;width: 200px;height: 200px; background-color: coral;opacity:1" id="Nav">')
    $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
    $("#TNav").append('<button style="position:relative;left:57%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
    $("#TNav").append('<button style="position:relative;left:52%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
    $(function() {  
        $("#Nav").draggable();  
    });
    
    $("#Nav").append('<a href="https://github.com/Timothy-P/FractionsCalculator/archive/refs/heads/main.zip"><img style="width:100px;position:relative;left:24%;top:5%;" alt="ZIP image" src="ZIP.png"></a>')
    $("#Nav").append('<p style="position:relative;left:10%;" onclick="https://github.com/Timothy-P/Fractions-Calculator/archive/refs/heads/main.zip">FractionsCalculator-main.zip</p>')
}
function jQTesting() {
    let MenuX = document.getElementById("Nav").style.top
    let MenuY = document.getElementById("Nav").style.left
    document.getElementById("Nav").remove()

    $("body").append('<div style="top:'+MenuX+';left:'+MenuY+';position: relative;width: 200px;height: 200px; background-color: coral;opacity:1" id="Nav">')
    $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
    $("#TNav").append('<button style="position:relative;left:57%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
    $("#TNav").append('<button style="position:relative;left:52%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
    $(function() {  
        $("#Nav").draggable();  
    });
    
    $("#Nav").append('<a href="https://github.com/Timothy-P/jQuery-Testing/archive/refs/heads/main.zip"><img style="width:100px;position:relative;left:24%;top:5%;" alt="ZIP image" src="ZIP.png"></a>')
    $("#Nav").append('<p style="position:relative;left:10%;" onclick="https://github.com/Timothy-P/jQuery-Testing/archive/refs/heads/main.zip">jQuery-Testing-main.zip</p>')
}




// New section
function About() {
    //alert("This isn\'t quite finished.\nTry coming back later.")
    if (NavA == 0) {
        $("body").append('<div style="position: relative;width: 1000px;height: 300px; background-color: coral;opacity:1" id="Nav">')
        $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
        $("#TNav").append('<button style="position:relative;left:93%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
        $("#TNav").append('<button style="position:relative;left:92%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
        $(function() {  
            $("#Nav").draggable();  
        });
        NavA = 1

        $("#Nav").append('<button onclick="ReadMe()"><img style="width:38px" alt="Folder image" src="Folder.png"></button>')
        $("#Nav").append('<p>ReadMe.txt</p>')
    }
    else {
        alert("Menu is open.")
    }
}
function ReadMe() {
    let MenuX = document.getElementById("Nav").style.top
    let MenuY = document.getElementById("Nav").style.left
    document.getElementById("Nav").remove()

    $("body").append('<div style="top:'+MenuX+';left:'+MenuY+';position: relative;width: 500px;height: 200px; background-color: white;opacity:1" id="Nav">')
    $("#Nav").append('<div style="width: auto; height: 15px; background-color: blue;cursor: move;padding:12px;" id="TNav"></div>')
    $("#TNav").append('<button style="position:relative;left:57%;cursor:auto;background:transparent;border:none;font-size:1.8em;top:-90%;" id="LockB" onclick="AlphaL()">&#128275;</button>')
    $("#TNav").append('<button style="position:relative;left:52%;cursor:auto;background:transparent;border:none;top:-8px" onclick="AlphaC()"><img style="width:30px;" alt="Close" src="XpClose.png"></button>')
    $(function() {  
        $("#Nav").draggable();  
    });
    
    $("#Nav").append('<code><p>Hello! You\'ve come this far to see what I\'m up to, and now you get to read this. My dream was to become this world-wide programmer that\'s always busy, but I don\'t mind what I\'ve got now. I just think I might be a little out of my league with what I originally wanted to do (Windows XP theme).')
}