const personajes = [
    "mad_maggie", "ash", "alter", "ballistic", "bangalore", "bloodhound", "catalyst",
    "caustic", "conduit", "crypto", "fuse", "gibraltar", "horizon", "lifeline", "loba",
    "mirage", "newcastle", "octane", "pathfinder", "rampart", "revenant", "seer",
    "sparrow", "valkyrie", "vantage", "wattson", "wraith"
];

const container = document.getElementById("card-container");

personajes.forEach(nombre => {
    const card = document.createElement("a");
    card.href = `personajes/${nombre}.html`;
    card.className = "card";

    const img = document.createElement("img");
    img.src = `src/images/${nombre}.jpg`;
    img.alt = nombre;

    const span = document.createElement("span");
    span.textContent = nombre.replace("_", " ").toUpperCase();

    const audio = new Audio(`src/audio/${nombre}.mp3`);

    card.addEventListener("mouseenter", () => {
        audio.currentTime = 0;
        audio.play();
    });

    card.appendChild(img);
    card.appendChild(span);
    container.appendChild(card);
});
