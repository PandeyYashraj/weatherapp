import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    let [city, updateCity] = useState('');
    let [data, updateData] = useState({ city: '', icon: '', temp: '', text: '', region: '', country: '' });
    return (
        <>
            <div className='container-fluid'>
                <h2 className='text-center mt-5'>Check the weather forecast</h2>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                        <input className='mt-3 ps-4 pe-4 text-center p-2 input-box' type="text" name="city" placeholder='Enter City Name' value={city} onChange={(e) => {
                            updateCity(e.target.value)
                        }} />      
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                    <button className='d-flex justify-content-center btn btn-primary mt-3' onClick={()=>{
                            async function show()
                            {
                                let r=await axios.get(`https://api.weatherapi.com/v1/current.json?key=e87ff57f979c4616a9b160742221106&q=${city}&api=no`);
                                updateData({city:r.data.location.name,icon:r.data.current.condition.icon,temp:r.data.current.temp_c,text:r.data.current.condition.text,region:r.data.location.region,country:r.data.location.country})
                            }
                            show();
                        }}>Show Weather</button>
                    </div>
                </div>
                <div className='row'>
                    <div className="card mt-5 col-6 mx-auto">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-6 order-2 order-lg-1'>
                                    <h5 className="card-title">{data.city} {data.country}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Current temperature : {data.temp}<sup>o</sup>C</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Feels like : {data.text}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Region : {data.region}</h6>
                                </div>
                                <div className='col-md-6 right order-1 order-lg-2'>
                                    <img className="" src={data.icon} alt="no-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;
