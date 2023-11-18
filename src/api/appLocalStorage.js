const timeOffset = 21600 * 1000;

function isTimeOut(localStorageData) {
    return (Date.now() - localStorageData.date) < timeOffset;
}

export default function appLocalStorage(key, data) {
    if (!data) {
        const localStorageData = JSON.parse(window.localStorage.getItem(key));

        return localStorageData && localStorageData.data && isTimeOut(localStorageData) ? localStorageData.data : null;
    }

    window.localStorage.setItem(
        key,
        JSON.stringify(
            {
                data,
                date: Date.now(),
            }
        )
    );
}
