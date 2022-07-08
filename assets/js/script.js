let activeLink = document.querySelectorAll("ul a")[0]
let addMenu = document.querySelector('.icon')
let DisplayMenu = document.querySelectorAll(".menu ul")

activeLink.classList.add("active")

addMenu.addEventListener("click", function(){
    DisplayMenu.forEach(item => {
        item.classList.toggle("showMenu")
    })
})





