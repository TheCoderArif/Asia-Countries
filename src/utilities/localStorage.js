const getSavedCountryData = () => {
    const countryData = localStorage.getItem('country-data');
    if (countryData) {
        return JSON.parse(countryData)
    }
    else 
        return [];
}

const setCountryData = (data) => {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem('country-data', stringifiedData)
}

const addToLS = data => {
    const countryData = getSavedCountryData()
    countryData.push(data);
    setCountryData(countryData);
}

export {addToLS};