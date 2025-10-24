import { useState } from 'react';
import './Country.css'
const Country = (props) => {
    const country = props.data;
    const {name, flags} = country;
    console.log(country)

    const [visit, setVisit] = useState(false);
    const handleVisit = () => {
        setVisit(!visit)
    }

    return (
        <div className= {`box-style ${visit? 'visit' : 'wanna-visit'}`} >
            <h3>Name: {name.common}</h3>
            <h3>flag: <img src={flags.png} alt="" /></h3>
            <button onClick={handleVisit}>{visit? 'Visited': 'Wanna Visit'}</button>
            
            <button>Add to List</button>
        </div>
    );
};

export default Country;