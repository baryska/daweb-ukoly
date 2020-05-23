'use strict';

const movieTemplate = Handlebars.compile(
  'Film {{title}} začíná v {{time}}, sál číslo {{hall}}'
);

const movie1 = {
  title: 'Casablanca',
  time: '19:30',
  hall: 7,
};

const movie2 = {
  title: 'Pulp Fiction',
  time: '18:30',
  hall: 6,
};

const movie3 = {
  title: 'Pelíšky',
  time: '17:30',
  hall: 9,
};

//const cinemaTemplate = Handlebars.compile(`Kino {{name}}, adresa: {{address}}`)
const cinemaTemplate = Handlebars.compile(`<span class="name">{{name}}</span><span class="address">{{address}}</span>`)

const cinema1 = {
  name: 'Světozor',
  address: 'Vodičkova 41',
  movies: [
    {
      title: 'Casablanca',
      time: '18:30',
      hall: 7,
    },
    {
      title: 'Pán prstenů: Dvě věže',
      time: '17:45',
      hall: 4,
    },
    {
      title: 'Pulp Fiction',
      time: '18:45',
      hall: 5,
    },
    {
      title: 'Pelíšky',
      time: '20:45',
      hall: 3,
    },
  ],
};

const cinema2 = {
  name: 'Bio Oko',
  address: 'Františka Křížka 460/15'
}

const cinema3 = {
  name: 'Aero',
  address: 'Biskupcova 31'
}

const cinemaHeadElm = document.querySelector('.cinema__head')
cinemaHeadElm.innerHTML = cinemaTemplate(cinema1)

//-------------------------------//

const cinemaTemplate2 = Handlebars.compile(
  document.querySelector('#cinema_template').innerHTML) //šablona vyrobena pomocí <template> v HTML


// const tempElm = document.createElement('div')
// tempElm.innerHTML = cinemaTemplate2(cinema1.movies[0])


// vyrábíme DOM element z dat pomocí šablony, nikoliv pomocí přímého vložení HTML
const renderMovie = (movie) => {                // parametr movie je náhodně vybraný - bude zastoupen objektem, který zadáme při volání funkce (např. cinema1.movies[0])
  const tempElm = document.createElement('div')
  tempElm.innerHTML = cinemaTemplate2(movie) // stejný parametr (movie) bude i parametrem šablony, protože to je HTML elementu vytvořeného funkcí renderMovie
  return tempElm.children[0] // "maže" obalovací div DOM elementu tempElm
}

console.log(renderMovie(cinema1.movies[0])) //kontrola
console.log(renderMovie(cinema1.movies[1]))

//DOM element připojujeme na stránku:
for (let i = 0; i < cinema1.movies.length; i++) {
  const cinemaMoviesElm = document.querySelector('.cinema__movies');
  cinemaMoviesElm.appendChild(renderMovie(cinema1.movies[i])); //na třídu cinema__movies jsme pověsili funkci renderMovie, která vytváří nový HTML element (div) a tuto funkci voláme pokaždé s jiným parametrem - parametry dosazuje postupně for smyčka
}