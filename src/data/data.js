import Image1 from "../assets/film01.jpg";
import Image2 from "../assets/film02.jpg";
import Image3 from "../assets/film03.jpg";
import Image4 from "../assets/film04.jpg";
import Image5 from "../assets/film05.jpg";
import Image6 from "../assets/film06.jpg";
import Image7 from "../assets/film07.jpg";
import Image8 from "../assets/film08.jpg";
import Image9 from "../assets/film09.jpg";
import Image10 from "../assets/film10.jpg";
import Image11 from "../assets/film11.jpg";
import Image12 from "../assets/film12.jpg";
import Image13 from "../assets/film13.jpg";
import Image14 from "../assets/film14.jpg";
import Image15 from "../assets/film15.jpg";
import Image16 from "../assets/film16.jpg";
import Image17 from "../assets/film17.jpg";
import Image18 from "../assets/film18.jpg";
import Image19 from "../assets/film19.jpg";
import Image20 from "../assets/film20.jpg";
import Image21 from "../assets/film21.jpg";
import Image22 from "../assets/film22.jpg";
import Image23 from "../assets/film23.jpg";
import Image24 from "../assets/film24.jpg";
import Image25 from "../assets/film25.jpg";

const movies = [
  {
    title: 'The Lost Boys',
    director: 'Joel Schumacher',
    genero: 'Terror',
    year: 1987,
    img: Image1,
    cast: 'Jason Patric, Corey Haim, Kiefer Sutherland',
  },
  {
    title: "Muriel's Wedding",
    director: 'P. J. Hogan',
    genero: 'Comedia',
    year: 1994,
    img: Image2,
    cast: 'Toni Collette, Rachel Griffiths, Bill Hunter',
  },
  {
    title: 'Tomboy',
    director: 'Celine Sciamma',
    genero: 'Coming Of Age',
    year: 2011,
    img: Image3,
    cast: 'Zoé Héran, Malonn Lévana, Jeanne Disson',
  },
  {
    title: 'Brawl In Cell Block 99',
    director: 'S. Craig Zahler',
    genero: 'Accion',
    year: 2017,
    img: Image4,
    cast: 'Vince Vaughn, Jennifer Carpenter, Don Johnson',
  },
  {
    title: 'VFW',
    director: 'Joe Begos',
    genero: 'Accion/Terror',
    year: 2019,
    img: Image5,
    cast: 'Stephen Lang, William Sadler, Fred Williamson',
  },
  {
    title: 'Dressed To Kill',
    director: 'Brian De Palma',
    genero: 'Thriller',
    year: 1980,
    img: Image6,
    cast: 'Michael Caine, Angie Dickinson, Nancy Allen',
  },
  {
    title: 'True Romance',
    director: 'Tony Scott',
    genero: 'Comedia/Accion',
    year: 1993,
    img: Image7,
    cast: 'Christian Slater, Patricia Arquette, Dennis Hopper',
  },
  {
    title: 'Los Paranoicos',
    director: 'Gabriel Medina',
    genero: 'Coming Of Age',
    year: 2008,
    img: Image8,
    cast: 'Daniel Hendler, Jazmín Stuart, Walter Jakob',
  },
  {
    title: 'Like Father Like Son',
    director: 'Hirokazu Koreeda',
    genero: 'Drama',
    year: 2013,
    img: Image9,
    cast: 'Masaharu Fukuyama, Machiko Ono, Yōko Maki',
  },
  {
    title: 'Under The Silver Lake',
    director: 'David Robert Mitchell',
    genero: 'Neo Noir',
    year: 2018,
    img: Image10,
    cast: 'Andrew Garfield, Riley Keough, Topher Grace',
  },
  {
    title: 'Targets',
    director: 'Peter Bogdanovich',
    genero: 'Terror',
    year: 1968,
    img: Image11,
    cast: 'Boris Karloff, Tim O\'Kelly, Peter Bogdanovich',
  },
  {
    title: 'Picnic At Hanging Rock',
    director: 'Peter Weir',
    genero: 'Drama/Terror',
    year: 1975,
    img: Image12,
    cast: 'Rachel Roberts, Anne-Louise Lambert, Vivean Gray',
  },
  {
    title: 'Do The Right Thing',
    director: 'Spike Lee',
    genero: 'Comedia',
    year: 1989,
    img: Image13,
    cast: 'Danny Aiello, Spike Lee, John Turturro',
  },
  {
    title: 'Heat',
    director: 'Michael Mann',
    genero: 'Accion',
    year: 1995,
    img: Image14,
    cast: 'Al Pacino, Robert De Niro, Val Kilmer',
  },
  {
    title: 'The Assistant',
    director: 'Kitty Green',
    genero: 'Drama',
    year: 2019,
    img: Image15,
    cast: 'Julia Garner, Matthew Macfadyen, Makenzie Leigh',
  },
  {
    title: 'Bringing Up Baby',
    director: 'Howard Hawks',
    genero: 'Screwball Comedy',
    year: 1938,
    img: Image16,
    cast: 'Cary Grant, Katharine Hepburn, Charles Ruggles',
  },
  {
    title: 'Le Cercle Rouge',
    director: 'Jean-Pierre Melville',
    genero: 'Policial',
    year: 1970,
    img: Image17,
    cast: 'Alain Delon, André Bourvil, Gian Maria Volonté',
  },
  {
    title: 'Bring Me The Head Of Alfredo Garcia',
    director: 'Sam Peckinpah',
    genero: 'Accion',
    year: 1974,
    img: Image18,
    cast: 'Warren Oates, Isela Vega, Robert Webber',
  },
  {
    title: 'Sorcerer',
    director: 'William Friedkin',
    genero: 'Aventura/Terror/Drama',
    year: 1977,
    img: Image19,
    cast: 'Roy Scheider, Bruno Cremer, Francisco Rabal',
  },
  {
    title: 'Volver',
    director: 'Pedro Almodóvar',
    genero: 'Comedia',
    year: 2006,
    img: Image20,
    cast: 'Penélope Cruz, Carmen Maura, Lola Dueñas',
  },
  {
    title: 'Blood And Black Lace',
    director: 'Mario Bava',
    genero: 'Giallo',
    year: 1964,
    img: Image21,
    cast: 'Cameron Mitchell, Eva Bartok, Thomas Reiner',
  },
  {
    title: 'Le Samourai',
    director: 'Jean-Pierre Melville',
    genero: 'Policial',
    year: 1967,
    img: Image22,
    cast: 'Alain Delon, Nathalie Delon, François Périer',
  },
  {
    title: 'Cruising',
    director: 'William Friedkin',
    genero: 'Policia/Terror',
    year: 1980,
    img: Image23,
    cast: 'Al Pacino, Karen Allen, Paul Sorvino',
  },
  {
    title: 'In The Mouth Of Madness',
    director: 'John Carpenter',
    genero: 'Terror',
    year: 1994,
    img: Image24,
    cast: 'Sam Neill, Julie Carmen, Jürgen Prochnow',
  },
  {
    title: 'Possessor',
    director: 'Brandon Cronenberg',
    genero: 'Body Horror',
    year: 2020,
    img: Image25,
    cast: 'Andrea Riseborough, Christopher Abbott, Jennifer Jason Leigh',
  },
];

export default movies;
    
    




