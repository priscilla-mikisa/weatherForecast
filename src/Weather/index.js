import './index.css'
import GetInput from '../GetInput';
import { useState } from "react";

// import { useState, useEffect} from "react";

// export const useWeather = () => {
//     const [city, setCity] = useState('');
    
// }


const Weather = () => {
    const [inputValue, setInput] = useState('');
    const handleInput = (event) =>{
        setInput(event.target.value)
    };
    return(
        <div id='main'>
            <div>
          <h2 id='name'>Rayn</h2> <input placeholder='Enter city name' type='text' value={inputValue} onChange={handleInput} id='searchBar'></input>
          <button type='click' id='searchButton'>search</button>
          </div> 
          <div>
            <img src='/images/sunset.jpg' className='img'/>
          </div>
          <div>
            <div id='weatherInfo'>
          <div></div>
          <div></div>
            </div>
            <div>
            
            </div>
          </div>
        </div>
    )
}
export default Weather;