const axios = require('axios');

const getApod = async () =>{
    try{
        return await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    }catch (error){
        console.error(error);
    }
};

module.exports = {
    name: 'apod',
    description: 'Provides the Nasa Astronomy Picture of the Day.',
    async execute(message, channel, args){
        const apod = await getApod();

        if(apod){
            console.log(`UwU fetched apod!`);
            channel.send(apod.data.url);
        }
    },
};