import React, { useEffect, useState } from 'react';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6d7cbb5407b09f42320fc655b89f6562`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    })


    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className='inputField'
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }} />

                </div>

                {!city ? (
                    <p className='errormsg'>No Data Found</p>
                ) : (
                    <div className='content'>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                        </div>
                        {/* <div id="wave3">
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                        </div> */}
                    </div>
                )}
            </div>


        </>
    )
}

export default Tempapp;
