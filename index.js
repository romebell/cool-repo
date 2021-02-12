const axios = require('axios');

axios.get('https://api.spacexdata.com/v3/missions')
.then(response => {
    console.log(response.data);
});

const githubData = async () => {
    const github = axios.get('https://api.github.com/users/romebell');
    console.log(github);
}

// run the function
githubData();