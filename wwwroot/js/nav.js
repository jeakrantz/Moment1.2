let menu = document.getElementById("menu");
let openMenuBtn = document.getElementById("open-menu-btn");
let closeMenuBtn = document.getElementById("close-menu-btn");

/* Funktion för att öppna menyn */
function openMenu() {
    console.log("Öppna");
    if (menu.style.display = "none"){
        menu.style.display = "inline";
        openMenuBtn.style.display = "none";
        closeMenuBtn.style.display = "inline";
    } 
}

/* Funktion för att stänga menyn */
function closeMenu() {
    console.log("Stäng");
    if (menu.style.display = "inline"){
        menu.style.display = "none";
        openMenuBtn.style.display = "inline";
        closeMenuBtn.style.display = "none";
    }
}