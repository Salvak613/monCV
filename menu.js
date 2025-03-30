

// DATE ET HEURE


let datetime = document.querySelector(".datetime")

function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();

    const formattedDateTime = `${hours}:${minutes} <br> ${day}/${month}/${year}`;
    datetime.innerHTML = formattedDateTime
}

setInterval(updateDateTime, 1000);

updateDateTime();


// MENU BURGER START

const startButton = document.querySelector(".startMenu");
const startOpen = document.querySelector(".startOpen");


startButton.addEventListener("click", () => {
    startOpen.classList.toggle("active");
});

document.addEventListener('click', function (event) {
 
    if (!startOpen.contains(event.target) && !startButton.contains(event.target)) {
        startOpen.classList.remove("active");
    }
});



const wallpaperButton = document.querySelector(".wallpaperIcon");
const wallpaperOpen = document.querySelector(".wallpaperOpen");


wallpaperButton.addEventListener("click", () => {
    wallpaperOpen.classList.toggle("active");
});

document.addEventListener('click', function (event) {
 
    if (!wallpaperOpen.contains(event.target) && !wallpaperButton.contains(event.target)) {
        wallpaperOpen.classList.remove("active");
    }
});

// RECHERCHE DANS LA LISTE




const searchBox = document.querySelector(".searchBox");
const menuListItems = document.querySelectorAll(".itemList");

if (searchBox && menuListItems.length > 0) {
    searchBox.addEventListener("input", () => {
        const searchTerm = searchBox.value.toLowerCase();
        startOpen.classList.add("active")

        menuListItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = ""; // 
            } else {
                item.style.display = "none"; 
            }
        });
    });
}




