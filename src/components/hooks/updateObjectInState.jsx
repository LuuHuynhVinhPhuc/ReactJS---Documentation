// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const UpdateObjectInState = () => {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });
    
    function handleYearChange(event){
        setCar({...car, year: event.target.value}); // ... car is update Object in state
    }
    function handleMakeChange(event){
        setCar({...car, make: event.target.value})
    }
    function handleModelChange(event){
        setCar(car => ({...car, model: event.target.value}));  // another way 
    }

  return (
    <div>
        <p>Your favorite car is : {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/> <br />
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
        <input type="text" value={car.model} onChange={handleModelChange}/> <br />
    </div>
  )
}

export default UpdateObjectInState