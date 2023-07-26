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
import Image26 from "../assets/film26.jpg";
import Image27 from "../assets/film27.jpg";
import Image28 from "../assets/film28.jpg";
import Image29 from "../assets/film29.jpg";
import Image30 from "../assets/film30.jpg";
import Image31 from "../assets/film31.jpg";
import Image32 from "../assets/film32.jpg";
import Image33 from "../assets/film33.jpg";
import Image34 from "../assets/film34.jpg";
import Image35 from "../assets/film35.jpg";
import Image36 from "../assets/film36.jpg";
import Image37 from "../assets/film37.jpg";
import Image38 from "../assets/film38.jpg";
import Image39 from "../assets/film39.jpg";
import Image40 from "../assets/film40.jpg";
import Image41 from "../assets/film41.jpg";
import Image42 from "../assets/film42.jpg";
import Image43 from "../assets/film43.jpg";
import Image44 from "../assets/film44.jpg";
import Image45 from "../assets/film45.jpg";
import Bn01 from "../assets/bn-film01.jpg";
import Bn02 from "../assets/bn-film02.jpg";
import Bn03 from "../assets/bn-film03.jpg";
import Bn04 from "../assets/bn-film04.jpg";
import Bn05 from "../assets/bn-film05.jpg";
import Bn06 from "../assets/bn-film06.jpg";
import Bn07 from "../assets/bn-film07.jpg";




