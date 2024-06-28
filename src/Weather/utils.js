const baseUrl = process.env.REACT_APP_BASE_URL;
// import { useState } from "react";


const weather = async() => {
    try{
        const response = await fetch(`${baseUrl}${Nairobi}&aqi=no`)
        return response.json();
    }
    catch(error){
        throw new Error(error.message);
    }
};
export default weather;