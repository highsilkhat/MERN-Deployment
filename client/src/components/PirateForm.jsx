import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const PirateForm = (props) => {
    const history = useHistory();

    const [form, setForm] = useState({
        name: "",
        imgUrl: "",
        numChests: "",
        catchPhrase: "",
        position: "Captain",
        pegLeg: true,
        eyePatch: true,
        hookHand: true

    })

    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/pirates/create", form)
            .then(res => {
                if (res.data.err) {
                    setErrors(res.data.err.errors)
                }
                else {
                    history.push('/pirates')
                }
            })
            .catch(err => console.log(err))
    }

    const inputError = (value) => {
        if (value.length > 0) {
            return false;
        }
        return true;
    }


    return (
        <>
            <div className="pirateHeader">
                <h1>Add Pirate</h1>
                <Link to="/pirates" className="oneViewBtn">All Pirates</Link>

            </div>
            <form onSubmit={onSubmitHandler} className="form">
                <div className="leftForm">
                    <div>
                        <label className= "inputItem">Pirate Name:</label><br/>
                        <input type="text" name="name" onChange={onChangeHandler} />
                        <span> {errors.name && errors.name.message}</span><br/>
                        <span>{inputError(form.name) && "You must create a name for your pirate"}</span><br/>
                    </div>
                    <div>
                        <label className= "inputItem">Image URL:</label><br/>
                        <input type="text" name="imgUrl" onChange={onChangeHandler} />
                        <span> {errors.imgUrl && errors.imgUrl.message}</span><br/>
                        <span>{inputError(form.imgUrl) && "You must submit an image URL for your pirate"}</span><br/>
                    </div>
                    <div>
                        <label className= "inputItem"># of Treasure Chests:</label><br/>
                        <input type="number" name="numChests" onChange={onChangeHandler} />
                        <span> {errors.numChests && errors.numChests.message}</span><br/>
                        <span>{inputError(form.numChests) && "You must choose a number of treasure chests for your pirate"}</span><br/>
                    </div>
                    <div>
                        <label className= "inputItem">Pirate Catch Phrase:</label><br/>
                        <input type="text" name="catchPhrase" onChange={onChangeHandler} />
                        <span> {errors.catchPhrase && errors.catchPhrase.message}</span><br/>
                        <span>{inputError(form.name) && "Your pirate must have a catch phrase"}</span><br/>
                    </div>
                </div>

                <div className="rightForm">
                    <div>
                        <label className= "inputItem">Crew Position:</label><br/>
                        <select type name="position" onChange={onChangeHandler}>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master"> Quarter Master</option>
                            <option value="Boatswain">BoatSwain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                        <span> {errors.position && errors.position.message}</span><br/>
                    </div>
                    <label className= "inputItem">Peg Leg</label><br/>
                    <input type="checkbox" name="pegLeg" onChange={onChangeHandler} checked={form.pegLeg} />
                    <label className= "inputItem">Eye Patch</label>
                    <input type="checkbox" name="eyePatch" onChange={onChangeHandler} checked={form.eyePatch} />
                    <label className= "inputItem">Hook Hand</label>
                    <input type="checkbox" name="hookHand" onChange={onChangeHandler} checked={form.hookHand} />
                    <button className="oneViewBtn" type="submit">Add Pirate</button>
                </div>

            </form>
        </>
    )
}

export default PirateForm