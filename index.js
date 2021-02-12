const axios = require('axios');

axios.get('https://api.spacexdata.com/v3/missions')
.then(response => {
    console.log(response.data);
});

axios.get('https://api.github.com/users/romebell')
.then(response => {
    console.log(response.data);
});