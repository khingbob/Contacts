import React from "react";
import ReactDOM from "react-dom";
import { id, clas, log, css } from "./boburka.js";
import Countries from "./Countries.js";
import { getCode } from "./Countries.js";
import ListEl from "./ListEl.js";
import { addContact, getDets, getContacts } from "./ListEl.js";
import Top from "./Top.js";
import HiddenListEl from "./HiddenListEl.js";

var state = "search";
export function open() {
    id("hiddenDetailsContainer").className = "open";
    id("hiddenDetailsContainer").style.display = "";
    id("hiddenDetailsContainer").style.marginTop = "calc(" + css("visible", "height") + "px" + " + 0.5vh)";
    id("hiddenDetails").style.opacity = "1";
}
export function close() {
    id("hiddenDetailsContainer").className = "closed";
    id("hiddenDetailsContainer").style.marginTop = "0";
    id("hiddenDetails").style.opacity = "0";
    setTimeout(function () {
        id("hiddenDetailsContainer").style.display = "none";
    }, 300)
}
export function found() {
    if(getContacts()[id("searchBar").value]["phone"] == "" || getContacts()[id("searchBar").value]["email"] == ""){
        id("hiddenCopied").style.top = "50%";
        id("hiddenCopied").style.transform = "translateY(-50%)";
    }   
    id("list").style.opacity = "0"
    setTimeout(function () {
        id("list").style.display = "none";
        updateHidden(id("searchBar").value, getContacts()[id("searchBar").value]["phone"], getContacts()[id("searchBar").value]["email"])
        id("hiddenListDiv").style.display = "block";
        setTimeout(function () {
            id("hiddenListDiv").style.opacity = "1";
        }, 50);
    }, 250);
}
export function notFound() {
    id("list").style.display = "block";
    id("hiddenListDiv").style.opacity = "0";
    setTimeout(function () {
        id("list").style.opacity = "1";
        id("hiddenListDiv").style.display = "none";
    }, 110);
}
function updateHidden(nametxt, phonetxt, emailtxt) {
    ReactDOM.render(
        <HiddenListEl name={nametxt} phone={phonetxt} email={emailtxt} />,
        id("hiddenListDiv")
    );
}
export function inputCheck() {
    var searchBar = id("searchBar");
    var button = id("searchButton");
    if (searchBar.value == "") {
        button.className = "search";
        button.innerHTML = "Search";
        close();
        notFound();
        return;
    }
    for (var i = 1; i < clas("nameValue").length; i++) {
        if (searchBar.value == clas("nameValue")[i].innerHTML) {
            button.className = "found";
            button.innerHTML = "Found";
            close();
            found();
            return;
        }
    }

    button.className = "add";
    button.innerHTML = "Add";
    open();
    notFound();
}

var min = false;
var min2 = false;
var min3 = false;

function minus(position, obj) {
    if (obj.value.slice(getCode().length, obj.value.length).length == position) {
        if (!min) {
            obj.value += " ";
            min = true;
        }
        else {
            min = false;
        }
    }
    else if (obj.value.slice(getCode().length, obj.value.length).length == position + 1) {
        if (min) {
            obj.value = obj.value.slice(0, obj.value.length - 1);
            min = false
        }
        else {
            obj.value = obj.value.slice(0, obj.value.length - 1) + " " + obj.value[obj.value.length - 1];
            min = true;
        }
    }
}

function phoneCheck(obj) {
    if (obj.value.slice(0, getCode().length) != getCode()) {
        obj.value = getCode();
    }

    minus(3, obj);

}
function enter(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
        append("Enter");
    }
}
const TopContent = () => {
    return (
        <div id="topContent">
            <div id="hiddenDetailsContainer" className="closed">
                <div id="hiddenDetails">
                    <div id="hiddenPhone">
                        <div id="flexPhone">
                            <Countries />
                            <input onKeyUp={enter} className="hiddenInp" id="phoneInput" onInput={() => phoneCheck(id("phoneInput"))} type="tel" placeholder="Phone" autoComplete="off" name="phoneInput" />
                        </div>
                    </div>
                    <div id="hiddenEmail">
                        <input onKeyUp={enter} className="hiddenInp" id="emailInput" type="email" placeholder="Email" autoComplete="off" />
                    </div>
                </div>
            </div>
            <div id="visible">
                <div id="header">
                    <span id="headspan">Contacts</span>
                </div>
                <div id="search">
                    <input id="searchBar" onInput={inputCheck} onKeyUp={enter} type="text" placeholder="Name" autoComplete="off" />
                    <button className="search" id="searchButton">Search</button>
                </div>
            </div>
        </div>
    )
}
var idcounter = 0;
export function append(e) {
    var to = 1;
    var spawn = false;
    if (e === "Enter" && id("searchButton").innerHTML == "Add" || id("searchButton").innerHTML == "Add") {
        if (id("searchBar").value.toLowerCase() == "spawn") {
            to = 14;
            spawn = true;
        }
        for (var i = 0; i < to; i++) {
            addContact(id("searchBar").value, getDets()[0], getDets()[1]);
            var mia = document.createElement("div");
            mia.className = "mia";
            mia.id = "mia" + idcounter;
            id("list").appendChild(mia);
            ReactDOM.render(<ListEl miaObj={mia} spawn={spawn} />, mia);
            if (getContacts()[id("n"+idcounter).innerHTML]["phone"] == "No information available") {
                id("ph" + idcounter).className = "noInfo";
            }
            if(getDets()[0] == "" || getDets()[1] == ""){
                id("cop" + idcounter).style.top = "50%";
                id("cop" + idcounter).style.transform = "translateY(-50%)";
            }   
            mia.style.opacity = "1";
            id("searchBar").value = "";
            id("phoneInput").value = getCode();
            id("emailInput").value = "";
            inputCheck();
            mia.scrollIntoView({ behavior: "smooth" });
            idcounter++;
        }
    }
}


export default TopContent;
