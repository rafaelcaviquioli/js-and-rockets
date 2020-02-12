const API_URL_BASE = "https://api.spacexdata.com/v3";

const getPastLaunches = () =>
    fetch(`${API_URL_BASE}/launches/past`)
        .then(response => response.text())
        .then(text => JSON.parse(text));

module.exports = {
    getPastLaunches,
};