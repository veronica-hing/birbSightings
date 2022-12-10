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
            <div className='d-inline-flex flex-column'>
            {
                alphabetic.map((item)=>{
                    return(
                        
                            <div className='p-2 d-flex justify-content-left border border-dark rounded-3'>
                                <div>
                                    <p>Location: {item.location} - Date: {item.date}</p>
                                    <p>Reported by: {item.reporter}</p>
                                </div>
                                <div className="p-4 d-flex justify-content-right align-items-center">
                                    <button onClick = {e=>deleteSighting(item._id)} className = "btn btn-danger mx-2">Delete</button>
                                    < Link to={"/sightings/" + item._id + "/edit"} type ="button" className = "btn btn-primary mx-2">Edit/View</Link>
                                </div>
                            </div>
                    );
                })
            }
            </div>
        </div>
    );
};

export default AllSightings;