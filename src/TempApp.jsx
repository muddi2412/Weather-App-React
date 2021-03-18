import react, { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState();

  useEffect(()=>{
    const fetchApi = async () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4dd05f9cd351571186690e659cd690d3`
        const response = await fetch(url);
        const resJson = await response.json();

        console.log(resJson);

        setCity(resJson.main)
    }

      fetchApi();
  },[search])

  return (
    <>
      <div className="box">
        <div className="Input">
          <input
            type="search"
            className="Input-Field"
            onChange={(event) => {setSearch(event.target.value)}}
          />
        </div>
{!city ? (
    <p className="Nodata">No data Found</p>
) : (
    <div>
    <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view fa-2x"></i>
            {search}
          </h2>
          <h1 className="Temp">{city.temp}°Cal</h1>
          <h3 className="tempmin_max"> Min_Temp: {city.temp_min}°Cal || Max_Temp: {city.temp_max}°Cal</h3>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
        </div>
)

}
        
      </div>
    </>
  );
};

export default TempApp;
