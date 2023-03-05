import designPatterns from "../img/9781449331818.jpg"
import speakingJs from "../img/9781449365035.jpg"
import ecmaScript from "../img/9781593277574.jpg"
import dontKnowJS from "../img/9781491904244.jpg"
import gitPocket from "../img/9781449325862.jpg"
import eloquentJs from "../img/9781593275846.jpg"
import jsApplications from "../img/9781491950296.jpg"
import evolvableWebApis from "../img/9781449337711.jpg"
import placeholder from "../img/placeholder.png"

export const imageBook = (isbn) => {
    if (isbn === "9781449331818") return designPatterns;
    if (isbn === "9781449365035") return speakingJs;
    if (isbn === "9781491950296") return jsApplications;
    if (isbn === "9781593277574") return ecmaScript;
    if (isbn === "9781491904244") return dontKnowJS;
    if (isbn === "9781449325862") return gitPocket;
    if (isbn === "9781593275846") return eloquentJs;
    if (isbn === "9781449337711") return evolvableWebApis;
    return placeholder
}