import { Link } from 'react-router-dom';
import axios from 'axios';

const AllSightings = (props) => {
    const {removeFromDom, sightings} = props;
    const alphabetic = sightings.sort((a,b) =>(a.location.toLowerCase() < b.location.toLowerCase())? -1:1);


    const deleteSighting = (sightingId) =>{
        axios.delete('http://localhost:8000/api/sightings/' + sightingId)
            .then(res => {
                removeFromDom(sightingId);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h3>Bird Sightings so far:</h3>
            {
                alphabetic.map((item)=>{
                    return(
                        <div className='mx-5 d-flex flex-row justify-content-center border border-dark rounded-3'>
                            <div>
                                <h2>{item.location}</h2>
                                <p>Location: {item.location}</p>
                                <p>Date: {item.date}</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <button onClick = {e=>deleteSighting(item._id)} className = "btn btn-danger mx-2">Delete</button>
                                < Link to={"/sightings/" + item._id + "/edit"} type ="button" className = "btn btn-primary mx-2">Edit/View</Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default AllSightings;