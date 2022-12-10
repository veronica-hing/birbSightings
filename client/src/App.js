import './App.css';
import Main from './views/Main';
import {Route, Routes} from 'react-router-dom';
import UpdateForm from './views/UpdateForm';
import SightingForm from './views/SightingForm';

function App() {
    return (
      <div className = "App">
      <Routes>
        <Route element = {<Main/>} path = "/dashboard" />
        <Route element = {<UpdateForm/>} path = "/sightings/:id/edit" />
        <Route element = {<SightingForm/>} path = "/sighting/new"/>
      </Routes>
    </div>
    )
}

export default App;