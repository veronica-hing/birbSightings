import React, {useState} from 'react';
import axios from 'axios';

const SightingForm = () => {
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});
    const changeHandler = (e)=>{
        if(e.target.type === "checkbox"){
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setFormInfo({
                ...formInfo,
            [e.target.name]: e.target.value
            })
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/sightings", formInfo)
            .then(response=>{
                
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                    console.log("response on submit", response.errors);
                }else{
                    setFormErrors({})
                    window.location = "/dashboard";
                }
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Saw some Birds?</h3>
            <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="">Location:</label>
                <input type="text" name="location" className="form-control" onChange={changeHandler} />
                <p className="text-danger">{formErrors.location?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Date:</label>
                <input type="date" name="date" className="form-control" onChange={changeHandler} />
                <p className="text-danger">{formErrors.date?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Description:</label>
                <input type="text" name="description" className="form-control" onChange={changeHandler} />
                <p className="text-danger">{formErrors.description?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Reporter:</label>
                <input type="text" name="reporter" className="form-control" onChange={changeHandler} />
                <p className="text-danger">{formErrors.reporter?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Quantity:</label>
                <input type="number" name="quantity" className="form-control" onChange={changeHandler} />
                <p className="text-danger">{formErrors.quantity?.message}</p>
            </div>
            <input type="submit" value="Create" className="btn btn-success m-3" onChange={changeHandler} />
            </form>
        </div>
    );
};

export default SightingForm;