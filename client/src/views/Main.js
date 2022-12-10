import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AllSightings from '../components/AllSightings';


const Main = () => {
    const [sightings, setSightings] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/sightings')
            .then(res =>{
                setSightings(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = sightingId => {
        setSightings(sightings.filter(p => p._id !== sightingId));
    }

    return(
        <div>
            <div className='d-flex flex-row justify-content-center'>
                <h1>Bird Sightings</h1>
            </div>
            <div className='d-flex justify-content-end mx-5'>
                <Link className='btn btn-primary' to="/sighting/new">Add Sighting</Link>
            </div>
            {loaded&&<AllSightings sightings = {sightings} removeFromDom = {removeFromDom}/>}
        </div>
    );
};

export default Main;