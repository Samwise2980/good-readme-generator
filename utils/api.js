const axios = require("axios");


require('dotenv').config()


const api = {
  getUser(username) {

    const url = `https://api.github.com/users/${username}`;
    return axios.get(url)

  }
};

module.exports = api;
