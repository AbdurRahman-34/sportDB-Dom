const allPlayers = () => {
    const searchValue = document.getElementById("search-box").value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => showplayerDetails(data.player))
}

const showplayerDetails = players => {
    const parent = document.getElementById("player-conatiner");
    players.forEach(player =>{
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card border w-75 p-3 mb-3">
                <div class="pro-pic">
                    <img class = "w-50 py-3" src="${player.strThumb}" alt="">
                </div>
                <h3>Name : ${player.strPlayer}</h3>
                <h5>Country : ${player.strNationality}</h5>
                <p></p>
                <div class="all-button">
                    <button class="btn-danger">Delate</button>
                    <button onclick = "details('${player.idPlayer}')" class="btn-primary">Details</button>
                </div>
                </div>
            
            `;
        parent.appendChild(div)
        console.log(players)
    }); 
}

  
// details area 
const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setDetails(data.players[0]))
}

const setDetails = (info) => {
   document.getElementById("details-container").innerHTML = `
   <div class ="detils-area"> 
   <img class = "w-50" src ="${info.strThumb}" alt ="null image"/>
   <h3 class ="text-white pt-5">Name : ${info.strPlayer}</h3>
   <h4 class ="text-white" >Possition : ${info.strPosition} </h4>
   </div>
   
   `
console.log(info)
}