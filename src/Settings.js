import React from "react";
import WallpapersCheck from "./WallpapersCheck";

const Settings = () => {
    return (
        <div id="settingsDiv">
            <img src={require('../src/media/sticker.webp')} id="settings"/>
            <div id="menuModule">
                <WallpapersCheck idtxt = ""/>
            </div>
        </div>
    )
};

export default Settings;