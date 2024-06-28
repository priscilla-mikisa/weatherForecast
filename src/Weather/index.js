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
        <div>
            <div>
          <h2>Rayn</h2> 
          <input placeholder='Enter city name' type='text' value={inputValue} onChange={handleInput}></input>
          <button type='click'>search</button>
          </div> 
          <div>
            <img src='/images/sunset.jpg'/>
          </div>
          <div>
            <div>

            </div>
            <div>
              
            </div>
          </div>
        </div>
    )
}
export default Weather;