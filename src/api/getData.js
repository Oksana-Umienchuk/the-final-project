
const TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
    }
};

async function getData(url, options) {
    options = {
        ...OPTIONS,
        ...options
    };

    const response = await fetch(BASE_URL + url, options);

    return await response.json();
}

export default getData;
