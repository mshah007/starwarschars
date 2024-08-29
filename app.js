const person = document.querySelector("p");
const button = document.querySelector("button");
const main = document.querySelector(".main");
let dataArray = [];
let url = `https://akabab.github.io/starwars-api/api/all.json`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    dataArray = data;
  });
button.addEventListener("click", () => {
  let rando = Math.floor(Math.random() * 87);
  displayDetails(dataArray[rando]);
});
function displayDetails(data) {
  main.innerHTML = "";
  main.innerHTML += `<img src="${data.image}" alt=""></img>`;
  main.innerHTML += `<p>${data.name}</p>`;
  main.innerHTML += `<p>Hair Color:  ${data.hairColor}</p>`;
  main.innerHTML += `<p>Gender:  ${data.gender}</p>`;
  main.innerHTML += `<p>Species:  ${data.species}</p>`;
  main.innerHTML += `<p>Homeworld:  ${data.homeworld}</p>`;
  main.innerHTML += `<p>Birth:  ${data.bornLocation}</p>`;
  main.innerHTML += `<p>Death:  ${data.diedLocation}</p>`;
}
