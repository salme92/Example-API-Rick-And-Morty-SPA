const API = 'https://rickandmortyapi.com/api/character/'; //Me traigo TODOS los datos de la API
console.log(API);

const getData = async (id) => { //Genero asincronamente todos los ID
    const apiURL = id ? `${API}${id}` : API; //Le pregunto si existe el ID, si no existe el ID del personaje, me traigo todos los demás personajes
    //Hago un try...catch, que señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción/error (catch).
    try { 
        const response = await fetch(apiURL); 
        //El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function. 
        //También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
        const data = await response.json();
        //Este data simplemente recoge la respuesta de la respuesta y la convierte en formato JSON para que sea legible y modificable.
        return data;
    } catch (error) {
        console.log('Fetch Error', error); //Devuelve un error en CATCH si es que existe
    };
};

export default getData;