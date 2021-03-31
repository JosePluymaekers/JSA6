const list = document.getElementsByClassName('big-five-list-item')
console.log(list)

const listSpotted = document.getElementById('spotted-animals-list')
console.log(listSpotted)

const removeFirst = document.getElementById('remove-first-item-button')

const removeAll = document.getElementById('remove-all-button')


list[0].addEventListener('click', function () {
    const listElementLion = document.createElement("li")
    listElementLion.innerHTML = "lion"
    listSpotted.appendChild(listElementLion)
    console.log("click op lion werkt");
})

list[1].addEventListener('click', function () {
    const listElementLeopard = document.createElement("li")
    listElementLeopard.innerHTML = "leopard"
    listSpotted.appendChild(listElementLeopard)
    console.log("click op leopard werkt");
})

list[2].addEventListener('click', function () {
    const listElementElephant = document.createElement("li")
    listElementElephant.innerHTML = "Elephant"
    listSpotted.appendChild(listElementElephant)
    console.log("click op elephant werkt");
})

list[3].addEventListener('click', function () {
    const listElementRhino = document.createElement("li")
    listElementRhino.innerHTML = "rhino"
    listSpotted.appendChild(listElementRhino)
    console.log("click op rhino werkt");
})

list[4].addEventListener('click', function () {
    const listElementBuffalo = document.createElement("li")
    listElementBuffalo.innerHTML = "buffalo"
    listSpotted.appendChild(listElementBuffalo)
    console.log("click op buffalo werkt");
})


const firstSpotted = document.getElementById("spotted-animals-list")
console.log(firstSpotted)

removeFirst.addEventListener('click', function () {
    listSpotted.removeChild(firstSpotted.firstChild)
})



removeAll.addEventListener('click', function () {
    while (listSpotted.firstChild) {
        listSpotted.removeChild(firstSpotted.firstChild)
    }
})
