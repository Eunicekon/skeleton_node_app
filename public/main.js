

const gameData = document.getElementById("gameData");
console.log(gameData);

const pokeData = () => { 
    const promises = [];
    for(let i = 1; i < 20; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) =>({
            name: data.name,
            id: data.id,
            image: data.sprites['front_shiny'],
        }));
            myPokemon(pokemon);
    });
};

const myPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonhtmlstring = pokemon.map (poke_mon =>`
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