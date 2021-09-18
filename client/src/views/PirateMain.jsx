import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PirateCard from '../components/PirateCard';
import {Link} from 'react-router-dom';

const PirateMain = (props) => {

const [pirates, setPirates] = useState([])
const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/all")
            .then(res => {
                console.log(res)
                setPirates(res.data.results);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [loaded])

    return (
        <div>
            <div className= "pirateHeader">
                <h1 className="pageTitle">Pirate Crew</h1>
                <Link to="/pirate/new" className="oneViewBtn">Add Pirate</Link>
            </div>
            {
                pirates.map((item, i) => {
                    return <PirateCard pirate={item} id={i}/>
                })
            }
        </div>
    );
}

export default PirateMain