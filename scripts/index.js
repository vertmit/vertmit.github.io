const rowcontaniner = document.getElementById("rowcontainer");

let projects = {"Tabs":{"link":"tabs/", "img":"imgs/thumbnails/tabs.png"}, "Polygon Collision":{"link":"https://github.com/vertmit/PolygonCollision", "img":"imgs/thumbnails/pc.png"}, "colconv":{"link":"https://github.com/vertmit/colconv", "img":""}, "PySpell":{"link":"https://github.com/vertmit/pyspell", "img":"imgs/thumbnails/pyspell.png"}};

let projectsKeys = Object.keys(projects);

let amountOfRows = 10;
let amountInRows = 10;

let rows = [];

for (let row = 0; row < amountOfRows; row++) {
    const rowDiv = document.createElement("div")
    
    rowDiv.classList.add("row");
    for (let i = 0; i < amountInRows; i++) {
        let randomProject = projectsKeys[Math.floor(Math.random() * projectsKeys.length)];

        const item = document.createElement("div");
        item.classList.add("item");
        item.style.backgroundImage = `url(${projects[randomProject]["img"]})`;;

        if (projects[randomProject]["img"] === ""){
            const itemTitle = document.createElement("h2");
            itemTitle.classList.add("item-title");
            itemTitle.textContent = randomProject;

            item.appendChild(itemTitle);
        }

        item.addEventListener("click", function(event) {
            window.open(projects[randomProject]["link"]);
        });

        rowDiv.appendChild(item);
    }
    
    rowcontaniner.appendChild(rowDiv);
    rows.push(rowDiv);
}