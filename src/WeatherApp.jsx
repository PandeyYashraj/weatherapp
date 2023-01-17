import React from 'react'

const WeatherApp = () => {
  return (
    <>
      <h1>Weather Component is running</h1>
        <input type="text" name="city" value={city} onChange={(e)=>{
            updateCity(e.target.value)
        }} />
        <h2>{data.city} <br/> {data.temp} <br/> {data.text} <br/> {data.region} <br/> {data.country}</h2>
        <img src={data.icon} alt="noimage" />
        <button onClick={()=>{
            async function show()
            {
                let r=await axios.get(`https://api.weatherapi.com/v1/current.json?key=e87ff57f979c4616a9b160742221106&q=${city}&api=no`);
                updateData({city:r.data.location.name,icon:r.data.current.condition.icon,temp:r.data.current.temp_c,text:r.data.current.condition.text,region:r.data.location.region,country:r.data.location.country})
            }
            show();
        }}>Show Weather</button>
        <div className="card-body">
                            <img src={data.icon} alt="no-image" />
                            <h5 className="card-title">{data.city} {data.country}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Current temperature : {data.temp}<sup>o</sup>C</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Feels like : {data.text}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Region : {data.region}</h6>
                        </div>
    </>
  )
}

export default WeatherApp

