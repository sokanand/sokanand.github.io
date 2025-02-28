
// function SetGameWindow(){
//     // window.alert(selectedGame);
//     document.getElementById("gameWindow").src = GetGame();//"JumpOverTheGround/Jump Over The Ground.html";
// }
window.onload = function() {
    
    new URLSearchParams(window.location.search).forEach((value, name) => { document.getElementById("gameWindow").src = name})
};