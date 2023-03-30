import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './Top';
import WallpapersCheck from './WallpapersCheck';
import { id, clas, log, css } from "./boburka.js";
import List from './List';
import ListEl from './ListEl';
import HiddenListEl from './HiddenListEl';
import {close, open, inputCheck, append} from './TopContent';

ReactDOM.render(
  <List/>,
  id("listDiv")
)
ReactDOM.render(
  <HiddenListEl/>,
  id("hiddenListDiv"));

ReactDOM.render(
  <Top/>,
  id("topModule")
);
function menuClose() {
  id("settingsMenu").style.transition = "top 0.3s ease-in, right  0.3s ease-in, font-size 0.5s ease-in, height 0.5s ease-in, padding 0.5s 0.2s, width 0.6s ease-in-out";
  id("settingsMenu").style.top = "9vh";
  id("settingsMenu").style.right = "9vh";
  id("settingsMenu").style.width = "0";
  id("settingsMenu").style.height = "0";
  id("settingsMenu").style.padding = "0";
  id("settingsMenu").style.fontSize = "0";
  id("settings").className = "";

  setTimeout(function () {
    id("settingsMenu").style.transition = "top 0.3s ease-out, right 0.3s ease-out, font-size 0.5s ease-in, height 0.5s ease-in, padding 0.5s 0.2s, width 0.6s ease-in-out";
    id("settingsMenu").style.zIndex = "1";
    id("settings").style.zIndex = "2";
    id("settingsMenu").style.top = "calc(min(10vh, 10vw)/2 + 1.1vh)";
    id("settingsMenu").style.right = "calc(min(10vh, 10vw)/2 + 0.4vw)";
  }, 300)
}
function menuOpen() {
  id("settingsMenu").style.transition = "top 0.3s ease-in, right 0.3s ease-in, font-size 0.5s ease-in, height 0.5s ease-in, padding, width 0.6s ease-in-out";
  id("settings").className = "touched";

  setTimeout(function () {
    id("settingsMenu").style.top = "9vh";
    id("settingsMenu").style.right = "9vh";
    id("settingsMenu").style.width = "20vw";
    id("settingsMenu").style.height = "90vh";
    id("settingsMenu").style.padding = "3vh 1vw";
    id("settingsMenu").style.fontSize = "calc(10px + min(3vh, 2vw))";
  }, 200)
  setTimeout(function () {
    id("settingsMenu").style.transition = "top 0.3s ease-out, right 0.3s ease-out, font-size 0.5s ease-in, height 0.5s ease-in, padding, width 0.6s ease-in-out";
    id("settingsMenu").style.zIndex = "2";
    id("settings").style.zIndex = "1";
    id("settingsMenu").style.top = "0vh";
    id("settingsMenu").style.right = "1vw";
  }, 500)
}


id("settings").addEventListener("click", () =>{menuOpen();});
id("offTop").addEventListener("click", () => {menuClose()});
id("topContent").addEventListener("click", () => {menuClose();});
id("list").addEventListener("click", () => {menuClose()});
id("searchBar").addEventListener("click", (e) => {menuClose()});
id("searchButton").addEventListener("click", (e) => {menuClose(); append()});
id("count")
id("phoneInput").value = "(+49) ";

function resize(){
  if (id("hiddenDetailsContainer").classList.contains("open")){
    id("hiddenDetailsContainer").style.marginTop = "calc(" + css("visible", "height") + "px" + " + 0.5vh)";
  }
  for (var i = 0; i < clas("countries").length; i++) {
    clas("countries")[i].style.width = css("country0", "height")*3/2 + "px";
  }
  id('list').style.top = "calc(" + css("top", "height") + "px + 3vh)";
  id('hiddenListEl').style.top = "calc(" + css("top", "height") + "px + 3vh)";
}
resize();
window.onresize = resize;

