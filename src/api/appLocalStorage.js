const timeOffset = 21600 * 1000;

function isTimeOut(localStorageData) {
    const dateNow = Date.now();
    console.log((dateNow - localStorageData.date) < timeOffset);
    return (dateNow - localStorageData.date) < timeOffset;
}

function appLocalStorage(key, data) {
    if (data) window.localStorage.setItem(key, JSON.stringify({
        data,
        date: Date.now(),
    }));

    if (!data) {
        const localStorageData = JSON.parse(window.localStorage.getItem(key));
        console.log(localStorageData.date);
        return isTimeOut(localStorageData) ? localStorageData.date : null;
    }
}

export default appLocalStorage;
