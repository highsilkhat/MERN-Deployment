import React from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";


const PirateCard = (props) => {

    const onDeleteHandler = (_id) => {

        axios.delete(`http://localhost:8000/api/pirates/${_id}/delete`)
            .then(res => {
                console.log(res)
                props.setLoaded(false);
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="card">

            <div className="leftCard">
                <img className="pirateImage" src={props.pirate.imgUrl} alt="props.pirate.name" />
            </div>
            <div className="rightCard">
                <div className="topRightCard">
                    <h2>{props.pirate.name}</h2>
                </div>
                <div className="bottomRightCard">
                <Link to={`/pirate/${props.pirate._id}`} className="oneViewBtn">View Pirate</Link>
                

                <button className="deleteBtn" onClick={(event) => { onDeleteHandler(props.pirate._id) }}> Walk the Plank</button>
                </div>

            </div>

        </div>

    )
}

export default PirateCard