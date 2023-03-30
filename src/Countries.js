import React from "react";
import { id, clas, log, css } from "./boburka.js";
var state = "closed";
function dropDown() {
    if (state == "closed") {
        id("countriesContainer").style.height = "5em";
        id("countriesContainer").style.padding = "0.5em";
        id("countriesContainer").style.transform = "translate(-.5em, -.5em)";
        for (var i = 0; i < clas("countries").length - 1; i++) {
            clas("countries")[i].style.display = "block";
            clas("countries")[i].style.opacity = "1";
            clas("countries")[i].style.transform = "translateY(calc(" + css("country0", "height") * (i + 1) + "px + " + 0.5 * (i + 1) + "vh))";
        }
        state = "open";
    }
    else{
        hide();
    }
}
function hide() {
    id("countriesContainer").style.height = "0";
    id("countriesContainer").style.padding = "0";
    id("countriesContainer").style.transform = "translate(0, 0)";
    for (var i = 0; i < clas("countries").length - 1; i++) {
        clas("countries")[i].style.opacity = "0";
        clas("countries")[i].style.transform = "translateY(0)";
        var x = clas("countries")[i];
        setTimeout(() => {
            x.style.display = "none";
        }, 300);
    }
    state = "closed";
}
document.body.addEventListener("click", (event) => { if (event.target != id("country0")) { hide() } });

var flags = { 0: "ger", 1: "uzb", 2: "usa", 3: "ru" };
var codes = {"ger": "(+49) ", "uzb": "(+998) ", "usa": "(+1) ", "ru": "(+7) "}

var current = "ger";
var countryCode = "(+49) ";
export function getCode(){
    return countryCode;
}
function choose(clicked) {
    var clickedFlag = flags[clicked];
    id("country0").src = require("./media/" + flags[clicked] + ".png");
    flags[0] = flags[clicked];
    flags[clicked] = current;
    id("country" + clicked).src = require("./media/" + current + ".png");
    current = clickedFlag;
    id("phoneInput").value = id("phoneInput").value.replace(countryCode, codes[current]);
    countryCode = codes[current];
}

function Countries() {
    return (
        <div id="countriesDiv">
            <div id="countriesContainer">
                <img id="country3" onClick={() => { choose(3) }} className="countries" src={require("./media/ru.png")} />
                <img id="country2" onClick={() => { choose(2) }} className="countries" src={require("./media/usa.png")} />
                <img id="country1" onClick={() => { choose(1) }} className="countries" src={require("./media/uzb.png")} />
                <img id="country0" onClick={dropDown} className="countries" src={require("./media/ger.png")} />
            </div>
        </div>
    )
}
export default Countries;