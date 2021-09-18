import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const PirateOneShow = (props) => {
    const { _id } = useParams();
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
            .then(res => setPirate(res.data.results))
            .catch(err => console.log(err));

    }, [_id])

    const clickPegLeg = (event) => {
        event.preventDefault();

        setPirate({
            ...pirate,
            pegLeg: pirate.pegLeg = !pirate.pegLeg
        })
        axios.patch(`http://localhost:8000/api/pirates/${pirate._id}/update`, pirate)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    const clickEyePatch = (event) => {
        setPirate({

            ...pirate,
            eyePatch: pirate.eyePatch = !pirate.eyePatch

        })
        axios.patch(`http://localhost:8000/api/pirates/${pirate._id}/update`, pirate)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }
    const clickHookHand = (event) => {
        setPirate({

            ...pirate,
            hookHand: pirate.hookHand = !pirate.hookHand

        })
        axios.patch(`http://localhost:8000/api/pirates/${pirate._id}/update`, pirate)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="pirateHeader">
                <h1>{pirate.name}</h1>
                <Link to="/pirates" className="oneViewBtn">All Pirates</Link>
            </div>
            <div className="showOneCard">
                <div className="columns">
                    <div className="showLeftCol">
                        <img className="showPirateImage" src={pirate.imgUrl} alt="pirate.name" />
                        <h2>{pirate.catchPhrase}</h2>
                    </div>
                    <div className="showRightCol">
                        <h2> About </h2>
                        <p>Position: {pirate.position}</p>
                        <p>Treasures: {pirate.numChests}</p>

                        {pirate.pegLeg ?
                            <p>Peg Leg: Yes <button className="no" onClick={clickPegLeg}>No</button></p>
                            :
                            <p>Peg Leg: No <button className="yes" onClick={clickPegLeg}>Yes</button></p>}

                        {pirate.eyePatch ?
                            <p>Eye Patch: Yes <button className="no" onClick={clickEyePatch}>No</button></p> :
                            <p>Eye Patch: No <button className="yes" onClick={clickEyePatch}> Yes</button></p>}

                        {pirate.hookHand ?

                            <p>Hook Hand: Yes <button className="no" onClick={clickHookHand}>No</button></p> :
                            <p>Hook Hand: No <button className="yes" onClick={clickHookHand}> Yes</button></p>}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PirateOneShow