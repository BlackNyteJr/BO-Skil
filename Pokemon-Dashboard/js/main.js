const pokemonImage = document.getElementById("js--pokemon-image");
const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
const gameOver = document.getElementById("js--gameOver");
let pokemonGamePlayed = false;
let randomNumber = Math.floor(Math.random() * 1000 + 1);
let catchNumber = Math.floor(Math.random() * 2);

let pokemon = fetch ("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
    return response.json();
    })
    .then(function(realData){
        pokemonImage.src = realData.sprites.front_default;
    });

catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
         if(catchNumber === 0){
        pokemonText.innerText = "Pokémon Fled! :(";
        document.getElementById("js--pokemon-text").style.color = "darkred";
         }
         else{
        pokemonText.innerText = "Pokémon Caught! :D"
        document.getElementById("js--pokemon-text").style.color = "darkgreen";
         }
        pokemonGamePlayed = true;
    if(pokemonGamePlayed === true){
           gameOver.style.visibility = "visible";
           document.getElementById("js--gameOver").style.color = "black";
        }

    }
}
//hier begint de movie
const title = document.getElementById("js--movie");
const paragraph = document.getElementById("js--movie-text");
const search = document.getElementById("js--search");
const button = document.getElementById("fetchShow");

let movie = fetch ("https://api.tvmaze.com/shows/71529")
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        title.innerHTML = realData.name;
        paragraph.innerHTML = realData.summary;
    });


button.onclick = function (){
    let input = document.getElementById("js--search").value;
    let url = "https://api.tvmaze.com/shows/" + input;

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(function(realData){
        title.innerText = realData.name;
        paragraph.innerHTML = realData.summary;
    })
}

//hier begint age predictor
const name = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        console.log(inputField.value);
        let age = fetch("https://api.agify.io?name=" + inputField.value)
            .then(function(response){
                return response.json();
            })
            .then(function(echteData){
                inputField.style.display = "none";
                name.innerText = echteData.age;
            });
    }
}
