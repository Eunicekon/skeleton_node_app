

const gameData = document.getElementById("gameData");
console.log(gameData);

const pokeData = () => { 
    const promises = [];
    for(let i = 1; i < 21; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
        const bulbaPoke = results.map((data) =>({
            name: data.name,
            id: data.id,
            image: data.sprites['front_shiny'],
        }));
            myPokemon(bulbaPoke);
    });
};

const myPokemon = (bulbaPoke) => {
    console.log(bulbaPoke);
    const pokemonhtmlstring = bulbaPoke.map (poke_mon =>`
        <tbody>
        <tr>
            <td><img src="${poke_mon.image}" </td>
            <td>${poke_mon.id}. ${poke_mon.name}</td>
        </tr>
        </tbody>
    `)
    gameData.innerHTML = pokemonhtmlstring;

};

pokeData();

// Modal

const modal = document.getElementById("pokeModal");
const button = document.getElementById("pokeBtn");

const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
 modal.style.display = "block";
};

span.onclick = function() {
 modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };