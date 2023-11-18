import appLocalStorage from "./appLocalStorage";

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
    const chashData = appLocalStorage(url);

    if (chashData) return chashData;

    options = {
        ...OPTIONS,
        ...options
    };

    const response = await fetch(BASE_URL + decodeURIComponent(url), options);
    const data = await response.json();

    if (!data.errors) appLocalStorage(url, data);

    return data;
}

export default getData;
