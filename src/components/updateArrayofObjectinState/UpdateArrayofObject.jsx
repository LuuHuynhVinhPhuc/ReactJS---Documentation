// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const UpdateArrayofObject = () => {
    // state for manage car infomation
    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    // function CRUD for it
    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };

        setCar((c) => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    function handleremoveCar(index) {
        setCar((c) => c.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {car.map((e, index) => (
                    <li key={index} onClick={() => handleremoveCar(index)}>
                        {e.year} {e.make} {e.model}
                    </li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} />
            <br />
            <input
                type="text"
                value={carMake}
                onChange={handleMakeChange}
                placeholder="Enter car make"
            />
            <br />
            <input
                type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="Enter car model"
            />
            <br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
};

export default UpdateArrayofObject;
