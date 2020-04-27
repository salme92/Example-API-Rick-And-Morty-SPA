const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; 
//Slide para eliminar el primero, lowerCase para ponerlo en minusculas y el split para cortar los slash (/), el [1] es para traerme solo el ID.

export default getHash;

