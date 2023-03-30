import React from "react";
import ReactDOM from "react-dom";
import { id, clas, log, css } from "./boburka.js";
import { getCode } from "./Countries.js";
import { removeFromList, notFound, close } from "./TopContent.js";
import { getContacts, addContact, removeContact } from "./ListEl.js";

function HiddenListEl(props) {
    return (
        <div className="listElCont" id="hiddenListEl">
            <div className="name bordering" id="hiddenListElName">
                <span className="nameValue" id="hiddenNameValue">{props.name}</span>
                <img onClick={() => { destroy(id("hiddenNameValue").innerHTML) }} className="trash" src={require("./media/trash.png")} />
            </div>
            <div className="details detailsOpen" id="hiddenListElDetails">
                <div className="copied" id="hiddenCopied">
                    Copied ☑️
                </div>
                <div className="shadow shadowOpen" id="hiddenListElShadow"></div>
                <div className="phone" id="hiddenListElPhone" onClick={(e) => {
                    if (id("hiddenListElPhone").innerHTML != "No information available") {
                        navigator.clipboard.writeText(e.target.innerHTML);
                        id("hiddenCopied").className = "copied";
                        setTimeout(function () {
                            id("hiddenCopied").className = "copied copiedAnimation";
                        }, 10);
                        setTimeout(function () {
                            id("hiddenCopied").className = "copied";
                        }, 1600)
                    }
                }}>{props.phone}</div>
                <div className="email" id="hiddenListElEmail"><a href={"mailto:" + props.email}>{props.email}</a></div>
            </div>
        </div>
    )
}

function destroy(name) {
    removeContact(name);
    for (var i = 1; i < clas("nameValue").length - 1; i++) {
        if (clas("nameValue")[i].innerHTML == name) {
            clas("mia")[i-1].remove();
        }
    }
    id("searchBar").value = "";
    id("phoneInput").value = "";
    id("emailInput").value = "";
    id("searchButton").innerHTML = "Search";
    id("searchButton").className = "search";
    close();
    notFound();
}

export default HiddenListEl;