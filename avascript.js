let profilemenu=document.getElementById("profilemenu");


function togglemenu() {
    profilemenu.classList.toggle("open-menu")
}
let sidebaractivity=document.getElementById("sidebar-activity");
let showmore=document.getElementById("showmore-link");

showmore.addEventListener("click",()=>{
    sidebaractivity.classList.toggle("open-activity");

    if (sidebaractivity.classList.contains("open-activity")) {
        showmore.innerHTML="more less <b>.</b>" ;
    }
    else{
        showmore.innerHTML="show more <b>.</b>"
    }
})