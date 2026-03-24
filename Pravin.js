var sideNav = document.querySelector(".side-navbar")

function showNavbar(){
    sideNav.style.left = "0"
}

function closeNavbar(){
    sideNav.style.left = "-60%"
}

document.querySelectorAll(".side-navbar a").forEach(link => {
    link.addEventListener("click", () => 
    {
        document.querySelector(".side-navbar").style.left = "-100%";
    });
});

