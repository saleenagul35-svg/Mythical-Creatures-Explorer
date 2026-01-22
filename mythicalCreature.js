document.addEventListener("DOMContentLoaded", function () {
    const creatures = [
        {
            id: 1,
            name: "Dragon",
            image: "./assets/dragon.jpg",
            origin: "Global Mythology",
            description:
                "Dragons are powerful, serpentine creatures often associated with fire, wisdom, and immense strength. They appear in myths across many cultures, symbolizing both destruction and protection."
        },
        {
            id: 2,
            name: "Phoenix",
            image: "./assets/phoenix.jpg",
            origin: "Greek Mythology",
            description:
                "The Phoenix is a legendary bird that cyclically regenerates or is reborn from its ashes, symbolizing immortality, renewal, and the eternal cycle of life."
        },
        {
            id: 3,
            name: "Unicorn",
            image: "./assets/unicorn.jpg",
            origin: "European Folklore",

            description:
                "Unicorns are mystical horse-like creatures with a single spiral horn, representing purity, grace, and healing powers in medieval legends."
        },
        {
            id: 4,
            name: "Kraken",
            image: "./assets/kraken.jpg",
            origin: "Norse Mythology",
            description:
                "The Kraken is a colossal sea monster said to dwell off the coasts of Norway and Greenland, capable of dragging entire ships into the depths of the ocean."
        },
        {
            id: 5,
            name: "Griffin",
            image: "./assets/griffin.png",
            origin: "Ancient Mythology",
            description:
                "With the body of a lion and the head and wings of an eagle, the Griffin is a guardian of treasures and a symbol of divine power and vigilance."
        },

        {
            id: 6,
            name: "Centaur",
            origin: "Greek Mythology",
            image: "./assets/centaur.jpg",
            description: "A centaur is a creature from Greek mythology with the upper body of a human and the lower body and legs of a horse.",


        }
    ];
    // creature page
    let viewedCreatures = [];
    let creaturePage = document.getElementById("creatures-page")
    document.getElementById("creature-btn").addEventListener("click", function () {
        document.getElementById("creature-btn").classList.add("active");
        document.getElementById("home-btn").classList.remove("active");

        document.getElementById("home-page").classList.add("hide");
        creaturePage.classList.remove("hide");

        creaturePage.innerHTML = ""

        creatures.forEach(animal => {
            // card

            let cardContainer = document.createElement("div");
            cardContainer.classList.add("cardContainer");
            cardContainer.innerHTML = `
        <img src=${animal.image} class="animal-image" >
        <h1 class="Animal-name">${animal.name}</h1>
        <h2 class="Animal-origin">${animal.origin}</h2>
        <p class="Animal-description" > ${animal.description}</p>
        <button class="tap" >Click Card to Explore</button>
        `
            creaturePage.appendChild(cardContainer)
            let bottom_bar = document.createElement("div");
            bottom_bar.classList.add("bottom-bar");
            creaturePage.appendChild(bottom_bar);
            // MODAL DISPLAY

            cardContainer.addEventListener("click", function () {

                creaturePage.classList.add("hide");
                document.getElementById("modalOverlay").classList.remove("hide");

                document.getElementById("home-page").classList.add("hide");
                document.getElementById("modalName").textContent = animal.name;
                document.getElementById("modal-image").src = animal.image;
                document.getElementById("modalOrigin").textContent = animal.origin;
                document.getElementById("modalDescription").textContent = animal.description;
                if (!viewedCreatures.includes(animal.id)) {
                    viewedCreatures.push(animal.id);
                }
                const percent = (viewedCreatures.length / creatures.length) * 100;
                document.getElementById("progress").style.width = percent + "%";

                document.getElementById("percentage").textContent = Math.floor(percent) + "% Explored";


            })
        })


    })

    // home page

    document.getElementById("home-btn").addEventListener("click", function () {
        document.getElementById("creature-btn").classList.remove("active");
        document.getElementById("home-btn").classList.add("active");
        document.getElementById("home-page").classList.remove("hide");
        creaturePage.classList.add("hide");
        document.getElementById("modalOverlay").classList.add("hide");

    }
    )

})
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modalOverlay").classList.add("hide");
    document.getElementById("home-page").classList.remove("hide");
    document.getElementById("creature-btn").classList.remove("active");
    document.getElementById("home-btn").classList.add("active");
})