const movies = [
  {
    title: 'The Lost Boys',
    director: 'Joel Schumacher',
    genero: 'Terror',
    year: 1987,
    img: Image1,
    banner: Bn01,
    cast: 'Jason Patric, Corey Haim, Kiefer Sutherland',
    text: "After moving to a new town, two brothers are convinced that the area is frequented by vampires."
  },
  {
    title: "Muriel's Wedding",
    director: 'P. J. Hogan',
    genero: 'Comedia',
    year: 1994,
    img: Image2,
    banner: Bn02,
    cast: 'Toni Collette, Rachel Griffiths, Bill Hunter',
    text: "Muriel finds her life dull and spends her days alone in her room listening to ABBA music and dreaming of her wedding day. Slight problem, Muriel has never had a date. After stealing some money, she decides to go on a tropical vacation and befriends the wacky Rhonda who turns her world upside down."
  },
  {
    title: 'Tomboy',
    director: 'Celine Sciamma',
    genero: 'Coming Of Age',
    year: 2011,
    img: Image3,
    banner: Bn03,
    cast: 'Zoé Héran, Malonn Lévana, Jeanne Disson',
    text: "There is definitely something boyish about ten-year-old Laure. It’s summer and she has recently moved to a new area with her parents and her little sister, Jeanne. Laure allows her new neighbourhood acquaintances to believe that she is a boy. That’s how Laure becomes Michael. Truth or dare?"
  },
  {
    title: 'Brawl In Cell Block 99',
    director: 'S. Craig Zahler',
    genero: 'Accion',
    year: 2017,
    img: Image4,
    banner: Bn04,
    cast: 'Vince Vaughn, Jennifer Carpenter, Don Johnson',
    text: "A former boxer-turned-drug runner finds himself in a gunfight between the police and his own ruthless allies. When the smoke clears, he is badly hurt and thrown in prison, where his enemies force him to commit acts of violence that turn the place into a savage battleground."
  },
  {
    title: 'VFW',
    director: 'Joe Begos',
    genero: 'Accion/Terror',
    year: 2019,
    img: Image5,
    banner: Bn05,
    cast: 'Stephen Lang, William Sadler, Fred Williamson',
    text: "A group of war veterans must defend their local VFW post and an innocent teen against a deranged drug dealer and his relentless army of punk mutants."
  },
  {
    title: 'Dressed To Kill',
    director: 'Brian De Palma',
    genero: 'Thriller',
    year: 1980,
    img: Image6,
    banner: Bn06,
    cast: 'Michael Caine, Angie Dickinson, Nancy Allen',
    text: "Kate, una mujer frustrada en la mayoría de los aspectos visita a su psiquiatra para obtener consejos de un profesional sobre cómo mejorar su inactiva vida sexual. De regreso a casa, tiene un fortuito encuentro con alguien que le parece muy familiar."
  },
  {
    title: 'True Romance',
    director: 'Tony Scott',
    genero: 'Comedia/Accion',
    year: 1993,
    img: Image7,
    banner: Bn07,
    cast: 'Christian Slater, Patricia Arquette, Dennis Hopper',
    text: "Scripted by Quentin Tarantino, this violent, darkly comic romance follows a nerdy comic book store clerk who falls for a beautiful call girl and takes her on the run with him after accidentally murdering her pimp and stealing his cocaine."
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
  {
    title: 'To Catch A Thief',
    director: 'Alfred Hitchcock',
    genero: 'Comedia / Policial',
    year: 1955,
    img: Image26,
    cast: 's',
  },
  {
    title: 'The French Connection',
    director: 'William Friedkin',
    genero: 'Policial',
    year: 1971,
    img: Image27,
    cast: 's',
  },
  {
    title: 'Streets Of Fire',
    director: 'Walter Hill',
    genero: 'Acción',
    year: 1984,
    img: Image28,
    cast: 's',
  },
  {
    title: 'Hard Boiled',
    director: 'John Woo',
    genero: 'Accion',
    year: 1992,
    img: Image29,
    cast: 's',
  },
  {
    title: 'Snake Eyes',
    director: 'Brian De Palma',
    genero: 'Policial',
    year: 1998,
    img: Image30,
    cast: 's',
  },
  {
    title: 'Assault on Precinct 13',
    director: 'John Carpenter',
    genero: 'Acción',
    year: 1976,
    img: Image31,
    cast: 'Austin Stoker, Darwin Joston, Laurie Zimmer',
  },
  {
    title: 'Phenomena',
    director: 'Dario Argento',
    genero: 'Terror',
    year: 1984,
    img: Image32,
    cast: 'Jennifer Connelly, Donald Pleasence, Daria Nicolodi',
  },
  {
    title: 'Carne Trémula',
    director: 'Pedro Almodovar',
    genero: 'Romance/Comedia',
    year: 1997,
    img: Image33,
    cast: 'Javier Bardem, Francesca Neri, Liberto Rabal',
  },
  {
    title: 'The Edge Of Seventeen',
    director: 'Kelly Fremon',
    genero: 'Coming Of Age',
    year: 2016,
    img: Image34,
    cast: 'Hailee Steinfeld, Haley Lu Richardson, Blake Jenner',
  },
  {
    title: 'Bliss',
    director: 'Joe Begos',
    genero: 'Terror',
    year: 2019,
    img: Image35,
    cast: 'Dora Madison, Tru Collins, Rhys Wakefield',
  },
  {
    title: 'The Parallax View',
    director: 'Alan J. Pakula',
    genero: 'Drama Político',
    year: 1974,
    img: Image36,
    cast: 'Warren Beatty, Paula Prentiss, William Daniels',
  },
  {
    title: 'Hardcore',
    director: 'Paul Schrader',
    genero: 'Drama',
    year: 1979,
    img: Image37,
    cast: 'George C. Scott, Peter Boyle, Season Hubley',
  },
  {
    title: 'True Lies',
    director: 'James Cameron',
    genero: 'Acción/Romance/Comedia',
    year: 1994,
    img: Image38,
    cast: 'Arnold Schwarzenegger, Jamie Lee Curtis, Tom Arnold',
  },
  {
    title: 'A History Of Violence',
    director: 'David Cronenberg',
    genero: 'Acción/Drama',
    year: 2005,
    img: Image39,
    cast: 'Viggo Mortensen, Maria Bello, Ed Harris',
  },
  {
    title: 'Crawl',
    director: 'Alexandre Aja',
    genero: 'Terror',
    year: 2019,
    img: Image40,
    cast: 'Kaya Scodelario, Barry Pepper, Ross Anderson',
  },
  {
    title: 'Seconds',
    director: 'John Frankenheimer',
    genero: 'Ciencia Ficción/Drama',
    year: 1966,
    img: Image41,
    cast: 'Rock Hudson, Salome Jens, John Randolph',
  },
  {
    title: 'Possession',
    director: 'Andrzej Zulawski',
    genero: 'Terror/Drama',
    year: 1981,
    img: Image42,
    cast: 'Isabelle Adjani, Sam Neill, Margit Carstensen',
  },
  {
    title: 'The Beyond',
    director: 'Lucio Fulci',
    genero: 'Terror',
    year: 1981,
    img: Image43,
    cast: 'Catriona MacColl, David Warbeck, Cinzia Monreale',
  },
  {
    title: 'After Hours',
    director: 'Martin Scorsese',
    genero: 'Comedia',
    year: 1985,
    img: Image44,
    cast: 'Griffin Dunne, Rosanna Arquette, Verna Bloom',
  },
  {
    title: 'Memories Of Murder',
    director: 'Bong Joon-Ho',
    genero: 'Policial',
    year: 2003,
    img: Image45,
    cast: 'Song Kang-ho, Kim Sang-kyung, Kim Roi-ha',
  }
];

export default movies;
    
    




