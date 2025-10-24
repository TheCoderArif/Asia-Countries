import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
import { addToLS } from "../../utilities/localStorage";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const [visitList, setVisitList] = useState([]);
    const handleVisitList = visitedCountry => {
        setVisitList(visitedCountry);
        const newVisitList = [ ...visitList, visitedCountry];
        // newVisitList.push(visitedCountry)
        setVisitList(newVisitList);
        // addToLS(visitList.cca3)
        // console.log(visitList.name.common)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="visited-countries">
                <h3>Visited Countries:</h3>
                <ol>
                    {
                        visitList.map(data => <li style={{color: 'black'}} key={data.cca3}>{data.name.common}</li>)
                    }
                </ol>
            </div>
            <div className="box">
                {
                    countries.map(country => <Country 
                        data={country}
                        key={country.cca3}
                        handleVisitList={handleVisitList}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;