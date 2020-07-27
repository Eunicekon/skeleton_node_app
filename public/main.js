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


// const navPosition = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
    
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         navLinks.forEach((link, index) =>{
//             if (link.style.animation) {
//                 link.style.animation = ''
//             }else{link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
//         }
//         });
//     });
// }

// navPosition();
