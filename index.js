const axios = require('axios');

axios.get('https://api.spacexdata.com/v3/missions')
.then(response => {
    console.log(response.data);
    const missionArray = response.data;
    const firstElement = missionArray[0];
    const { name } = firstElement;
    // use axios to grab data from second API
    axios.get(`https://api.github.com/users/${name}`)
    .then(response => {
        console.log(response.data);

    })
});

axios.get('https://api.github.com/users/romebell')
.then(response => {
    console.log(response.data);
});

const getThreeSources = async () => {
    const amirReponse = await axios.get(`https://api.github.com/users/aharri64`);
    const amirData = amirReponse.data;
    console.log(amirData);

    const romeResponse = await axios.get(`https://api.github.com/users/romebell`);
    const romeData = romeResponse.data;
    console.log(romeData);

    const facebookResponse = await axios.get(`https://api.github.com/users/facebook`);
    const facebookData = facebookResponse.data;
    console.log(facebookData);
}

// run the function
getThreeSources();


// Assume this your project
// Assume that I have the database
// Assume array is ready to GO
app.get('/favorite', (req, res) => {
    // db.favorite.findAll()
    res.render('favorites', { favoritesArray }); // go to favorites.ejs page
});