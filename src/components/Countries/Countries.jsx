import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="box">
                {
                    countries.map(country => <Country 
                        data={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;