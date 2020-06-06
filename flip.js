//Flip-card animation
var toggle = false;

    $("#form-game").click(function() {
        if(toggle === false){
        $("#form-game").toggleClass("flip-rotate");
        document.getElementById("startBtn").style.display = "none";
        //$('#StartBtn').hide();
        document.getElementById("dice").style.display = "none";
        document.getElementById("gameh1").style.display = "none";
        document.getElementById("info").style.display = "none";
        toggle = true;
    }
});

//JS for Safari
var isSafari
if(isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1){
        document.getElementById("h3White").style.color = "black";
        document.getElementById("form-game").style.backgroundColor = "transparent";
        document.getElementById("dice-back").style.filter = "none";
};

//Js for Opera 8.0
if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
    document.getElementById("h3White").style.color = "black";
    document.getElementById("form-game").style.backgroundColor = "transparent";
    document.getElementById("dice-back").style.filter = "none";
}

