import { useState } from "react";

const GetInput = () => {
    const [inputValue, setInput] = useState('');
    const handleInput = (event) =>{
        setInput(event.target.value)
    };
    return handleInput()
    
}
export default GetInput;