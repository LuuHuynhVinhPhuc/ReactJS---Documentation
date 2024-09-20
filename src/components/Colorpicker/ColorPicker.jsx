// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF");
    
    //handler color
    function HandleColorChange(event){
        setColor(event.target.value);
    }

    // this is hexa Color
    return(
        <div className='colorpicker-container'>
            <h1 className='picker-title'>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Select Color: {color}</p> 
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={HandleColorChange}/>
        </div>
    )
}

export default ColorPicker