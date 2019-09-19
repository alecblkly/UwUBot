const axios = require('axios');

const getPokemon = async (pokemon) =>{
    try{
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    }catch(error){
        console.log(error);
    }
};

module.exports = {
    name: 'pokepal',
    description: 'Provides data about your favorite pokemon!',
    async execute(message, channel, args){
        const pokemon = await getPokemon(args[0]);

        if(pokemon){
            console.log(`UwU found the pokemon!`);

            pokemonData = {
                'name' : pokemon.data.name,
                'image' : pokemon.data.sprites.front_default
            };
            
            channel.send(`Yes, I haz that pokepal! \nPokemon: ${pokemonData.name} \n${pokemonData.image}`);
        }
    }
}