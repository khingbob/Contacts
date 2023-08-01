import React from "react";
import ReactDOM from "react-dom";
import { id, clas, log, css } from "./boburka.js";
import { getCode } from "./Countries.js";
import { removeFromList } from "./TopContent.js";

var counter = 0;
var list = [
  "BobDaBodybuilder",
  "Nina",
  "Emily",
  "Jessy",
  "Maggy",
  "Katrina",
  "Arnold Weißnegger",
  "Will мать его Smith",
  "Zuzu",
  "BCUM",
  "DO NOT PICK UP!",
  "ZuckerMutti ❤️",
  "The Indian Guy",
  "Yazan's mom",
];
var contacts = {};
for (var i in list) {
  contacts[list[i]] = {
    phone: "(+69) 420 696969",
    email: "mrbobdaprogrammer@gmail.com",
  };
}

export function getContacts() {
  return contacts;
}
export function addContact(name, phone, email) {
  contacts[name] = { phone: phone, email: email };
}
export function removeContact(name) {
  delete contacts[name];
}
export function getDets() {
  if (id("phoneInput").value === getCode() && id("emailInput").value === "") {
    return ["No information available", ""];
  } else if (id("phoneInput").value === getCode()) {
    return ["", id("emailInput").value];
  } else {
    return [id("phoneInput").value, id("emailInput").value];
  }
}
var idcounter = 0;
function ListEl(props) {
  var nameValue = id("searchBar").value;
  var newid = "a" + idcounter;
  var newshadow = "b" + idcounter;
  var copid = "cop" + idcounter;
  var nameid = "n" + idcounter;
  var phoneid = "ph" + idcounter;
  var miaId = "mia" + idcounter++;
  if (props.spawn) {
    return (
      <div className="listElCont">
        <div
          className="name"
          onClick={(e) => {
            id(newid).classList.toggle("detailsOpen");
            id(newshadow).classList.toggle("shadowOpen");
            e.target.classList.toggle("bordering");
            id(miaId).classList.toggle("miaPush");
          }}
        >
          <span className="nameValue" id={nameid}>
            {list[counter++ % 14]}
          </span>
          <img
            onClick={(e) => {
              destroy(e, props.miaObj, nameValue);
            }}
            className="trash"
            src={require("./media/trash.png")}
          />
        </div>
        <div className="details" id={newid}>
          <div className="copied" id={copid}>
            Copied ☑️
          </div>
          <div className="shadow" id={newshadow}></div>
          <div
            className="phone"
            id={phoneid}
            onClick={(e) => {
              if (id(phoneid).innerHTML != "No information available") {
                navigator.clipboard.writeText(e.target.innerHTML);
                id(copid).className = "copied";
                setTimeout(function () {
                  id(copid).className = "copied copiedAnimation";
                }, 10);
                setTimeout(function () {
                  id(copid).className = "copied";
                }, 1600);
              }
            }}
          >
            (+69) 420 696969
          </div>
          <div className="email">
            <a href="mailto: mrbobdaprogrammer@gmail.com">
              mrbobdaprogrammer@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="listElCont">
      <div
        className="name"
        onClick={(e) => {
          id(newid).classList.toggle("detailsOpen");
          id(newshadow).classList.toggle("shadowOpen");
          e.target.classList.toggle("bordering");
          id(miaId).classList.toggle("miaPush");
        }}
      >
        <span className="nameValue" id={nameid}>
          {id("searchBar").value}
        </span>
        <img
          onClick={(e) => {
            destroy(e, props.miaObj, id("searchBar"));
          }}
          className="trash"
          src={require("./media/trash.png")}
        />
      </div>
      <div className="details" id={newid}>
        <div className="copied" id={copid}>
          Copied ☑️
        </div>
        <div className="shadow" id={newshadow}></div>
        <div
          className="phone"
          id={phoneid}
          onClick={(e) => {
            if (id(phoneid).innerHTML != "No information available") {
              navigator.clipboard.writeText(e.target.innerHTML);
              id(copid).className = "copied";
              setTimeout(function () {
                id(copid).className = "copied copiedAnimation";
              }, 10);
              setTimeout(function () {
                id(copid).className = "copied";
              }, 1600);
            }
          }}
        >
          {getDets()[0]}
        </div>
        <div className="email">
          <a href={"mailto:" + getDets()[1]}>{getDets()[1]}</a>
        </div>
      </div>
    </div>
  );
}

function destroy(e, obj, name) {
  removeContact(name);
  obj.style.opacity = "0";
  setTimeout(function () {
    obj.style.height = "0px";
    obj.style.marginBottom = "0";
  }, 10);
  setTimeout(function () {
    obj.remove();
  }, 1000);
  e.stopPropagation();
}

export default ListEl;
