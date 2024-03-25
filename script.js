let tracks = [["Trust Issues", "800pts"], ["CLAY HEART", "Raeusi"], ["Сегодня", "xxxmanera"], ["Не спят", "xxxmanera"], ["x cash (Prod. by BEAPIU)", "amorbaby, sinaimaname"], ["Кобра", "LIL KRYSTALLL"], ["LUV", "ROCKET"], ["Телефончик","SKIDRI"], ["Все Сам", "Showbiz School"], ["Back To Back", "FRIENDLY THUG 52 NGG, Hugo Loud"], ["Японский флажок", "ESKIN, CAKEBOY"]];
let titleInput = document.getElementById("musicTitle");
let performerInput = document.getElementById("musicPerformer");

function displayMusic() {
    let musicContainer = document.getElementById("musicContainer");
    musicContainer.innerHTML = "";

    for (let i = 0; i < tracks.length; i++) {
        let musicDiv = document.createElement("div");
        musicDiv.className = "cards__tracks";

        musicDiv.innerHTML = `<h3>${tracks[i][0]}</h3><p>${tracks[i][1]}</p>`;
        musicContainer.appendChild(musicDiv)
    }
}

displayMusic();

function addTrack() {
    if (titleInput.value === "", performerInput.value === "") {
        alert("Введите название трека и исполнителя!");
    } else {
        let titleInput = document.getElementById("musicTitle");
        let performerInput = document.getElementById("musicPerformer");

        let newTrack = [titleInput.value, performerInput.value];

        tracks.push(newTrack);

        displayMusic();

        titleInput.value = "";
        performerInput.value = "";
    }
}

document.getElementById("addButton").addEventListener("click", addTrack);