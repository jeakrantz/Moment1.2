/*     
    Moment 1.1 - Razor
    Kurs: Webbutveckling med .NET
    Utvecklare: Jeanette Krantz
    Datum: 2024-02-06
 */

let menuE = document.getElementById("menu");
let openMenuBtnE = document.getElementById("open-menu-btn");
let closeMenuBtnE = document.getElementById("close-menu-btn");

/* Funktion för att gömma meny-knappar och visa menyn i större skärmar */
function removeBtn(){
    console.log("Stort1");
    if(window.innerWidth > 768){
        openMenuBtnE.style.display = "none";
        closeMenuBtnE.style.display = "none";
        menuE.style.display = "inline"
    } else {
        openMenuBtnE.style.display = "inline";
        menuE.style.display = "none"
    }
}
