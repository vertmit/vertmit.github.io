const background = document.getElementById("bg");

document.addEventListener("mousemove", (e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
    background.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgb(12, 44, 92) 50px, rgb(7, 18, 36) 200px)`
});

const projects = [
    {
        "name": "Tabs",
        "thumbnail": "imgs/thumbnails/tabs.png",
        "description": "Tabs is an easy and simple way to store important data about people you don't want to forget. This tool is more targeted to the everyday person.",
        "chips": ["Website", "HTML", "CSS", "Java Script"],
        "link": "https://vertmit.github.io/tabs/",
        "links": [["solid", "globe", "https://vertmit.github.io/tabs/"], ["brands", "github", "https://github.com/vertmit/tabs"]]
    },
    {
        "name": "Polygon Collision",
        "thumbnail": "imgs/thumbnails/pc.png",
        "description": "Polygon collision is a simple collision tool, used in python, that detects if two polygons are colliding. You can also check for circle colisions.",
        "chips": ["Python", "PIP Package"],
        "link": "https://pypi.org/project/PolygonCollision/",
        "links": [["brands", "python", "https://pypi.org/project/PolygonCollision/"], ["brands", "github", "https://github.com/vertmit/PolygonCollision"]]
    },
    {
        "name": "Pyspell",
        "thumbnail": "imgs/thumbnails/pyspell.png",
        "description": "Pyspell is a tool that gives the closest words to an inputted word, ussualy for spellcheck corrections.",
        "chips": ["Python", "PIP Package"],
        "link": "https://pypi.org/project/pyspell/",
        "links": [["brands", "python", "https://pypi.org/project/pyspell/"], ["brands", "github", "https://github.com/vertmit/pyspell"]]
    },
    {
        "name": "Vision Test",
        "thumbnail": "imgs/thumbnails/vision.png",
        "description": "Vision test is a game that tests your vision. You are given a set of characters and need to click on the odd one out.",
        "chips": ["Website", "HTML", "CSS", "Java Script"],
        "link": "https://vertmit.github.io/vision/",
        "links": [["solid", "globe", "https://vertmit.github.io/vision/"], ["brands", "github", "https://github.com/vertmit/vision"]]
    }
];

const projectcontainer = document.getElementById("projects")

for (let project of projects) {
    const projectlink = document.createElement("a")
    projectlink.href = project.link
    projectlink.target = "_blank"

    const projectdiv = document.createElement("div");
    projectdiv.classList.add("project");

    const projectthumbnail = document.createElement("div")
    projectthumbnail.classList.add("thumbnail")
    projectthumbnail.style.backgroundImage = `url('${project.thumbnail}')`
    projectdiv.appendChild(projectthumbnail)

    const projecttextcontent = document.createElement("div")
    projecttextcontent.classList.add("textcontent")
    projectdiv.appendChild(projecttextcontent)

    const projectname = document.createElement("h3")
    projectname.textContent = project.name
    projecttextcontent.appendChild(projectname)

    const projectdes = document.createElement("p")
    projectdes.textContent = project.description
    projecttextcontent.appendChild(projectdes)

    const chipcontainer = document.createElement("div")
    chipcontainer.classList.add("chipcontainer")
    projecttextcontent.appendChild(chipcontainer)
    if (project.chips)
    for (let chip of project.chips) {
        const chipdiv = document.createElement("div")
        chipdiv.textContent = chip
        chipdiv.classList.add("chip")
        chipcontainer.appendChild(chipdiv)
    }

    const linkcontainer = document.createElement("div")
    linkcontainer.classList.add("linkcontainer")
    projecttextcontent.appendChild(linkcontainer)
    if (project.links) {
        for (let link of project.links) {
            const linkherf = document.createElement("a")
            linkherf.href = link[2]
            linkherf.target = "_blank"
            linkcontainer.appendChild(linkherf)

            const icon = document.createElement("i")
            icon.classList.add(`fa-${link[0]}`)
            icon.classList.add(`fa-${link[1]}`)
            linkherf.appendChild(icon)
        }
    }
    projectlink.appendChild(projectdiv)
    projectcontainer.appendChild(projectlink)
}