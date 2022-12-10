import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const UpdateForm = (props) => {
    const { id } = useParams();
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(1);
    const [description, setDescription] = useState("");
    const [reporter, setReporter] = useState("");
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/sightings/' + id)
            .then(res => {
                setLocation(res.data.location);
                setDate(res.data.date);
                setDescription(res.data.description);
                setReporter(res.data.reporter);
                setQuantity(res.data.quantity);
            })
    }, [id]);
    
    const updateSighting = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/sightings/' + id, {
            location,
            date,
            description,
            reporter,
            quantity
        })
            .then(res => {
                console.log(res);
                window.location = "/dashboard";
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Bird Sighting</h1>
            <button className = 'btn btn-primary'onClick={() =>{window.location = "/dashboard"}}>Dashboard</button>
            <form onSubmit={updateSighting}>
                <p>
                    <label>Location</label><br />
                    <input type="text" 
                    name="location" 
                    value={location} 
                    onChange={(e) => { setLocation(e.target.value) }} />
                </p>
                <p>
                    <label>Date</label><br />
                    <input type="date" 
                    name="date"
                    value={date} 
                    onChange={(e) => { setDate(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Reporter</label><br />
                    <input type="text" 
                    name="reporter"
                    value={reporter} 
                    onChange={(e) => { setReporter(e.target.value) }} />
                </p>
                <p>
                    <label>Quantity</label><br />
                    <input type="number" 
                    name="quantity"
                    value={quantity} 
                    onChange={(e) => { setQuantity(e.target.value) }} />
                </p>
                <button type="submit" className='btn btn-success'>Submit Changes</button>
            </form>
        </div>
    );
}
    
export default UpdateForm;