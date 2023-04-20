##Ejercicio useContext
Con el siguiente array de peliculas crear una aplicacion que agregue o elimine peliculas de favoritos.

export const movies = [
{
id: 1,
img: "https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg",
name: "Stranger Things",
},
{
id: 2,
img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/06/obi-wan-kenobi-cartel-nuevo-2721977.jpg?itok=nVyLrY8_",
name: "Obi-Wan Kenobi",
},
{
id: 3,
img: "https://pics.filmaffinity.com/Sense8_Serie_de_TV-122389805-large.jpg",
name: "Sense 8",
},
];

// Pueden agregar mas peliculas

- Crear un Header con el titulo de la aplicacion.
- Todas las funcionalidades de la lista de favoritos deben estar en el context.
- Mostrar las peliculas Favoritas en un componente Drawer de ChakraUI
- Deben poder prevenir que el usuario agregue las peliculas si ya estaban en la lista previamente.
- En Lista de favoritos, cada pelicula debe tener un boton de quitar de la lista.
- Ademas debe haber un boton de vaciar la lista, que la limpiara completa.
