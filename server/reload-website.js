const axios = require('axios');

const url = 'https://wa.thewebnix.com';
const interval = 600000; // 10 minutes

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log('website reloaded');
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
}

// Initial call
reloadWebsite();
// Set interval
setInterval(reloadWebsite, interval);
