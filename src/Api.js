
export const searchPokemons = async (pokemon) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`.toLowerCase();

        const response = await fetch(url);
        return await response.json();

    } catch (err) {
        console.log('ocorreu um erro, tente novamente mais tarde',err);
        alert('ocorreu um erro, tente novamente mais tarde');
    }
}

export const getPokemons = async(limit = 50, offset = 0) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

        const response = await fetch(url);
        return await response.json(); 

    } catch (error) {
        console.log("erro: ", error)
    }
}

export const getPokemonsData = async(url) =>{
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log('erro: ', error)
    }
}

