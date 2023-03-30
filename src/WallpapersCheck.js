import React from "react";
function clas(classtext) { return document.getElementsByClassName(classtext); }
function id(idtxt) {
    return document.getElementById(idtxt);
}

var wallpapers = {
    "wall0": "wallpaper1",
    "wall1": "wallpaper2",
    "wall2": "wallpaper3",
    "wall3": "wallpaper4",
    "wall4": "wallpaper5",
    "wall5": "wallpaper6",
    "wall6": "wallpaper7"
}
var currentWallpaper = "wallpaper0";
var offTop = false;
function action(idtxt){
    if (offTop) {
        document.body.style.backgroundImage = "url(" + require('../src/media/' + wallpapers[idtxt] + '.jpg') + ")";
        id("offTop").style.opacity = 0;
        offTop = false;
    }
    else {
        id("offTop").style.backgroundImage = "url(" + require('../src/media/' + wallpapers[idtxt] + '.jpg') + ")";
        id("offTop").style.opacity = 1;
        offTop = true;
    }

    id(idtxt).style.marginLeft = "-100%";
    id(idtxt).style.opacity = 0;
    id(idtxt).style.height = 0;
    id(idtxt).style.marginBottom = 0;
    var lastEl = clas("wallpaper")[clas("wallpaper").length-1];
    var img = document.createElement("img");
    img.src = require("../src/media/" + currentWallpaper+"low.jpg");
    img.className = "wallpaper";
    var cache = currentWallpaper;
    currentWallpaper = wallpapers[idtxt];
    wallpapers[idtxt] = cache;
    img.id = idtxt;
    img.onclick = () => {action(idtxt)};
    lastEl.className = "wallpaper noTrans";
    lastEl.style.marginBottom = "20vh";
    setTimeout(() => {
        lastEl.className = "wallpaper lastWall";
        lastEl.style.marginBottom = "2vh"
    }, 10)
    setTimeout(() => {lastEl.className = "wallpaper"}, 500)
    
    id("settingsMenu").appendChild(img);
    setTimeout(() => {lastEl.style.marginBottom = "2vh"},600);



    setTimeout(function(){
        id(idtxt).remove();
    }, 1000)
}



function WallpapersCheck(props) {
    if (props.idtxt != "") {
        action(props.idtxt)
    }
    return (
        <div id="settingsMenu">
            <div id="settingsHeader"> Wallpaper </div>
            <img src={require('../src/media/' + wallpapers["wall0"] + 'low.jpg')} className="wallpaper" id="wall0" onClick={() => {action("wall0")}} />
            <img src={require('../src/media/' + wallpapers['wall1'] + 'low.jpg')} className="wallpaper" id="wall1" onClick={() => {action("wall1")}} />
            <img src={require('../src/media/' + wallpapers["wall2"] + 'low.jpg')} className="wallpaper" id="wall2" onClick={() => {action("wall2")}} />
            <img src={require('../src/media/' + wallpapers["wall3"] + 'low.jpg')} className="wallpaper" id="wall3" onClick={() => {action("wall3")}} />
            <img src={require('../src/media/' + wallpapers["wall4"] + 'low.jpg')} className="wallpaper" id="wall4" onClick={() => {action("wall4")}} />
            <img src={require('../src/media/' + wallpapers["wall5"] + 'low.jpg')} className="wallpaper" id="wall5" onClick={() => {action("wall5")}} />
            <img src={require('../src/media/' + wallpapers["wall6"] + 'low.jpg')} className="wallpaper" id="wall6" onClick={() => {action("wall6")}} />
        </div>
    )
}

export default WallpapersCheck;